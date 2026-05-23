---
title: "PipeWire latency spikes destroying my audio session on CachyOS"
date: "2025-05-19"
tag: linux
type: debug
broke: "DAW session had 200ms+ random latency, dropouts every few minutes"
tried: "Switched from PipeWire to PulseAudio, tweaked buffer sizes, reinstalled audio stack"
fixed: "Set quantum to 256 via pw-metadata and pinned the realtime priority"
readTime: "7 min read"
---

Been running CachyOS as my daily driver for a few months now and everything has been solid — until I tried to do some audio work last week. Opened up my DAW and immediately noticed something was badly wrong.

## What was happening

Every few minutes, the audio session would stutter. Not a brief pop — a full 200ms+ freeze that made recording unusable. The dropout would show up in the DAW's audio buffer meter as a spike, but the CPU was sitting at maybe 15%.

This wasn't a hardware problem. The same session ran fine on Windows. Something in the PipeWire stack was misbehaving.

## What I tried first (didn't work)

**Switching to PulseAudio** — same problem. Ruled out PipeWire-specific bugs.

**Increasing buffer size in the DAW** — helped slightly but didn't fix it. The dropout was still happening, just less frequently.

**Reinstalling the entire audio stack** — clean slate, same result. Annoying.

## Digging into it

Ran `pw-top` while the dropout happened and noticed the quantum was jumping around. It wasn't staying stable at a fixed value — something was requesting different quantum sizes and PipeWire was trying to accommodate all of them simultaneously.

```bash
pw-top
```

Watch the `Q` column. If it's fluctuating, that's your problem.

## The actual fix

Force a fixed quantum and pin it:

```bash
# Set quantum to 256 (lower = less latency, but more CPU)
pw-metadata -n settings 0 clock.force-quantum 256

# Also set the sample rate explicitly
pw-metadata -n settings 0 clock.force-rate 48000
```

To make it persist across reboots, add to `/etc/pipewire/pipewire.conf.d/99-realtime.conf`:

```conf
context.properties = {
    default.clock.quantum = 256
    default.clock.min-quantum = 256
    default.clock.max-quantum = 256
}
```

Then restart PipeWire:

```bash
systemctl --user restart pipewire pipewire-pulse
```

## Result

Zero dropouts since. The quantum stays locked at 256 and the DAW is happy. Latency went from unpredictable 200ms spikes to a consistent ~5ms.

If you're on CachyOS or any Arch-based distro with PipeWire and experiencing audio weirdness, check your quantum first. It's almost always this.

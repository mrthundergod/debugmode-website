---
title: "Gaming rig build log: 9800X3D + RTX 5080 — the POST loop nightmare"
date: "2025-05-12"
tag: hardware
type: buildlog
description: "New build wouldn't POST. Three days of debugging a RAM compatibility issue hiding in plain sight."
readTime: "12 min read"
---

Finally pulled the trigger on a new rig. Been running my old 5800X build for three years and it was time. Here's everything that happened — including the part where I nearly returned the whole thing.

## The parts

- **CPU:** AMD Ryzen 9 9800X3D
- **Motherboard:** ASUS ROG Crosshair X870E Hero
- **RAM:** G.Skill Trident Z5 Neo 32GB DDR5-6000 CL30
- **GPU:** RTX 5080 FE
- **Storage:** Samsung 990 Pro 2TB NVMe
- **PSU:** Seasonic Prime TX-1000

Nothing exotic. All parts on the QVL. Should have been a clean build.

## Day 1 — the POST loop

Assembled everything, hit the power button. Fans spin up, RGB does its thing, then... it reboots. Over and over. No POST, no BIOS, nothing on screen.

Classic POST loop. I've been here before.

First thing I did was strip it back to bare minimum — one stick of RAM in the A2 slot (always A2 on AM5 for single-channel boot), no GPU, onboard video. Still looping.

Tried the other RAM stick. Same.

Cleared CMOS with the jumper. Same.

Reseated the CPU and checked for bent pins — all fine. Checked the 8-pin EPS connectors, both seated properly.

At this point I was starting to think I had a dead board or a dead CPU.

## Day 2 — BIOS update

Checked the ASUS support page. The board shipped with BIOS 1102. The 9800X3D requires at minimum 1201 for proper support. Of course.

Problem: you need to POST to flash BIOS. Classic chicken-and-egg.

ASUS has a feature called BIOS FlashBack — you put the BIOS file on a USB drive, plug it into the specific FlashBack USB port on the rear IO, and hold the button for 3 seconds. It flashes without needing to POST.

Downloaded BIOS 1602 (latest), renamed it to `CROSSHAIR.CAP`, put it on a FAT32 USB drive, held the button.

The FlashBack LED blinked for about 4 minutes then went solid. Tried booting.

Still looping. But now it was looping slightly differently — it was getting a tiny bit further before resetting. Progress, maybe.

## Day 3 — the actual culprit

Did more research and found a thread on the ASUS ROG forum. Someone with the exact same board and RAM reported that DDR5-6000 at XMP/EXPO profile was causing boot issues with early BIOSes, and even after the update, some kits needed the EXPO profile disabled first, then re-enabled after a successful boot.

Tried booting with EXPO disabled — stock 4800MHz speeds.

**It posted.**

BIOS loaded, everything detected correctly. Enabled EXPO, saved, rebooted.

Posted again. And again. Stable.

The EXPO profile wasn't being read correctly before the BIOS update, and the updated BIOS needed to see the kit at stock speeds at least once before it would apply the profile cleanly.

No idea why. But it worked.

## Where it's at now

Running stable at DDR5-6000 CL30 with EXPO. Temperatures are great — 9800X3D sits around 65°C under full gaming load, the 3D V-Cache keeps it lower than you'd expect.

Gaming performance is stupid fast. Everything I've thrown at it hits the GPU limit, not the CPU. Which is exactly what you want.

## Lessons

- Always check CPU compatibility with your specific BIOS version before you build
- ASUS FlashBack is genuinely great when it works — saved me from having to borrow a compatible CPU
- When XMP/EXPO is involved in a POST loop, try stock speeds first

Full specs and benchmarks in a follow-up post once I've had more time with it.

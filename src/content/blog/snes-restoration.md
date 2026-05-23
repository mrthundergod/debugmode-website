---
title: "Restoring a broken SNES I bought for ₹800 — three weekends, one recap job"
date: "2025-04-20"
tag: retro
type: buildlog
description: "Picked up a dead SNES from OLX for cheap. Turned out to be a leaky capacitor situation."
readTime: "10 min read"
---

Found a listing on OLX — "SNES not working, selling as-is" for ₹800. The photos showed it in reasonable cosmetic condition. I figured worst case it's a donor unit for parts. Best case, it's a recap job.

Turned out to be the latter.

## What I got

The unit arrived in a bubble wrap bag with no cables. Cosmetically it was a 7/10 — some yellowing on the top shell, a crack on the cartridge dust flap, but no major damage.

Powered it up with a generic PSU I had lying around. Nothing. Dead silent, no LED, no picture.

## Diagnosis

First thing I checked was the fuse. On the SNES (PAL/NTSC-J variants differ slightly), there's a glass fuse on the board near the power input. Mine was intact.

Checked the voltage rails with a multimeter. The 5V rail was reading 4.1V — noticeably low. The board was pulling more current than the supply could deliver. Could be a shorted component, or more likely, leaky capacitors dragging the rail down.

Opened it up. The board was a PPU1 revision, and under magnification I could see brown residue around several of the electrolytic caps near the audio circuit and the power section. Classic capacitor leakage.

## The recap

SNES caps are well documented. The full list for this revision:

- 8× 10µF 16V radial
- 4× 47µF 16V radial  
- 2× 100µF 10V radial
- 1× 1000µF 6.3V radial (main filter cap)

Ordered a kit from AliExpress — took 12 days to arrive. In the meantime I cleaned the board with isopropyl alcohol and a soft brush to remove the residue from the leaky caps.

Recapping took about two hours. Nothing complicated, just patience. Replaced every electrolytic on the board, not just the obviously bad ones — if one has gone, the others are on borrowed time.

## First boot after recap

Powered it up. LED came on. Green.

Grabbed a copy of Super Mario World I have in my collection, plugged it in.

Worked first try. Picture was clean, audio was clear, no glitches.

5V rail now reading 5.02V. Healthy.

## Cleaning and reassembly

Used Retr0bright (hydrogen peroxide cream + UV exposure) on the top shell to deal with the yellowing. Left it in direct sunlight for about 3 hours, checking every 45 minutes. Got it to about an 8.5/10 — not perfect, but much better.

Replaced the dust flap with a spare I had. Cleaned all the cartridge pins with IPA.

## Total cost

- Unit: ₹800
- Capacitor kit: ~₹350
- Retr0bright supplies: ~₹200 (had most of this already)

**Total: ~₹1,350** for a fully working, recapped SNES. 

## What's next

Want to add a region switch mod so I can run NTSC carts at full speed, and eventually an FPGA cartridge slot adapter. But that's a future weekend project.

For now it's sitting on my shelf next to the PC Engine, doing what it's supposed to do.

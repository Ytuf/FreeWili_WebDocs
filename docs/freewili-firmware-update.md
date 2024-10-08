---
sidebar_position: 9
---

# FREE-WILi Firmware Update

FREE-WILi has two RP2040 processors.  One is the **DISPLAY** processor and the other is the **MAIN** processor.

It is important to update each processor with the correct type of firmware file.

## Updating the Main Processor

Pressing and holding the RED button *as USB is connected* activates the RP2040 ROM bootloader.  This will enable the default way to program the RP2040 via USB.

1) Receive or create a FREE-WILi **MAIN** UF2 file.
2) Hold the RED button and plug in USB.
3) The host computer will show FREE-WILi as a flash drive.
4) Copy the **MAIN** UF2 file to the flash drive.  Allow firmware to update.
5) After the update, FREE-WILi will disconnect from USB and reconnect as a USB COM Port (normal operation).

## Updating the Display Processor

Pressing and holding the BLUE button *as USB is connected* activates the display processor bootloader.

1) Receive or create a FREE-WILi **DISPLAY** UF2 file.
2) Hold the BLUE button and plug in USB.
3) The host computer will show FREE-WILi as a flash drive.
4) Copy the **DISPLAY** UF2 file to the flash drive.  Allow firmware to update.
5) After the update, FREE-WILi will disconnect from USB and reconnect as a USB COM Port (normal operation).
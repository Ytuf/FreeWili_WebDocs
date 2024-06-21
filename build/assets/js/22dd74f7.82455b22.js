"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[567],{5226:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"FREE-WiLi Overview","href":"/","docId":"freewili","unlisted":false},{"type":"link","label":"The Basics","href":"/the-basics","docId":"the-basics","unlisted":false},{"type":"link","label":"GPIO","href":"/gpio","docId":"gpio","unlisted":false},{"type":"category","label":"Radios","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Black Radio (CC1101)","href":"/radios/black-radio-cc1101","docId":"radios/black-radio-cc1101","unlisted":false}],"href":"/radios/"},{"type":"category","label":"GUI : Screen, Buttons, and Lights","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Color Display","href":"/gui-screen-buttons-and-lights/color-display","docId":"gui-screen-buttons-and-lights/color-display","unlisted":false}],"href":"/gui-screen-buttons-and-lights/"},{"type":"category","label":"Extending with Orcas","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Maestro Debug Orca","href":"/extending-with-orcas/maestro-debug-orca","docId":"extending-with-orcas/maestro-debug-orca","unlisted":false},{"type":"link","label":"Custom Orca","href":"/extending-with-orcas/custom-orca","docId":"extending-with-orcas/custom-orca","unlisted":false}],"href":"/extending-with-orcas/"},{"type":"category","label":"IO App","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Main Menu Header","href":"/io-app/main-menu-header","docId":"io-app/main-menu-header","unlisted":false},{"type":"link","label":"Main Menu Commands","href":"/io-app/main-menu-commands","docId":"io-app/main-menu-commands","unlisted":false},{"type":"link","label":"Host USB Serial API","href":"/io-app/host-usb-serial-api","docId":"io-app/host-usb-serial-api","unlisted":false},{"type":"link","label":"Scripting with WASM","href":"/io-app/scripting-with-wasm","docId":"io-app/scripting-with-wasm","unlisted":false},{"type":"link","label":"File System Menu","href":"/io-app/file-system-menu","docId":"io-app/file-system-menu","unlisted":false},{"type":"link","label":"Settings Menu","href":"/io-app/settings-menu","docId":"io-app/settings-menu","unlisted":false}],"href":"/io-app/"},{"type":"category","label":"ICE40 FPGA","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ice40 FPGA Overview","href":"/ice40-fpga/ice40-fpga-overview","docId":"ice40-fpga/ice40-fpga-overview","unlisted":false},{"type":"link","label":"FPGA Programming","href":"/ice40-fpga/fpga-programming","docId":"ice40-fpga/fpga-programming","unlisted":false},{"type":"link","label":"FPGA Clock","href":"/ice40-fpga/fpga-clock","docId":"ice40-fpga/fpga-clock","unlisted":false},{"type":"link","label":"FPGA Connections","href":"/ice40-fpga/fpga-connections","docId":"ice40-fpga/fpga-connections","unlisted":false}],"href":"/ice40-fpga/"},{"type":"link","label":"FREE-WiLi Firmware Update","href":"/freewili-firmware-update","docId":"freewili-firmware-update","unlisted":false},{"type":"link","label":"Helpful Links","href":"/helpful-links","docId":"helpful-links","unlisted":false}]},"docs":{"extending-with-orcas/custom-orca":{"id":"extending-with-orcas/custom-orca","title":"Custom Orca","description":"There are example projects for Orca for KiCAD and Altium Designer.","sidebar":"tutorialSidebar"},"extending-with-orcas/extending-with-orcas":{"id":"extending-with-orcas/extending-with-orcas","title":"Extending with Orcas","description":"Orca modules are modules that plug into the extension connector that provide additional functionality. These can be off-the-shelf or you can make your own.  There are a number of off-the-shelf modules available listed below.","sidebar":"tutorialSidebar"},"extending-with-orcas/maestro-debug-orca":{"id":"extending-with-orcas/maestro-debug-orca","title":"Maestro Debug Orca","description":"The Maestro Orca is a trouble shooting and development tool for FREE-WiLi. The board consists of a USB debugger for the RP2040 main controller and IO test points.","sidebar":"tutorialSidebar"},"freewili":{"id":"freewili","title":"FREE-WiLi Overview","description":"--\x3e","sidebar":"tutorialSidebar"},"freewili-firmware-update":{"id":"freewili-firmware-update","title":"FREE-WiLi Firmware Update","description":"Pressing the RED button when  USB is powered activates the RP2040 ROM boot-loader.  This will enable the default way to program the rp2040 via USB.","sidebar":"tutorialSidebar"},"gpio":{"id":"gpio","title":"GPIO","description":"Description of the GPIO header.","sidebar":"tutorialSidebar"},"gui-screen-buttons-and-lights/color-display":{"id":"gui-screen-buttons-and-lights/color-display","title":"Color Display","description":"The color display allows you to display data using GUI widgets on panels. The are configured using the API.","sidebar":"tutorialSidebar"},"gui-screen-buttons-and-lights/gui-screen-buttons-and-lights":{"id":"gui-screen-buttons-and-lights/gui-screen-buttons-and-lights","title":"GUI : Screen, Buttons, and Lights","description":"The FREE-WiLi has a user interface that makes interacting with the device use-able without a host PC. The user interface is controlled by a separate CPU and interfaces with the main CPU via a 8 Megabit hardware handshaking UART.","sidebar":"tutorialSidebar"},"helpful-links":{"id":"helpful-links","title":"Helpful Links","description":"C/C++ Installer for RP2040 Open Processor","sidebar":"tutorialSidebar"},"ice40-fpga/fpga-clock":{"id":"ice40-fpga/fpga-clock","title":"FPGA Clock","description":"The clock signal to the FPGA is supplied by the main RP2040. This is done on GPIO23 using the Clock Generator feature. The clock generated can be generated from numerous clock sources with a integer and fractional divider. For example, the default sys clock of 125 mhz can be used or divided down. Please see the rp2040 data sheet for details.","sidebar":"tutorialSidebar"},"ice40-fpga/fpga-connections":{"id":"ice40-fpga/fpga-connections","title":"FPGA Connections","description":"The FPGA connects to the Serial SRAM,  IO Drivers, and the RP2040.","sidebar":"tutorialSidebar"},"ice40-fpga/fpga-programming":{"id":"ice40-fpga/fpga-programming","title":"FPGA Programming","description":"The ice40 FPGA is a SRAM configured FPGA that is programmed automatically at power up.","sidebar":"tutorialSidebar"},"ice40-fpga/ice40-fpga":{"id":"ice40-fpga/ice40-fpga","title":"ICE40 FPGA","description":"The FPGA ICE40 is a programmable IO engine between the GPIO and main RP2040 processor. Normally there is a default configuration for the FPGA. Changing the FPGA is an advanced topic.","sidebar":"tutorialSidebar"},"ice40-fpga/ice40-fpga-overview":{"id":"ice40-fpga/ice40-fpga-overview","title":"ice40 FPGA Overview","description":"The FREE-WiLi contains an FPGA between the RP2040 main processor and the IO drivers. The FPGA allows sophisticated high speed IO and state machines that can process IO and communicate to the RP2040 or communicate to the host directly using high speed USB.","sidebar":"tutorialSidebar"},"io-app/file-system-menu":{"id":"io-app/file-system-menu","title":"File System Menu","description":"The File System Menu allows you to interact with the file menu (shown below).","sidebar":"tutorialSidebar"},"io-app/host-usb-serial-api":{"id":"io-app/host-usb-serial-api","title":"Host USB Serial API","description":"To control FREE-WiLi with a host device such as a Linux/Windows PC or Raspberry Pi you can use the USB serial API.","sidebar":"tutorialSidebar"},"io-app/io-app":{"id":"io-app/io-app","title":"IO App","description":"FREE-WiLi includes an IO app that allows you to read and write all the IO of FREE-WiLi. This app has a Serial Command Line Interface, support for a host API,  on-board scripting, and a file system for stand-alone operations without a host.","sidebar":"tutorialSidebar"},"io-app/main-menu-commands":{"id":"io-app/main-menu-commands","title":"Main Menu Commands","description":"Commands are a single letter. After you enter the letter additonal information is entered. The following command are available from the main menu:","sidebar":"tutorialSidebar"},"io-app/main-menu-header":{"id":"io-app/main-menu-header","title":"Main Menu Header","description":"At the top of the main menu there is information on the setup and state of the FREE-WiLi IOs.","sidebar":"tutorialSidebar"},"io-app/scripting-with-wasm":{"id":"io-app/scripting-with-wasm","title":"Scripting with WASM","description":"WebAssembly (WASM)  technology allows a program compiler to target a generic CPU. The program the runs the compiled code is called a web assembly run time.  This technology is included in the IO app.  Please note WebAssembly has nothing to do with the Web - its just where the origin of the technology came from.","sidebar":"tutorialSidebar"},"io-app/settings-menu":{"id":"io-app/settings-menu","title":"Settings Menu","description":"The IO App has settings for the device. These settings control the interface configuration. For example, the UART baud rate.  The settings menu is shown below:","sidebar":"tutorialSidebar"},"radios/black-radio-cc1101":{"id":"radios/black-radio-cc1101","title":"Black Radio (CC1101)","description":"The FREE-WiLi contains two CC1101 packet radios from Texas Instruments.","sidebar":"tutorialSidebar"},"radios/radios":{"id":"radios/radios","title":"Radios","description":"Except for FREE-WiLi blue, FREE-WiLi has two radios integrate to help develop, validate and test radio systems.","sidebar":"tutorialSidebar"},"the-basics":{"id":"the-basics","title":"The Basics","description":"Turning FREE-WiLi On or Off","sidebar":"tutorialSidebar"}}}}')}}]);
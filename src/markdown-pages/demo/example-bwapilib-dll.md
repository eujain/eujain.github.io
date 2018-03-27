---
path: "/demos/exampleaimodule-bwapilib.dll"
date: "2018-01-19"
title: "Using BWAPI as a Dynamic Library."
---
Example of BWAPI bot using bwapilib compiled as a .dll instead of a .lib static library.
<!-- end excerpt -->

https://github.com/ratiotile/exampleaimodule-bwapilib.dll

Could be necessary to share BWAPIlib between a bot and language wrapper. We want to avoid having multiple instances of Game, and having to manually update the pointers.

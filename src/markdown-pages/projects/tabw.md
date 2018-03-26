---
path: "/projects/tabw"
date: "2018-03-10"
title: "TABW"
image: "../../img/tabw.jpg"
---

A fast terrain analyzer for BWAPI.
<!-- end excerpt -->

A fast terrain analyzer originally based on Skynet's implementation.

- splits the map into regions divided by chokepoints.
- produces Chokepoint, Region, and ResourceCluster objects.
- calculates optimal Command Center placement areas for each base.
- saves .tabw analysis files for quick loading on subsequent runs
- fixed bugs in the original algorithm which produced problems around small impassable areas on the edge of the map.
- optimized for speed.
- generates visualizations for debugging.
- configurable through tabw.ini file at runtime

---
path: "/projects/hoi3stats"
date: "2018-01-11"
title: "Hearts of Iron 3 Stats"
image: "../../img/hoi3stats.jpg"
---
Parses game files, translating from lua to json, and uploads to Google sheets for derived statistic analysis. Processes base units, upgrades and doctrines to calculate effective stats for each year.
<!-- end excerpt -->
## Lua to Json parser

https://github.com/ratiotile/lua2json

The HOI3 wiki has outdated unit data from an early patch. This project reads in the game data files to produce up-to-date unit stats for the latest version of Hearts of Iron III.

Turns lua tables, which are common in config files, into json objects. Uses PEGjs parser generator.

1. Uses HTML5 file api to select and read game lua files.
2. Parses the lua tables into json objects.
3. Uploads data to google sheets.
4. Applies tech and doctrine upgrades according to game rules.
5. Produces new spreadsheets of unit stats for each game year.

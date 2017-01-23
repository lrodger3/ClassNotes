# Node Modules

> Node is based on a `module` system.  It dictates how you can pass information from file to file

## Main interactions with the module system

1. Core Modules
    - Built in - `http`, `fs`, `cpu`
    - typically give you access to pieces of hardware

2. 3rd Party Modules
    - Download from `npm` - `express`, `leftpad`, `request`
    - modules others have written so that you can download and use them

3. 1st Party Modules
    - Your own files

## Getting things in / out of files

`module.exports = ~~` is how you get things OUT of a file
`require(~~)` is how get get things INTO a file

> Remember!  Whatever you __EXPORT__ is exactly what you get when you __REQUIRE__




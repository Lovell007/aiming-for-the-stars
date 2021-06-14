# aimingforthestars

# Project Overview

## Project Name

Aiming for the Stars

## Project Description

Interactive solar system with dynamic and static information about the palentary bodies within.

## Wireframes

https://whimsical.com/6gcF8ATuEAoE6mTPVTRU2x

## Component Hierarchy

https://whimsical.com/solar-system-KzsLbKUkwnHEuXnNqRstZi

## API and Data Sample

Planet code snippet
```json
{
    "records": [
        {
            "id": "recYOFVH12qzGbjIg",
            "fields": {
                "selectedTexture": "Fire",
                "planetName": "Avatar",
                "mass": "13",
                "description": "Massive Planet with unknown composition!",
                "elementalComposition": "Unknown",
                "moons": [
                    "recApDPpX6fofzIwQ"
                ]
            },
            "createdTime": "2021-06-07T20:38:19.000Z"
        },
        {
            "id": "recwuawL2RdZrhZ65",
            "fields": {
                "selectedTexture": "Fire",
                "planetName": "test1",
                "mass": "16",
                "description": "test",
                "elementalComposition": "test",
                "moons": [
                    "recQVrLpacbsCaapq",
                    "recAsgN2eRJTqz6cf"
                ]
            },
            "createdTime": "2021-06-10T20:26:55.000Z"
        }
    ],
    "offset": "recwuawL2RdZrhZ65"
}
```

### MVP/PostMVP

#### MVP 

- Create and implement custom API via Airtable to allow users to create their own planets including name, mass, color/textures, elemental composition, moons, and description.
- Ability to view created planets and moons displayed around the sun.
- Edit descriptions of planets and moons

#### PostMVP

- Implement THREE.js, spacekit.js, and react three fiber to create a 3d solar system
- Use THREE.js to import flight controls and allow signed in users to traverse the 3d solar system in first person
- Allow a 3rd person display with selectable rocket ships
- Create an Ephemerides calculator to display planetary alignment in realtime

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 7| Proposal / Functionality for NASA and airtable APIs | Incomplete
|July 8| NavBar / Username Form (including avatar) | Incomplete
|June 9| Create Planet Component / Display Planetary Info Component | Incomplete
|June 10| Create Solar System Component | Incomplete
|June 11| Flight Controls Component | Incomplete
|June 12| Ephemerides Calculator Component | Incomplete
|June 13| Troubleshooting / Finishing Touches on CSS styling
|June 14| Presentation

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Functionality for APIs | H | 3hrs |  |  |
| NavBar | H | 3.5hrs |  |  |
| UserName Form | H | 3hrs |  |  |
| Avatar Creator | H | 2.5hrs |  |  |
| Create Planet Component | H | 4.5hrs |  |  |
| Display Planetary Info Component| H | 3hrs |  |  |
| Create Solar System Component| H | 5hrs |  |  |
| Flight Controls Component| M | 5hrs |  |  |
| Ephemerides Calculator Component| L | 6hrs |  |  |
| Initial CSS| 4hrs | M |  |  |
| Final CSS Styling| 4hrs | M |  |  |
| Troubleshooting| H | 6hrs |  |  |
| Total | H | 33.5hrs |  |  |

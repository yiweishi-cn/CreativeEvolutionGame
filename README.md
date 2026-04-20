# CreativeEvolutionGame

A research project on **mechanic-guided AI game generation** — an end-to-end multi-agent system that generates and iteratively improves HTML5 games.

## Overview

CreativeGame reframes AI game generation around one core claim: game mechanics should guide generation *before* code is written, not be extracted after the fact. This is achieved through planner retrieval, a `CurrentMechanicSet`, and planned-vs-realized tracing across iterations.

## Repository Structure

```
├── Tech_report/
│   └── tex/
│       └── creativegame_techreport.pdf   # Full technical report (PDF)
└── project_web_CreativeGame/
    ├── index.html                         # Web version of the technical report
    ├── styles.css
    ├── script.js
    └── game_demo/                         # Generated game demos (v1–v4 per game)
        ├── fireboy_and_watergirl/
        ├── flappy_bird/
        ├── happy_glass/
        └── plants_vs_zombies/
```

## Game Demos

Each game has four versions (`v1.html` → `v4.html`) showing iterative improvement driven by mechanic-aware planning and reflection.

| Game | Description |
|------|-------------|
| Flappy Bird | Classic side-scrolling obstacle avoidance |
| Fireboy and Watergirl | Co-op puzzle platformer |
| Happy Glass | Physics-based liquid pouring puzzle |
| Plants vs Zombies | Tower defence strategy |

## Technical Report

The full report covers the system architecture, implementation details, evaluation results, and limitations. Available as:
- **PDF**: `Tech_report/tex/creativegame_techreport.pdf`
- **Web**: open `project_web_CreativeGame/index.html` in a browser

## Key Ideas

- Mechanics are moved *into* the planning loop, not extracted post-hoc
- A `CurrentMechanicSet` is passed explicitly through planning → generation → evaluation → reflection
- Iterative structure and memory are used to drive creative evolution across versions

# nkhan24.github.io

Engineering portfolio of Naeem Khan: vehicle dynamics, driver-in-the-loop simulation, wheel and tyre engineering, and motorsport performance engineering.

**Live site:** https://nkhan24.github.io

## Projects

| Page | What it covers |
|---|---|
| `projects/hgv-simulator.html` | MSc thesis: real-time driver-in-the-loop HGV simulator for roll stability |
| `projects/williams-simracing.html` | Sim-racing performance engineering with Williams F1 Team Gaming: aero map, setup direction, strategy |
| `projects/ford-wheels.html` | Wheels and jack design and release at Ford (via Caresoft Global) |
| `projects/gdp-quadricycle.html` | Group design project: quadricycle wheel and tyre selection |
| `projects/fs-upright.html` | Formula Student front upright and brackets, Lancaster e-Racing |

## How it is built

Hand-written HTML, CSS and plain JavaScript. There is no framework and no build step, and the site is hosted on GitHub Pages straight from the `main` branch.

```
index.html              home page
projects/               one page per project
css/style.css           all styles (design tokens at the top)
js/main.js              phone menu and copy-email button
assets/images/projects/ web-ready images (WebP)
assets/pdf/             CV
tools/                  Python scripts for images and charts
```

## Previewing locally

Open the folder in VS Code and start **Live Server**, or run:

```bash
python -m http.server 8000
```

and go to http://localhost:8000.

## Images

Original photos and screenshots are kept outside the repo. `tools/optimise_images.py` resizes them to a maximum side of 1600 px, saves them as WebP and strips metadata (including GPS location):

```bash
.venv/Scripts/python.exe tools/optimise_images.py ../portfolio-drafts/images-original assets/images/projects
```

## Charts

The aero-map charts on the Williams page are generated from the test workbook, which is also kept outside the repo:

```bash
.venv/Scripts/python.exe tools/make_aero_charts.py ../portfolio-drafts/data/F1AeromapsTesting_F1_25_Check.xlsx assets/images/projects
```

## Setup

```bash
python -m venv .venv
.venv/Scripts/python.exe -m pip install -r requirements.txt
```

## Content

Project content and images © Naeem Khan. Confidential employer and team data has been left out or redacted.
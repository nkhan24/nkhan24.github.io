"""Make web-ready copies of portfolio images.

Usage:  python tools/optimise_images.py <source_folder> <output_folder>
- Resizes so the longest side is at most MAX_SIDE px (never upscales)
- Applies phone-camera rotation (EXIF orientation), then strips all metadata (incl. GPS)
- Saves as WebP with clean, lowercase, hyphenated names from RENAME
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

MAX_SIDE = 1600
QUALITY = 82
RENAME = {
    "Cockpit_View.png":      "dil-cockpit.webp",
    "Cotswold Airfield.png": "dil-airfield.webp",
    "Truck.jpeg":            "dil-truck.webp",
    "Poster.png":            "dil-poster.webp",
    "Steel Wheel GDP.png":   "gdp-steel-wheel.webp",
    "Tyre DWG GDP.png":      "gdp-tyre.webp",
    "FrontUprightDesign.png":           "fs-upright-cad.webp",
    "FrontUprightBrakingStress.png":    "fs-upright-stress.webp",
    "WilliamsPitWallBootcamp2023.jpg":  "wfg-pitwall-bootcamp.webp",
}

src, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
for name, new_name in RENAME.items():
    f = src / name
    if not f.exists():
        print(f"MISSING  {name}")
        continue
    im = ImageOps.exif_transpose(Image.open(f))           # fix rotation
    im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
    im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)      # keeps aspect ratio
    dest = out / new_name
    im.save(dest, "WEBP", quality=QUALITY, method=6)       # no exif= -> metadata dropped
    print(f"{name:24s} {f.stat().st_size/1024:7.0f} KB -> {new_name:22s} "
          f"{dest.stat().st_size/1024:5.0f} KB  {im.width}x{im.height}")
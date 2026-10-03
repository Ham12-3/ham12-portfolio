"""Generate the site's favicon set: a geometric "ah." monogram echoing the abdul|hamid. logo.

Outputs (Next.js app-router file conventions):
  app/icon.svg        vector favicon for modern browsers
  app/favicon.ico     16/32/48 px fallback
  app/apple-icon.png  180 px home-screen icon (full-bleed, no transparency)
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
INK, GRAY, WHITE = "#030712", "#B6BCC6", "#FFFFFF"

# Geometry on a 64-unit grid
SW = 5.5                          # stroke width
BASE, XTOP = 48.75, 31.25         # baseline and x-height (outer edges)
A_CX, A_CY, A_R = 17, 40, 6       # "a" bowl (stroke centreline radius)
A_STEM = A_CX + A_R               # "a" stem x
H_STEM, H_R = 32, 6               # "h" left stem x and arch radius
H_RIGHT = H_STEM + 2 * H_R        # "h" right stem x
H_TOP = 16
DOT_R = 3.2
DOT_CX, DOT_CY = 52.5, BASE - DOT_R


def svg(rounded=True):
    rx = 14 if rounded else 0
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="{rx}" fill="{INK}"/>
  <g fill="none" stroke-width="{SW}">
    <circle cx="{A_CX}" cy="{A_CY}" r="{A_R}" stroke="{GRAY}"/>
    <path d="M{A_STEM} {XTOP}V{BASE}" stroke="{GRAY}"/>
    <path d="M{H_STEM} {H_TOP}V{BASE}M{H_STEM} {A_CY}a{H_R} {H_R} 0 0 1 {2 * H_R} 0V{BASE}" stroke="{WHITE}"/>
  </g>
  <circle cx="{DOT_CX}" cy="{DOT_CY}" r="{DOT_R}" fill="{WHITE}"/>
</svg>
"""


def raster(size, rounded=True, ss=16):
    """Draw the same geometry with Pillow at ss× resolution, then downsample for smooth edges."""
    s = size * ss / 64
    img = Image.new("RGBA", (size * ss,) * 2, (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    full = size * ss - 1
    if rounded:
        d.rounded_rectangle([0, 0, full, full], radius=14 * s, fill=INK)
    else:
        d.rectangle([0, 0, full, full], fill=INK)

    w, h = SW * s / 2, SW * s

    def ring(cx, cy, r, color, start=0, end=360):
        d.arc([(cx - r - SW / 2) * s, (cy - r - SW / 2) * s, (cx + r + SW / 2) * s, (cy + r + SW / 2) * s],
              start, end, fill=color, width=round(h))

    def stem(x, y0, y1, color):
        d.rectangle([(x * s) - w, y0 * s, (x * s) + w, y1 * s], fill=color)

    ring(A_CX, A_CY, A_R, GRAY)
    stem(A_STEM, XTOP, BASE, GRAY)
    stem(H_STEM, H_TOP, BASE, WHITE)
    ring(H_STEM + H_R, A_CY, H_R, WHITE, 180, 360)
    stem(H_RIGHT, A_CY, BASE, WHITE)
    d.ellipse([(DOT_CX - DOT_R) * s, (DOT_CY - DOT_R) * s, (DOT_CX + DOT_R) * s, (DOT_CY + DOT_R) * s], fill=WHITE)
    return img.resize((size, size), Image.LANCZOS)


(ROOT / "app" / "icon.svg").write_text(svg(), encoding="utf-8")
raster(256).save(ROOT / "app" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
raster(180, rounded=False).convert("RGB").save(ROOT / "app" / "apple-icon.png")
print("icons written")

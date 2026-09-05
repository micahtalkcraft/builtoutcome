Drop your integration logo files into this folder.

The <Integrations /> section in src/components/Integrations.astro expects these
exact filenames (PNG preferred, SVG works too):

  google-meet.png
  zoom.png
  teams.png
  slack.png
  salesforce.png
  gmail.png

If you upload as SVG, edit the `file:` field for each entry in
Integrations.astro to use `.svg` instead of `.png` — that's the only change.

Tips for clean rendering inside the colored circles:
  - Use square (1:1) source files
  - Transparent background
  - At least 256 × 256 px (will be displayed up to ~84 × 84)
  - The CSS adds 18 px of inner padding, so leave a little breathing room
    inside your logo file too — but the cleaner the source crop, the better

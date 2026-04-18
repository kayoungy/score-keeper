# Scorekeeper

Vintage alarm-clock-inspired scorekeeper for an AI coding course.

## Stack
- Vanilla HTML / CSS / JavaScript
- No frameworks, no build step, no dependencies
- Google Fonts for typography only

## Structure
- index.html — markup
- style.css — styling
- script.js — score logic + sound playback
- sounds/ — audio files

## Commands
- Open index.html directly in browser (no server needed)

## Conventions
- Lowercase, hyphenated file/folder names (no camelCase, no spaces)
- Keep CSS simple — no preprocessors, no frameworks
- Keep JS vanilla — no libraries
- Use CSS custom properties for colors so the palette is easy to tweak
- Semantic HTML — use <button> for buttons, not <div>
- Event listeners in JS, not inline onclick

## Design direction
Physical 1970s alarm-clock aesthetic.
- Yellow plastic casing on a warm beige/cream background
- Two recessed dark flip-display panels showing scores in monospace white digits
- Monochrome yellow chunky buttons with depth via layered shadows (neumorphic-style)
- "Reset" as a small tab on the top of the device, like a snooze bar
- Scores allow negatives (show minus sign naturally in monospace)
- Click sound on every button press

## Typography
- Score digits: monospace (JetBrains Mono or IBM Plex Mono)
- Labels and title: clean sans-serif (Inter or similar)

## Build order
Step-by-step, approve each before moving to the next:
1. HTML skeleton
2. Wire JS to unstyled HTML
3. Yellow casing + layout
4. Flip-display digits
5. Yellow buttons with depth + press animation
6. Click sound
7. Reset tab + polish

See PRD.md for full project requirements.

## Reference image
See /references/scorekeeper-reference.png for the target visual.
This is the source of truth for proportions, colors, typography style,
button shape, display style, and overall product aesthetic. Match the
spirit and key design choices — not pixel-perfect reproduction.
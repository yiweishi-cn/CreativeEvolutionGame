# Change Log

## Add PDF Download Link to Web Report

### What changed

Added a **"Download PDF Report"** button to the hero section of `project_web_CreativeGame/index.html`.

**File:** `project_web_CreativeGame/index.html` — line 73

**Before:**
```html
<div class="hero-actions">
  <a class="button primary" href="#demos">View Demo Lineages</a>
  <a class="button secondary" href="#update">System Snapshot</a>
</div>
```

**After:**
```html
<div class="hero-actions">
  <a class="button primary" href="#demos">View Demo Lineages</a>
  <a class="button secondary" href="#update">System Snapshot</a>
  <a class="button secondary" href="../Tech_report/tex/creativegame_techreport.pdf" target="_blank">Download PDF Report</a>
</div>
```

### Details

| Property | Value |
|----------|-------|
| File | `project_web_CreativeGame/index.html` |
| Line | 73 |
| Style class | `button secondary` (matches existing buttons) |
| Link target | `../Tech_report/tex/creativegame_techreport.pdf` |
| Opens in | New tab (`target="_blank"`) |

### Why

The PDF technical report was already hosted in the repo but had no entry point from the web page. This change surfaces it directly in the most visible part of the page — the hero section — so visitors can access the full report without knowing the file path.

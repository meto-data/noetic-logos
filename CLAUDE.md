# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Quartz v4** based digital garden/knowledge base called "Noetic Logos" with extensive customizations for Turkish educational content. The site publishes markdown notes as a website with advanced features including interactive finance modules, file tree visualization, and secret search commands.

**Live Site:** https://noetic-logos.pages.dev
**Base Framework:** Quartz v4 (static site generator for digital gardens)

## Build & Development Commands

⚠️ **IMPORTANT:** Never use `npm` or `npx` commands directly when working in this repository. All build and development tasks should be performed manually or through alternative methods.

Reference commands (for documentation only - DO NOT execute):
```bash
# Build the site (DO NOT RUN)
npx quartz build

# Build and serve locally (DO NOT RUN)
npx quartz build --serve

# Format code (DO NOT RUN)
npm run format

# Type checking (DO NOT RUN)
npm run check

# Date frontmatter management (DO NOT RUN)
npm run dates:check
npm run dates:write
npm run dates:write:changed
```

## Critical Architecture Details

### 1. Custom Search with Secret Commands

**File:** `quartz/components/scripts/search.inline.ts`

The search system has been extended with "secret commands" - special keywords that redirect to hidden module pages:

- Type `logos` → redirects to `/static/logos-module/index.html`
- Type `finance` → redirects to `/static/finance-module/index.html` (hub with 3+ finance modules)
- Type `oop1` → redirects to `/static/oop1-module/index.html`

**Implementation Pattern:**
```typescript
const secretCommands: Record<string, string> = {
  logos: "/static/logos-module/index.html",
  finance: "/static/finance-module/index.html",
  oop1: "/static/oop1-module/index.html",
}
```

Commands are case-insensitive and trimmed. Regular FlexSearch remains unaffected.

### 2. Static Module System

**Location:** `quartz/static/`

Any files placed in `quartz/static/` are automatically copied to `public/static/` during build via Quartz's Static emitter plugin. This is used for:

- Interactive quiz/test modules (`finance-module/`, `logos-module/`, `oop1-module/`)
- Each module is self-contained with its own HTML/CSS/JS
- Modules use localStorage for progress tracking
- Source content lives outside quartz/static (e.g., `/Finansal Yönetim`, `ReadyForWeb/`, `OOP/`) - only built versions are copied to static folder

**Module Structure Example:**
```
quartz/static/finance-module/
├── index.html                          # Hub page
├── finansal_analiz_module.html         # Module 1
├── finansal_analiz_data.js            # Module 1 data
├── finansal_yonetim_module.html       # Module 2
├── finansal_yonetim_data.js          # Module 2 data
├── paranin_zaman_degeri_module.html  # Module 3
├── paranin_zaman_degeri_data.js      # Module 3 data
├── module_engine.js                   # Shared quiz engine
└── style.css                          # Shared styles
```

### 3. File Tree Component

**Files:**
- `quartz/components/FileTree.tsx`
- `quartz/components/scripts/filetree.inline.ts`
- `quartz/components/styles/filetree.scss`

**Features:**
- Two view modes: Normal (hierarchical) and Graph (word count percentages)
- Exclusions: `ekler`, `görseller`, `images`, `assets`, `attachments`, `files`, `media`, `resimler`, `dosyalar`, `pdf`, `pdfler` folders
- Files starting with `index*` or `readme*` are always hidden
- Display names cleaned: `8-Some-File.md` → `8- Some File`
- Turkish number formatting: `1.500.000` (thousands), `69,34%` (decimals)

**Key Functions:**
- `buildTreeFromData()`: Builds tree from Quartz content data
- `shouldExcludeFolder(name)`: Checks folder exclusion list
- `shouldExcludeFile(name)`: Checks file exclusion patterns
- `countWords(text)`: Markdown-aware word counter (strips code blocks, links)
- `calculateFolderWords(node, wordMap)`: Recursive word count aggregation

### 4. Date Frontmatter Management

**Script:** `scripts/manage-created-dates.mjs`

All content files must have ISO-formatted `created` dates in frontmatter. The script:
- Checks all `content/**/*.md` files
- Auto-fills missing dates from git history (file creation) or filesystem
- Normalizes existing dates to `YYYY-MM-DD`
- Exit 1 if issues found (for CI integration)

**Priority order:** frontmatter → git → filesystem

Manually ensure all new content has proper `created` dates before committing.

### 5. Theme System

**File:** `quartz.config.ts`

Extensive theme customization with multiple pre-configured palettes:

**Light themes:** default, sereneSky, warmSand, warmTeal, warmPlum, warmSlate
**Dark themes:** default, midnightBlue, graphite

Configure via `SELECT_LIGHT` and `SELECT_DARK` objects (set one option to `true` in each).

### 6. Quartz Configuration

**Key Settings:**
- **Locale:** `tr-TR` (Turkish)
- **Default Date Type:** `created` (not modified)
- **Fonts:** Inter (UI), JetBrains Mono (code)
- **Collator:** Turkish-aware for folder/file sorting (`Intl.Collator("tr")`)
- **Analytics:** Cloudflare Web Analytics (token via env: `CLOUDFLARE_BEACON_TOKEN`)

## Project Structure

```
.
├── content/              # Markdown content (published notes)
├── quartz/
│   ├── components/       # React components (TSX)
│   │   ├── scripts/      # Client-side TypeScript (*.inline.ts)
│   │   └── styles/       # SCSS stylesheets
│   ├── plugins/          # Quartz transformers/emitters
│   └── static/           # Static assets (copied to public/static/)
├── scripts/              # Build/maintenance scripts
├── Yapılanlar/          # Archive of completed PRDs/documentation
├── baglam.md            # Quick changelog/summary (Turkish)
├── yaptiklarim.md       # Detailed implementation docs (Turkish)
├── PRD.md               # Current work PRD (finance module revisions)
├── quartz.config.ts     # Main Quartz configuration
├── quartz.layout.ts     # Page layout configuration
└── package.json
```

## Finance Module Workflow (Current Focus)

**Current PRD:** `PRD.md` - Manual revision of finance module questions for reference data consistency

**Key Requirements:**
1. All tables/data blocks move to `contextHtml` (reference panel)
2. Options contain only text (no data repetition)
3. `index` files never listed
4. Turkish number formatting throughout
5. Each revision logged in `Yapılanlar/` folder

**External Module Generation:**
- Script exists: `scripts/generate-finance-external-modules.mjs`
- ⚠️ Re-running overwrites manual edits - use with caution
- Disable during manual revision sprints

## Important Conventions

### Folder/File Naming
- Use hyphens for spaces: `8-Makale-Inceleme.md`
- Numeric prefixes for ordering: `1-Introduction.md`, `2-Main-Content.md`
- Display names automatically cleaned for UI

### Frontmatter Requirements
```yaml
---
created: YYYY-MM-DD  # Required, ISO format
title: "Page Title"  # Optional
---
```

### Backup Pattern
Critical files backed up before changes: `YEDEK/{filename}.{YYYYMMDD}`

Example: `YEDEK/search.inline.ts.20251110`

## Development Workflow

⚠️ **Remember:** DO NOT use npm/npx commands

1. **Content Changes:**
   - Edit markdown in `content/`
   - Manually ensure frontmatter `created` dates are in ISO format (YYYY-MM-DD)
   - Test changes by viewing files

2. **Component Changes:**
   - Edit TSX/TS files in `quartz/components/`
   - Manually review code for type safety
   - Test changes manually

3. **Module Updates:**
   - Edit source in respective folders (`Finansal Yönetim/`, etc.)
   - Manually copy to `quartz/static/{module-name}/`
   - Test by opening HTML files directly

4. **Before Deployment:**
   - Manually verify all frontmatter dates are correct
   - Manually check TypeScript types
   - Test all secret commands work (`logos`, `finance`, `oop1`)

## Special Notes

- **Turkish Locale:** All sorting, formatting, and display names use Turkish conventions
- **SPA Mode:** Enabled - use `window.location.assign()` for navigation (not `href`)
- **Analytics:** Optional Cloudflare beacon via environment variable
- **Excluded Content:** Several folder patterns automatically excluded from file tree and searches
- **Reference Data:** Finance modules use `contextHtml` panel system - avoid duplicating data in question body and options

## Documentation References

- Main changelog: `baglam.md` (brief summaries)
- Detailed docs: `yaptiklarim.md` (implementation details)
- Archive: `Yapılanlar/` (completed PRDs organized by category)
- Current work: `PRD.md` (active project requirements)

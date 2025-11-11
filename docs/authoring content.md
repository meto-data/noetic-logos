---
title: Authoring Content
---

All of the content in your Quartz should go in the `/content` folder. The content for the home page of your Quartz lives in `content/index.md`. If you've [[index#🪴 Get Started|setup Quartz]] already, this folder should already be initialized. Any Markdown in this folder will get processed by Quartz.

It is recommended that you use [Obsidian](https://obsidian.md/) as a way to edit and maintain your Quartz. It comes with a nice editor and graphical interface to preview, edit, and link your local files and attachments.

Got everything setup? Let's [[build]] and preview your Quartz locally!

## Syntax

As Quartz uses Markdown files as the main way of writing content, it fully supports Markdown syntax. By default, Quartz also ships with a few syntax extensions like [Github Flavored Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (footnotes, strikethrough, tables, tasklists) and [Obsidian Flavored Markdown](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) ([[callouts]], [[wikilinks]]).

Additionally, Quartz also allows you to specify additional metadata in your notes called **frontmatter**.

```md title="content/note.md"
---
title: Example Title
draft: false
tags:
  - example-tag
---

The rest of your content lives here. You can use **Markdown** here :)
```

Some common frontmatter fields that are natively supported by Quartz:

- `title`: Title of the page. If it isn't provided, Quartz will use the name of the file as the title.
- `description`: Description of the page used for link previews.
- `permalink`: A custom URL for the page that will remain constant even if the path to the file changes.
- `aliases`: Other names for this note. This is a list of strings.
- `tags`: Tags for this note.
- `draft`: Whether to publish the page or not. This is one way to make [[private pages|pages private]] in Quartz.
- `date`: A string representing the day the note was published. Normally uses `YYYY-MM-DD` format.

See [[Frontmatter]] for a complete list of frontmatter.

### Required `created` metadata

To keep published dates stable across rebuilds, every Markdown file in `content/` **must** declare a canonical creation date in ISO format:

```yaml
---
title: Example Title
created: 2025-01-15
---
```

Quartz will fall back to git history or filesystem metadata if the field is missing, but doing so causes dates to drift whenever the repository is cloned or files are re-synced. Use the helper script to audit or populate the field:

```bash
npm run dates:check   # dry run – lists files that need attention
npm run dates:write   # normalises/creates the frontmatter field in-place
```

After running the script in write mode, review the reported “manual follow-up” files and correct the dates explicitly in frontmatter.

> Toggle: tarih otomasyonunu geçici olarak kapatmak istersen `dates.config.json` içindeki `enabled` değerini `false` yapabilir veya komutları `DATES_ENFORCE=false npm run dates:…` şeklinde çalıştırabilirsin.

## Syncing your Content

When your Quartz is at a point you're happy with, you can save your changes to GitHub.
First, make sure you've [[setting up your GitHub repository|already setup your GitHub repository]] and then do `npx quartz sync`.

## Customization

Frontmatter parsing for `title`, `tags`, `aliases` and `cssclasses` is a functionality of the [[Frontmatter]] plugin, `date` is handled by the [[CreatedModifiedDate]] plugin and `description` by the [[Description]] plugin. See the plugin pages for customization options.

---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

## Generate a new site

1. Generate a new Docusaurus site using the **classic template**:

```shell
npm init docusaurus@latest my-website classic
```

2. Install the package

```bash
npm i @ifood/docusaurus-theme
```

3. Push the theme to the themes array in `docusaurus.config.js`

```js
...
projectName: 'docusaurus', // Usually your repo name.
themes: [
    '@ifood/docusaurus-theme'
],
presets: [
...
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and displays your changes.

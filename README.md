# Chromatic docs

The main branch is automatically deployed to https://www.chromatic.com/docs/

### Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e1d4d54-1349-4c8a-b214-788ae7aac3a4/deploy-status)](https://app.netlify.com/sites/chromatic2-docs/deploys)

Available at docs.chromatic.com and via Netlify's build previews on branches/PRs. The 'website' proxies this to https://www.chromatic.com/docs/

To configure, access the Netlify [dashboard](https://app.netlify.com/sites/chromatic2-docs/overview).

Deploy previews are set up for PRs.

### 🚀 Project Structure

This project uses Astro. Inside, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   ├── getStarted/
│   │   └── introduction.md
│   ├── notInNavigation/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✍️ Editing Content

Try to follow the conventions present.

### Content

All content lives in `src/content`. Each file is a markdown file with frontmatter. The frontmatter is used to set the title, description, and other metadata. If you want to add a new page, create a new markdown file in the appropriate directory, and it will be automatically added to the site and linked in the sidebar. To prevent a page from being added to the sidebar, place it in `src/content/notInNavigation`.

### Links

Always use absolute links, that is, `/docs/<SOMETHING>`. Use `yarn check-links` to check for broken links. It runs against prod.

### Sidebar

The sidebar is autogenerated. Use the `sidebar` property in the frontmatter to control the order and label of the sidebar item. eg: `sidebar: { order: 1, label: 'Introduction' }`

### Media

Any static assets, like gifs and videos, can be placed in the `public/` directory. You'll have to manually add the `/docs` prefix for these urls.

Any static images added to `src` directory will be optimized and copied to `public/` during the build process.

Add the center css class to center media horizontally if they aren't full screen.

### Search

Algolia's Docsearch is integrated with the project. Every 24 hours it will crawl docs.chromatic.com and update it's index. The search input box is wired up to this index. You don't need to do anything special, whatever is pushed to docs.chromatic.com will be automatically indexed.

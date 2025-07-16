# Hotel Management System – Client (Frontend)

## Overview
This is the client-side application for the Hotel Management System built using **Svelte**. It supports multiple roles including receptionists, restaurant/bar staff, finance officers, and administrators. The frontend is designed to be used both as a web application and a desktop application (via packaging).

## Features

### 🌐 Website
- Public-facing site for room availability and online reservations.
- Responsive layout for mobile/tablet/desktop use.

### 🧑‍💼 Staff Portal
- Role-based access for Receptionist, Finance, Restaurant, Inventory, etc.
- Room bookings, check-ins, check-outs, and guest management.
- POS interface for restaurant and bar staff to take orders.
- Inventory view for Store Manager.
- Attendance and profile management for staff.
- Financial reporting and printable receipts for finance roles.

### 🛠️ CMS (Content Management System)
- Admins can upload branding (logos, icons, theme colors).
- Custom banners, images, and text for the public website.
- Menu and pricing configuration.
- Room types and pricing editor.
- Modular design allows reuse for different hotels.

## Tech Stack
- Svelte + SvelteKit
- Tailwind CSS
- Axios for API communication
- IndexedDB or localStorage for caching
# Svelte library

Everything you need to build a Svelte library, powered by [`sv`](https://npmjs.com/package/sv).

Read more about creating a library [in the docs](https://svelte.dev/docs/kit/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```

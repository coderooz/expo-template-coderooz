# Coderooz — Custom Expo Template


[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Expo](https://img.shields.io/badge/Expo-Managed-orange.svg)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-Tailwind-informational)](https://www.nativewind.dev/)

A production-ready Expo starter template with TypeScript, NativeWind, SQLite, Drawer navigation, Notifications, and OTA Updates.

> - A production-ready Expo starter template with TypeScript, NativeWind (Tailwind), SQLite, Drawer navigation, Notifications, and OTA Updates.  
> - Designed as a template repo and a foundation for a future interactive installer.

![template-screenshot](/mnt/data/f97040f6-148d-4d0e-af0d-ef6e309ca5a1.png)

## Features
- Expo (managed workflow)
- TypeScript first (fully typed project)
- NativeWind (Tailwind CSS for React Native)
- Drawer navigation (Expo Router + Drawer)
- Expo SQLite utilities (starter hooks + utils)
- Expo Notifications (in-app + push token helper)
- Expo Updates (OTA checks)
- Preconfigured Metro / Babel / Tailwind configs
- Ready for interactive post-install setup (Option B)

---

## Quick start

Create a new Expo app with this template (remote):

```bash
npx create-expo-app my-app --template https://github.com/coderooz/CUSTOM-EXPO-TEMPLATE
````

Or clone locally:

```bash
git clone https://github.com/coderooz/CUSTOM-EXPO-TEMPLATE my-app
cd my-app
npm install
npm run start
```

To test a tagged version:

```bash
npx create-expo-app my-app \
  --template https://github.com/coderooz/CUSTOM-EXPO-TEMPLATE#v0.1.0
```

---

## Recommended workflow while developing the template

1. Keep your repo clean of generated artifacts (`node_modules`, `.expo`, build outputs).
2. Create a `v0.1.0` tag for stable snapshots and tests.
3. Use the GitHub repo as the initial distribution channel; publish to `npm` when stable.
4. Add `scripts/setup.js` later to support interactive postinstall prompts (Option B).

---

## Roadmap (what's coming next)

* ✅ Basic TypeScript template & nativewind support
* ⬜ Drawer navigation + example screens
* ⬜ SQLite and notification utilities
* ⬜ `scripts/setup.js` interactive installer (Option B)
* ⬜ Publish to npm (`expo-template-*`) and add CI checks
* ⬜ Add modular UI presets (shadcn / react-native-paper / custom)
* ⬜ Add GitHub Actions to run `expo doctor` + TypeScript checks

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feat/your-feature`
3. Make changes, run lint/type checks
4. Create a PR describing the change and rationale

---

## License

MIT © Coderooz
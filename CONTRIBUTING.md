# Contributing to Expo Template — Coderooz

Thank you for your interest in contributing!  
This project welcomes pull requests, discussions, feature proposals, and bug reports.

---

## 📌 Ways to Contribute

| Type | How |
|------|-----|
| Bug report | Open a GitHub Issue with steps to reproduce |
| Feature request | Open an Issue with `enhancement` label |
| Pull request | Follow the steps below |
| Documentation | Improve README / comments / examples |
| Community help | Answer questions & review issues |

---

## 🔧 Local Development Setup

```bash
git clone https://github.com/coderooz/expo-template-coderooz
cd expo-template-coderooz
npm install
npm run start
````

### Before submitting a PR

```bash
npm run lint
npx tsc --noEmit
expo doctor
```

All checks must pass before review.

---

## 📂 Branching & Commit Rules

| Purpose | Naming                   |
| ------- | ------------------------ |
| Fix     | `fix/bug-description`    |
| Feature | `feat/new-feature`       |
| Chore   | `chore/task-description` |
| Docs    | `docs/update-readme`     |

Examples:

```
feat/add-sqlite-helper
fix/drawer-navigation-crash
docs/update-install-section
```

### Commit Message Format

```
<type>: <short summary>
```

Examples:

```
feat: add notifications helper
fix: resolved status bar flicker on Android
docs: add npm installation section
```

Allowed types: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `style`.

---

## ✔️ Pull Request Checklist

Before submitting a PR:

* [ ] Lints and TypeScript build pass
* [ ] The template still **starts cleanly on iOS, Android & Web**
* [ ] No generated / build artifacts are committed (`.expo`, `android`, `ios`, `node_modules`, etc.)
* [ ] Screenshots are placed in `.github/assets/` (if added)
* [ ] Branch is up-to-date with `main`

---

## 💬 PR Review Process

1. Automated checks run (lint, TS)
2. Maintainers manually review code
3. Feedback is provided if needed
4. PR is approved and merged once all checks pass

Response time target: **24–72 hours**

---

## 📜 Code of Conduct

By contributing, you agree to follow the
[`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

Any unacceptable behavior can be reported privately to:
📧 **[coderooz.dev@gmail.com](mailto:coderooz.dev@gmail.com)**

---

## 🎉 Thank You

Every contribution — big or small — improves the template for thousands of developers.
Thank you for helping grow the Coderooz ecosystem.

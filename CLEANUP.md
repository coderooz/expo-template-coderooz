# 🧹 Cleanup Checklist — Prepare Repository for Template Distribution

Before tagging or publishing a new version of the template, verify the following steps.

---

## 1️⃣ Remove generated folders (local only — do NOT commit them)

```bash
rm -rf node_modules .expo .expo-shared web-build dist build android ios npm-debug.log
````

If you're maintaining a **Managed Expo template**, `android/` and `ios/` should not exist.
If you’re using **prebuild**, delete and regenerate them — never commit local builds.

---

## 2️⃣ Remove IDE/local environment files (if committed)

```bash
git rm -r --cached .vscode || true
rm -rf .vscode
```

Also check for:

```
.idea/
.env*
```

---

## 3️⃣ Normalize lockfiles (pick exactly ONE)

| Package Manager | Keep                | Remove                                |
| --------------- | ------------------- | ------------------------------------- |
| npm             | `package-lock.json` | `yarn.lock`, `pnpm-lock.yaml`         |
| yarn            | `yarn.lock`         | `package-lock.json`, `pnpm-lock.yaml` |
| pnpm            | `pnpm-lock.yaml`    | `package-lock.json`, `yarn.lock`      |

Example (keeping npm lockfile):

```bash
git rm --cached yarn.lock pnpm-lock.yaml || true
rm -f yarn.lock pnpm-lock.yaml
```

---

## 4️⃣ Confirm `.gitignore` contains all generated artifacts

Recommended entries include:

```
node_modules/
.expo/
dist/
web-build/
.DS_Store
android/
ios/
```

---

## 5️⃣ Remove stray large files / assets not needed in template

(optional, but recommended)

```bash
git lfs track "*.png" "*.mov" "*.mp4" "*.psd"
```

Avoid committing:

* Screenshots larger than 200 KB
* Device recordings
* Raw design assets

Use `.github/assets/` for documentation screenshots instead.

---

## 6️⃣ Tag and push the release snapshot

```bash
git add .
git commit -m "chore: prepare template v0.1.0"
git tag v0.1.0
git push origin main --tags
```

> Every template version should correlate with a Git tag for stable installation.

---

## 7️⃣ Validate template installation (local sandbox test)

From one folder **above** the template directory:

```bash
npx create-expo-app test-template --template ./expo-template-coderooz
```

Verify:

* The app launches successfully
* No import paths point outside the template
* No development credentials or secrets exist

---

## 8️⃣ Quick QA checklist (optional but recommended)

```bash
npm ci
npm run start -c
npx tsc --noEmit
expo doctor
```

Verify:

* No TypeScript errors
* No missing dependencies
* No Expo config warnings
* App starts cleanly on **iOS / Android / Web**

---

## 🎉 Final Note

Once the cleanup passes successfully, you can confidently publish or distribute:

* GitHub
* npm (`expo-template-coderooz`)
* `create-expo-app` template reference
* CI pipelines (future)

# Cleanup checklist — Prepare repo for template distribution

1. Remove generated folders (locally)
   ```bash
   rm -rf node_modules .expo .expo-shared web-build dist build android ios npm-debug.log
````

2. Remove local/IDE settings (if committed)

   ```bash
   git rm -r --cached .vscode || true
   rm -rf .vscode
   ```

3. Normalize lockfile (choose one)

   * Keep `package-lock.json` (npm): remove `yarn.lock` and `pnpm-lock.yaml`
   * Or keep `yarn.lock`: remove `package-lock.json` and `pnpm-lock.yaml`

   ```bash
   # Example: keep package-lock.json
   git rm --cached yarn.lock pnpm-lock.yaml || true
   rm -f yarn.lock pnpm-lock.yaml
   ```

4. Ensure `.gitignore` is updated (see .gitignore in repo root)

5. Remove stray large files

   ```bash
   git lfs track # optionally use Git LFS for large media
   ```

6. Create a lightweight tag for this release

   ```bash
   git add .
   git commit -m "chore: prepare template v0.1.0"
   git tag v0.1.0
   git push origin main --tags
   ```

7. Test template create (local)

   ```bash
   npx create-expo-app test-template --template ./   # from one folder above the template
   ```

8. Optional: run quick QA

   * `npm ci`
   * `npm run start -c`
   * Validate TypeScript `npm run tsc` (or `npx tsc --noEmit`)
   * `expo doctor`

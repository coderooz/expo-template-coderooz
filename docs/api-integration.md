# API Integration Guide

Use `src/lib/api.ts` as base:

```ts
export const api = {
  get: async (url: string) => fetch(url).then(res => res.json()),
  post: async (url: string, data: any) =>
    fetch(url, { method: "POST", body: JSON.stringify(data) }),
};
````

Use with hooks:

```ts
import { api } from "@/lib/api";

const users = await api.get("/users");
```

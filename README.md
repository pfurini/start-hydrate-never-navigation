# Hydrate `never()` renders nothing after client-side navigation

1. `pnpm install`
2. `pnpm dev`
3. Open http://localhost:3000/deferred directly: "Deferred content" is shown (server HTML).
4. Open http://localhost:3000/ and click "Deferred": the `<Hydrate when={never()}>` boundary stays empty.


**Bundle**
  Javascript file containing the entire application code. Downloading the bundle will load the entire app at once, turning into a SPA.

**Bundle Size**


**Code Spliting**
  Spliting bundle into multiple parts can be downloaded over time("lazy loading")

Vite and Webpack will automatically split the bundle when they see the lazy function.
"Chunks"

npm run build when then create the js bundle.

**Suspense** is a concurrent feature that is a part of the modern react, that allows certain component to suspense, which means allowing them to wait for something to happen.

**The lazy component is going to be suspended while they are loading.**

```
  import { lazy, Suspense } from "react";
```
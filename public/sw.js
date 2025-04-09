const staticCacheName = "static-app-v1";
const dynamicCacheName = "dynamic-app-v1";

const ASSETS = [
  "/",
  "/category",
  "/login",
  "/category/characters",
  "/category/episodes",
  "/category/locations",
];

self.addEventListener("install", async () => {
  console.log("install!");

  const cache = await caches.open(staticCacheName);
  cache.addAll(ASSETS);
});

self.addEventListener("activate", async () => {
  console.log("activate!");
  const cachesKeys = await caches.keys();
  console.log(cachesKeys);
  await Promise.all(
    cachesKeys
      .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
      .map((key) => caches.delete(key))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  try {
    return (
      cached || (await fetch(request).then((responce) => networkFirst(request)))
    );
  } catch (error) {
    return networkFirst(request);
  }
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName);
  try {
    const respone = await fetch(request);
    if (request.url.startsWith("http")) {
      cache.put(request.url, respone.clone());
    }
    return respone;
  } catch (error) {
    const cached = await caches.match(request);
    return cached || (await caches.match("/"));
  }
}

import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
cleanupOutdatedCaches();
self.skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

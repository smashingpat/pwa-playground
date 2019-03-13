importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    new workbox.strategies.NetworkFirst()
);

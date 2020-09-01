import { precacheAndRoute, getCacheKeyForURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting, clientsClaim, cacheNames } from 'workbox-core';
import { strategy as composeStrategies } from 'workbox-streams';

// Is this the right call?
// skipWaiting();
// clientsClaim();

// Cache the Typekit stylesheets with a stale while revalidate strategy.
registerRoute(
    /^https:\/\/use\.typekit\.net\/evk7lzt\.css$/,
    new CacheFirst({
        cacheName: 'typekit-stylesheets',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    })
);

registerRoute(
    /^https:\/\/p\.typekit\.net/,
    new CacheFirst({
        cacheName: 'typekit-stylesheets',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    })
);

registerRoute(
    /^https:\/\/img\.shields\.io/,
    new StaleWhileRevalidate({
        cacheName: 'badges',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    })
);

// Cache the Typekit webfont files with a cache first strategy for 1 year.
registerRoute(
    /^https:\/\/use\.typekit\.net/,
    new CacheFirst({
        cacheName: 'typekit-webfonts',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    })
);

// const shellStrategy = new CacheFirst({ cacheName: cacheNames.precache });
// const contentStrategy = new StaleWhileRevalidate({ cacheName: 'content' });

// const componentHandler = composeStrategies([
//     () =>
//         shellStrategy.handle({
//             request: new Request(getCacheKeyForURL('/shell-start.html')),
//         }),
//     ({ url }) =>
//         contentStrategy.handle({
//             request: new Request(
//                 url.pathname.replace('index.html', '') + 'content/index.html'
//             ),
//         }),
//     ({ url }) =>
//         contentStrategy.handle({
//             request: new Request(
//                 url.pathname.replace('index.html', '') +
//                     'api-content/index.html'
//             ),
//         }),
//     () =>
//         shellStrategy.handle({
//             request: new Request(getCacheKeyForURL('/shell-end.html')),
//         }),
// ]);

// const guidesHandler = composeStrategies([
//     () =>
//         shellStrategy.handle({
//             request: new Request(getCacheKeyForURL('/shell-start.html')),
//         }),
//     ({ url }) =>
//         contentStrategy.handle({
//             request: new Request(
//                 url.pathname.replace('index.html', '') + 'content/index.html'
//             ),
//         }),
//     () =>
//         shellStrategy.handle({
//             request: new Request(getCacheKeyForURL('/shell-end.html')),
//         }),
// ]);

// const homeHandler = guidesHandler;

// const navigationHandler = (...args) => {
//     if (args[0].url.pathname.search('components') !== -1) {
//         return componentHandler(...args);
//     } else if (args[0].url.pathname.search('guides') !== -1) {
//         return guideHandler(...args);
//     }
//     return homeHandler(...args);
// };

// registerRoute(({ request }) => request.mode === 'navigate', navigationHandler);

precacheAndRoute(self.__WB_MANIFEST);

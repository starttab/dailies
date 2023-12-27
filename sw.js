<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"><meta name="theme-color" content="#42A5F5"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="IOS_SPLASH_TEXT"><meta name="apple-itunes-app" content="app-id=IOS_APP_ID"><meta name="google-play-app" content="app-id=GOOGLE_APP_ID"><meta http-equiv="Pragma" content="no-cache"><link async rel="apple-touch-icon" type="image/png" sizes="512x512" href="/pwa/images/default_icon_512_512.png"><link async rel="apple-touch-startup-image" href="/pwa/images/default_icon_512_512.png"><link async rel="manifest" href="/pwa/simi-manifest.json"><link async rel="shortcut icon" href="/pwa/favicon.ico"><meta name="theme-color" content="#FDA343"><script async defer="defer" src="https://www.google.com/recaptcha/api.js?render=6LcfB84UAAAAAOcJmzqYsBt0CsW2tXLvLz809Z7m"></script><script type="text/javascript">//prefetch pagebuilder data        
        var pbFetchingUrl = 'https://tapita.io/pb/publishedpb/?integrationToken=19jds2VqtTE7d5XMzFAA3zfd3gMVeSqr1624949663';
        try {
            fetch(pbFetchingUrl)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    if (
                        result &&
                        result.data &&
                        result.data.spb_page
                    )
                        window.smPbPagesByToken = result;
                })
        } catch (err) {

        }</script><script type="text/javascript">var use_pwa = true;

        excludedPaths = ['admin', 'simiconnector', 'simicustompayment', 'rest/v2'];
        excludedPathsSettings = "PWA_EXCLUDED_PATHS";
        if (excludedPathsSettings !== 'PWA_EXCLUDED_PATHS') {
            excludedPathsSettings = excludedPathsSettings.replace(/ /g, '').split(',');
            excludedPaths = excludedPaths.concat(excludedPathsSettings);
        }
        excludedPaths.some(function (path) {
            if (path == '')
                return false;
            var match = window.location.href.indexOf(path) !== -1;
            if (match) {
                use_pwa = false;
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.getRegistrations().then(function (registrations) {
                        for (var sw of registrations) {
                            if (sw.active.scriptURL.indexOf('simi-sw') > -1) {
                                console.log('Simi Service Worker has been deleted');
                                sw.unregister();
                            }
                        }
                    })
                }
                if (typeof (caches) !== "undefined") {
                    caches.keys().then(function (names) {
                        for (let name of names)
                            if (name.indexOf('sw-precache') >= 0) {
                                caches.delete(name);
                                window.location.reload();
                            }
                    });
                }
                if (navigator.userAgent.match(/iPad|iPhone|iPod/)) {
                    window.location.reload();
                }
                return true;
            }
            return false;
        });</script><link rel="preload" href="/pwa/fonts/ProximaNova-Regular.woff?v=PWA_BUILD_TIME_VALUE" as="font" type="font/woff" crossorigin><link rel="preload" href="/pwa/fonts/ProximaNova-Semibold.woff?v=PWA_BUILD_TIME_VALUE" as="font" type="font/woff" crossorigin><link rel="preload" href="/pwa/fonts/ProximaNova-Bold.woff?v=PWA_BUILD_TIME_VALUE" as="font" type="font/woff" crossorigin><link rel="preload" href="/pwa/fonts/icomoon.ttf?bm6fvq" as="font" type="font/ttf" crossorigin><link rel="preload" href="/pwa/fonts/icomoon.woff?bm6fvq" as="font" type="font/woff" crossorigin><link rel="preload" href="/pwa/js/jquery.min.js?v=PWA_BUILD_TIME_VALUE" as="script"><link rel="preload" href="/pwa/css/bootstrap.css?v=1" as="style"><script src="/pwa/js/jquery.min.js?v=PWA_BUILD_TIME_VALUE" name="simi_jquery_x"></script><script type="application/javascript" src="/pwa/js/config/config.js?v=PWA_BUILD_TIME_VALUE"></script><link id="bootstrap" rel="stylesheet" href="/pwa/css/bootstrap.css?v=1"><style>@font-face{font-family:Proxima Nova;src:url(/pwa/fonts/ProximaNova-Regular.woff?v=PWA_BUILD_TIME_VALUE);font-weight:400;font-display:swap}@font-face{font-family:Proxima Nova;src:url(/pwa/fonts/ProximaNova-Semibold.woff?v=PWA_BUILD_TIME_VALUE);font-weight:600;font-display:swap}@font-face{font-family:Proxima Nova;src:url(/pwa/fonts/ProximaNova-Bold.woff?v=PWA_BUILD_TIME_VALUE);font-weight:800;font-display:swap}@font-face{font-family:icomoon;src:url(/pwa/fonts/icomoon.eot?bm6fvq);src:url(/pwa/fonts/icomoon.eot?bm6fvq#iefix) format('embedded-opentype'),url(/pwa/fonts/icomoon.ttf?bm6fvq) format('truetype'),url(/pwa/fonts/icomoon.woff?bm6fvq) format('woff'),url(/pwa/fonts/icomoon.svg?bm6fvq#icomoon) format('svg');font-weight:400;font-style:normal;font-display:block}body{font-family:"Proxima Nova","Open Sans",sans-serif,arial!important}.grecaptcha-badge{opacity:0}.engine{display:none}</style><script>!sessionStorage.getItem("simicart_config")&&window.hasOwnProperty("Simicart_Api")&&window.Simicart_Api instanceof Object&&window.Simicart_Api.hasOwnProperty("app-configs")&&sessionStorage.setItem("simicart_config",JSON.stringify(window.Simicart_Api))</script></head><body><noscript>You need to enable JavaScript to run this app.</noscript><amp-install-serviceworker src="/pwa/simi-sw.js" layout="nodisplay"></amp-install-serviceworker><button disabled="disabled" class="js-push-btn" style="display:none"></button><pre style="display:none">
    <code class="js-subscription-json" style="display:none"></code>
</pre><div style="display:none"><div class="addthis_inline_share_toolbox" id="social-share"></div></div><div class="splash-screen" id="splash-screen" style="margin-top:0;text-align:center;width:100%;top:0;left:0"><div style="width:100%;height:auto;margin:0 auto 0"><img id="splash-img" alt="Splash Img" style="position:absolute;left:50%;top:50%;-webkit-transform:translateY(-50%) translateX(-50%);z-index:-1;width:100%;max-width:1024px" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgICAgICAgICAgICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNzY4IDc2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSINCiAgICAgICAgICAgICAgICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NjggNzY4OyI+DQogICAgICAgICAgICAgICAgPGc+DQogICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk4NiAtNS4zMjA3MzNlLTAyIDUuMzIwNzMzZS0wMiAwLjk5ODYgLTI3LjMxNzIgMjIuMjcyNSkiIGNsYXNzPSJzdDAiDQogICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSIjRkFBNDIzIiBjeD0iNDA0LjYiIGN5PSI1MjQuMiIgcng9IjMwLjUiIHJ5PSIzMC41IiAvPg0KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSB0cmFuc2Zvcm09Im1hdHJpeCgwLjEwNzQgLTAuOTk0MiAwLjk5NDIgMC4xMDc0IC00NC4yNzg4IDk2Mi41NDYxKSIgY2xhc3M9InN0MCINCiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9IiNGQUE0MjMiIGN4PSI1MTMuOSIgY3k9IjUwNS45IiByeD0iMzAuNSIgcnk9IjMwLjUiIC8+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJzdDAiIGZpbGw9IiNGQUE0MjMiDQogICAgICAgICAgICAgICAgICAgICAgICBkPSJNNTIzLjQsNDI3LjJjLTIuMSwwLjgtNC4zLDEuNC02LjUsMkwzNDQsNDczLjdjLTM1LjMsOS4xLTcxLjMtMTIuMi04MC40LTQ3LjVsLTIzLTg5LjENCgkJYy05LjItMzUuMywxMi03MS4zLDQ3LjMtODAuNWMwLjEsMCwwLjEsMCwwLjItMC4xbDE3Mi45LTQ0LjRjMzUuMy05LjEsNzEuMywxMi4yLDgwLjQsNDcuNWwyMyw4OS4zDQoJCUM1NzIuNywzODEuNyw1NTUsNDE1LjUsNTIzLjQsNDI3LjJ6IE0yOTEuNywyODYuMWMtMTcuNyw2LjUtMjcuNiwyNS40LTIyLjgsNDMuN2wyMyw4OS4zYzUuMSwxOS43LDI1LjIsMzEuNiw0NC45LDI2LjVsMTcyLjktNDQuNA0KCQljMTkuNy01LjEsMzEuNi0yNS4yLDI2LjUtNDQuOWwtMjMtODkuNWMtNS4xLTE5LjctMjUuMi0zMS41LTQ0LjktMjYuNUwyOTUuMywyODVDMjk0LjEsMjg1LjMsMjkyLjgsMjg1LjcsMjkxLjcsMjg2LjF6IiAvPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0ic3QwIiBmaWxsPSIjRkFBNDIzIiBkPSJNNTExLjksNTIyLjlsLTIxMC4yLDM0LjhjLTcuOSwxLjQtMTUuNS0zLjktMTYuOS0xMS44Yy0wLjYtMy41LDAuMS03LjEsMS45LTEwLjFsNTQuNy04OS4xbDI0LjksMTUuNQ0KCQlsLTM3LjksNjEuNWwxNzguOC0yOS42TDUxMS45LDUyMi45eiIgLz4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9InN0MCIgZmlsbD0iI0ZBQTQyMyINCiAgICAgICAgICAgICAgICAgICAgICAgIGQ9Ik0yNjkuMywyNzcuN2wtNDYuNS0yMy44Yy04LjUtNC0xOC42LTAuNC0yMi42LDguMWMtMy44LDguMS0wLjcsMTcuNyw3LjEsMjIuMWw1Mi4yLDI2LjhMMjY5LjMsMjc3Ljd6IiAvPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvc3ZnPg=="/></div></div><div id="root"></div><script type="text/javascript" src="/pwa/static/js/main.d44e9557.js"></script><script type="text/javascript" src="/pwa/static/js/vendors-main.b8a21316.chunk.js"></script></body></html>
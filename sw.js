const V='m-af66b252a4';const CORE=['./','./index.html','./manifest.json','./img/akiyaking-01.png','./img/akiyaking-05.png','./img/akiyaking-07.png','./img/yamorigami-01.png','./img/yuimorigami-01.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;e.respondWith(fetch(r).then(res=>{const copy=res.clone();caches.open(V).then(c=>c.put(r,copy));return res;}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))));});

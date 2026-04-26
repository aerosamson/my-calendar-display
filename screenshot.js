const { chromium } = require('playwright');

(async () => {
  const calendarUrl = 'https://calendar.google.com/calendar/embed?height=480&wkst=1&ctz=Australia%2FSydney&showPrint=0&showTitle=0&showNav=0&showTabs=0&showCalendars=0&showTz=0&src=NGVhNTYyMzAwNzUzYWUwMGI0OThjOGEwYzZkZDVjODRkNTBlOWViM2QwZTMyMTg0MGY3NjhlODU2YjFlMjRjZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZjUyZDg5NGIzMzMxMTY3NjFlYTVhNjJmYmE2ZGY4ODQxYmNkOThhZDFmMWQzMTQ3ZTRlNGRhNTg1NjE5ZGY3ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDgzZDhhOTE4OTgwMjlkZWNhZDRmOGRhMDBhZTRmZGRiNmM2MDM4MDZkYjFhNDMwNTY1MWJmZjljNzIwMTRiMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NDEzZWNkYWU1NjhiYWI4NTFiNmM2NjdmOTMwODVkNWFkZWRmN2JmYzk1N2I1YmE1ZTM2NmMxYjRmMTMxODUyZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uYXVzdHJhbGlhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%2333b679&color=%234285f4&color=%23d50000&color=%23f6bf26&color=%234285f4';

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 800, height: 480 },
    deviceScaleFactor: 2 
  });

  await page.goto(calendarUrl, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000); // Wait for events to load
  await page.screenshot({ path: 'calendar.png' });
  await browser.close();
})();

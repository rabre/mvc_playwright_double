const { chromium } = require('playwright');

(async () => {
    // Lance Chromium en mode non headless
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Va sur l'URL spécifiée
    await page.goto('https://vcl-admin-pf3.comdatagroup.fr/hermes360/Admin/Web_Service/SessionsView.aspx');

    // Définit la taille de l'écran (viewport)
    await page.setViewportSize({ width: 1080, height: 1024 });

    
    // Ferme le navigateur (ajouté si nécessaire)
    // await browser.close();  // Décommenter si tu veux fermer le navigateur à la fin du script
})();
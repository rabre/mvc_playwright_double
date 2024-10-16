const { chromium } = require('playwright');

(async () => {
  // Lance Chromium
  //const browser = await chromium.launch();
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigue vers un site web
  await page.goto('https://web.facebook.com/');
  await page.getByLabel('Adresse e-mail ou numéro de tél.').click();
  await page.getByLabel('Adresse e-mail ou numéro de tél.').fill('mihajabrice@gmail.com');
  
  //Entrer le mot de passe
  await page.getByLabel('Mot de passe').click();
  await page.getByLabel('Mot de passe').fill('Konecta@2024');

  //click sur le bouton suivant 
  await page.getByTestId('royal_login_button').click();
  // selectionner le label
  await page.screenshot({ path: 'fb.png' });
  
  //await browser.close();
})();
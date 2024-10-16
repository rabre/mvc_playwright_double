const { chromium } = require('playwright');

(async () => {
  // Lance Chromium
  //const browser = await chromium.launch();
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigue vers un site web
  await page.goto('https://accounts.google.com/');
  await page.getByLabel('Adresse e-mail ou téléphone').click();
  await page.getByLabel('Adresse e-mail ou téléphone').fill('brice.mihajaniriana@konecta-group.com');
  //click sur le bouton suivant 
  await page.getByRole('button', { name: 'Suivant' }).click(); 
  // selectionner le label
  await page.getByLabel('Saisissez votre mot de passe').click();
  //Entrer le mot de passe
  
  
  // Prend une capture d'écran
  await page.screenshot({ path: 'example.png' });
  await page.getByLabel('Saisissez votre mot de passe').fill('b2s-group.com@2039');
  //click sur Suivant 
  await page.getByRole('button', { name: 'Suivant' }).click();
  

  await page.waitForTimeout(10000)
  //goto page Help
  await page.goto('https://help-fsm.konecta.cloud/app/itdesk/ui/requests')
  // Ferme le navigateur
  //await browser.close();
})();
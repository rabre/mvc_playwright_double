
const { chromium } = require('playwright');

(async () => {
    
        console.log('Launching browser...');
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();
        
        console.log('Navigating to login page...');
        await page.goto('https://vcl-admin-pf3.comdatagroup.fr/hermes360/Admin/Launcher/login');
        await page.setViewportSize({ width: 1080, height: 1024 });

        console.log('Entering username...');
        const usernameInput = await page.waitForSelector('#usrID');
        await usernameInput.fill('b.mihajananiriana');

        console.log('Entering password...');
        const passwordInput = await page.waitForSelector('#usrPWD');
        await passwordInput.fill('Konecta@2024');

        console.log('Clicking login button...');
        const loginButton = await page.waitForSelector('#loginForm > div.form-group.buttons > input');
        await loginButton.click();

        console.log('Waiting for navigation after login...');
        //await page.waitForNavigation();
        console.log('Login navigation complete.');

        console.log('Clicking Admin button...');
        const AdminButton = await page.waitForSelector('#hermes > div.screen-container > div.screen > div:nth-child(3) > div > div.panel-content.state.normal > div > div.inside-button-panel.admin-console > span');
        await AdminButton.click();

        console.log('Waiting for navigation after clicking Admin button...');
        //await page.waitForNavigation();
        console.log('Admin navigation complete.');

        console.log('Clicking Choix Emission...');
        const Choix_Emission = await page.waitForSelector('#leftMenu > div:nth-child(3) > div.menuGroup > div:nth-child(2) > span');
        if (Choix_Emission) {
            await Choix_Emission.click();
            console.log('Clicked Choix Emission.');
        } else {
            console.log('Element Choix Emission not found.');
        }

        res.send('Script executed successfully');
    // catch (error) {
       // console.error('An error occurred:', error);
       // res.status(500).send('An error occurred while executing the script');
   // } 
       // await browser.close();
    
    
})();
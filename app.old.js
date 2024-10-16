const express = require('express');
const app = express();
const mailController = require('./controllers/mailController');

// Configurer EJS comme moteur de rendu
app.set('view engine', 'ejs');

// Route principale
app.get('/', (req, res) => {
    res.render('index');
});

// Route pour lancer le script Mail.js
app.post('/send-mail', mailController.sendMail);

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
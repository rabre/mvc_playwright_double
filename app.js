const express = require('express');
const app = express();
const mailController = require('./controllers/mailController');

// Configurer EJS comme moteur de rendu
app.set('view engine', 'ejs');

// Middleware pour servir les fichiers statiques
app.use(express.static('public'));

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route pour la page principale
app.get('/', (req, res) => {
    res.render('index');
});

// Route pour lancer Mail.js
app.post('/send-mail', mailController.sendMail);

// Route pour connecter Facebook
app.post('/send-facebook', mailController.sendFacebook);

// Route pour lancer LiberationH360
app.post('/send-LibHermes', mailController.LibHermes);

// Route pour lancer LogH360
app.post('/send-LogHermes', mailController.LogHermes);

// Lancer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
const express = require('express');
const app = express();
const consumptionController = require('./controllers/consumptionController');

// Configuration EJS
app.set('view engine', 'ejs');

// Middleware pour traiter les données des formulaires
app.use(express.urlencoded({ extended: true }));
// Middleware pour servir les fichiers statiques mirelier  amin'ilay CSS io
app.use(express.static('public'));

// Route pour afficher le formulaire
app.get('/', (req, res) => {
    res.render('index');
});

// Route pour calculer la consommation
app.post('/calculate', consumptionController.calculateConsumption);

// Route pour afficher le résultat
app.get('/result', (req, res) => {
    res.render('result', { totalElectricity: 0, totalWater: 0, totalPrice: 0, damatsTotalELec: 0, rabreTotal: 0, Damats: 0, Rabre: 0});
});

// Lancer le serveur
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
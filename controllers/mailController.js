const { exec } = require('child_process');

// Fonction pour exécuter le script Mail.js
exports.sendMail = (req, res) => {
    exec('node Mail.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erreur lors de l'exécution du script Mail.js : ${stderr}`);
            return res.status(500).send(`Erreur lors de l'exécution du script Mail.js : ${stderr}`);
        }
        console.log(`Résultat Mail.js : ${stdout}`);
        res.send(`Le script Mail.js a été exécuté avec succès : ${stdout}`);
    });
};

// Fonction pour exécuter le script Facebook.js
exports.sendFacebook = (req, res) => {
    exec('node Facebook.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erreur lors de l'exécution du script Facebook.js : ${stderr}`);
            return res.status(500).send(`Erreur lors de l'exécution du script Facebook.js : ${stderr}`);
        }
        console.log(`Résultat Facebook.js : ${stdout}`);
        res.send(`Le script Facebook.js a été exécuté avec succès : ${stdout}`);
    });
};

// Fonction pour exécuter le script LiberationH360.js
exports.LibHermes = (req, res) => {
    exec('node LiberationH360.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erreur lors de l'exécution du script LiberationH360.js : ${stderr}`);
            return res.status(500).send(`Erreur lors de l'exécution du script LiberationH360.js : ${stderr}`);
        }
        console.log(`Résultat LiberationH360.js : ${stdout}`);
        res.send(`Le script LiberationH360.js a été exécuté avec succès : ${stdout}`);
    });
};


// Fonction pour exécuter le script LiberationH360.js
exports.LogHermes = (req, res) => {
    exec('node loginH360.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erreur lors de l'exécution du script loginH360.js : ${stderr}`);
            return res.status(500).send(`Erreur lors de l'exécution du script loginH360.js : ${stderr}`);
        }
        console.log(`Résultat loginH360.js : ${stdout}`);
        res.send(`Le script loginH360.js a été exécuté avec succès : ${stdout}`);
    });
};

// Fonction pour exécuter le script Python
exports.sendPython = (req, res) => {
    exec('python python.py', (err, stdout, stderr) => {  // Assurez-vous que 'python' est bien installé et accessible dans le PATH
        if (err) {
            console.error(`Erreur lors de l'exécution du script Python : ${stderr}`);
            return res.status(500).send('Erreur lors de l\'exécution du script Python');
        }
        console.log(`Résultat Python : ${stdout}`);
        res.send('Le script Python a été exécuté avec succès');
    });
};
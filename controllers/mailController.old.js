const { exec } = require('child_process');

// Fonction pour exécuter le script  MailPro
exports.sendMail = (req, res) => {
    exec('node Mail.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erreur lors de l'exécution du script : ${stderr}`);
            return res.status(500).send('Erreur lors de l\'exécution du script');
        }
        console.log(`Résultat : ${stdout}`);
        res.send('Le script Mail.js a été exécuté avec succès');
    });


// Fonction pour exécuter le script Facebook.js
exports.sendFacebook = (req, res) => {
    exec('node Facebook.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erreur lors de l'exécution du script Facebook.js : ${stderr}`);
            return res.status(500).send('Erreur lors de l\'exécution du script Facebook.js');
        }
        console.log(`Résultat Facebook.js : ${stdout}`);
        res.send('Le script Facebook.js a été exécuté avec succès');
    });
};
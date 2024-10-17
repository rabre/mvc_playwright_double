// Fonction pour calculer les consommations
exports.calculateConsumption = (req, res) => {
    const { kilowattheure, charge_redevance, damats, rabre, water } = req.body;

    // Convertir les inputs en nombres et vérifier les valeurs
    const totalKwh = parseFloat(kilowattheure) || 0;
    const totalCharge = parseFloat(charge_redevance) || 0;
    const damatsKwh = parseFloat(damats) || 0;
    const rabreKwh = parseFloat(rabre) || 0;
    const waterConsumption = parseFloat(water) || 0;

    // Coût fixe par kilowattheure et mètre cube d'eau si inferieur de 130 Kwh la Consommation total
    const costPerKwh = 340; // Exemple de coût par kilowattheure
    const costPerCubicMeter = 415; // Exemple de coût par mètre cube d'eau
    //const kwhmax = 130; // Consommation maximale d'électricité utilisée pour le calcul

    let damatsTotal = 0;
    let rabreTotal = 0;

    // Vérification de l'input : si DaMats est renseigné, on calcule pour Rabre, sinon inversement
    if (damatsKwh > 0) {
        // Calcul pour Rabre si DaMats est renseigné
        rabreTotal = ((totalKwh - damatsKwh) * costPerKwh) + (totalCharge / 2);
        damatsTotal = (damatsKwh * costPerKwh) + (totalCharge / 2);
    } else if (rabreKwh > 0) {
        // Calcul pour DaMats si Rabre est renseigné
        damatsTotal = ((totalKwh - rabreKwh) * costPerKwh) + (totalCharge / 2);
        rabreTotal = (rabreKwh * costPerKwh) + (totalCharge / 2);
    }

    // Calcul de la consommation totale d'électricité et d'eau
    const totalElectricity = (totalKwh * costPerKwh) + totalCharge;
    const totalWater = waterConsumption * costPerCubicMeter;

    // Calcul du prix total (électricité + eau)
    const totalPrice = totalElectricity + totalWater;

    // Calcul des sous-totaux (eau + électricité) pour Rabre et DaMats
    const Damats = damatsTotal + (totalWater / 2);
    const Rabre = rabreTotal + (totalWater / 2);

    // Renvoyer les résultats à la vue
    res.render('result', {
        totalElectricity,
        totalWater,
        totalPrice,
        damatsTotal,
        rabreTotal,
        Damats,
        Rabre
    });
};
# 1M - Projet Micro-serre d'intérieure automatisée - Architecture des systèmes informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Harmonia_v4.jpg?raw=true)

## Atelier 1 - Entrées/Sorties (I/O)

ℹ️ **CONSIGNES IMPORTANTES**
> - 🗂️ **Sauvegardez TOUS vos documents**  dans votre répertoire de travail de groupe sur **OneDrive**.
> - 📝 **Prenez des notes** (sous forme manuscrite ou numérique, peu importe comment, **mais prenez des notes !!!** 😂)
> - 🛤️ **Organisez** et  **planifiez** votre travail de groupe. (Qui ? Fait quoi ? quand ?) 
> - 🧑‍🧑‍🧒 **Communiquez** entre vous.
> - 🧭 **Laissez des traces de **TOUTES vos expérimentations** en prenant des **notes**, des **photos** (avec votre téléphone portable) ou des **captures d'écran**.
> - ⚠️ Mettez à jour le journal de bord à **CHAQUE séance**.⚠️
> - 🆘 Si vous êtes **perdu** servez-vous des **guides** et des **ressources** qui sont à votre disposition dans le **répertoire du projet** sur **OneDrive**.

## @showdialog

## Comment une information est-elle transformée en donnée numérique ?

## Étape 1/5 - Récolte de données via USB
Nous allons créer un programme qui mesure et envoie la température et la luminosité sur le port série (**USB**) afin de pouvoir visualiser les données sur le PC, dont l'algorithme est le suivant :


[Vidéo YouTube](https://youtu.be/imzGdgKm4W0?si=EPmg_eWGlHzvkHMw)

Pour cela nous allons utiliser la fonction « série écrire valeur » dans Communication Série
## Exemple de code block
```blocks
basic.forever(function () {
    serial.writeValue("temp", input.temperature())
    serial.writeValue("lum", input.lightLevel())
})
```

## @showdialog

FÉLICITATIONS!  Tu peux maintenant faire défiler tout le texte que tu désires sur ton Micro:bit.

## @showdialog

## Étape 2/5 - Sauvegarde des données récoltées
Sauvegarde de données

## Étape 3/5 - Programmation du Micro:Bit avec le capteur M5STACK EARTH
![Branchement du capteur d'humidité (sol) - M5STACK EARTH](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive29.jpeg?raw=true)

## Étape 4/5 - Programmation du Micro:Bit avec le capteur DHT11
![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive30.jpeg?raw=true)

## Étape 5/5 - Programmation du Micro:Bit avec la led RGB
![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive31.jpeg?raw=true)

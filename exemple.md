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

![Atelier 1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive24.jpeg?raw=true)


## Étape 1/5 - Récolte de données via USB
Nous allons créer un programme qui envoit la température et la luminosité sur le port série (**USB**) afin de pouvoir les visualiser sur le PC.

**Remarque**
- La **température** et la **luminosité** proviennent de deux **variables prédéfinies** dans le Micro:Bit et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants (CPU, matrice de leds)

Pour transmettre via **USB** ces données, nous allons utiliser la **fonction** « série écrire valeur » dans Communication Série
```blocks
basic.forever(function () {
    serial.writeValue("temp", input.temperature())
    serial.writeValue("lum", input.lightLevel())
})
```

Si vous ne parvenez pas à faire l'exerice, vous pouvez regarder la [vidéo YouTube](https://youtu.be/imzGdgKm4W0?si=EPmg_eWGlHzvkHMw) pour vous aider.


## Étape 2/5 - Sauvegarde des données récoltées
Sauvegarde de données

## Étape 3/5 - Programmation du Micro:Bit avec le capteur M5STACK EARTH
![Branchement du capteur d'humidité (sol) - M5STACK EARTH](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive29.jpeg?raw=true)

## Étape 4/5 - Programmation du Micro:Bit avec le capteur DHT11
![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive30.jpeg?raw=true)

## Étape 5/5 - Programmation du Micro:Bit avec la led RGB
![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive31.jpeg?raw=true)

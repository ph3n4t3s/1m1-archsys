# 1M - Projet Micro-serre d'intérieure automatisée - Architecture des systèmes informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Harmonia_v4.jpg?raw=true)
![Atelier 1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive24.jpeg?raw=true)

ℹ️ **CONSIGNES IMPORTANTES**
> - 🗂️ **Sauvegardez TOUS vos documents**  dans votre répertoire de travail de groupe sur **OneDrive**.
> - 📝 **Prenez des notes** (sous forme manuscrite ou numérique, peu importe comment, **mais prenez des notes !!!** 😂)
> - 🛤️ **Organisez** et  **planifiez** votre travail de groupe. (Qui ? Fait quoi ? quand ?) 
> - 🧑‍🧑‍🧒 **Communiquez** entre vous.
> - 🧭 **Laissez des traces de **TOUTES vos expérimentations** en prenant des **notes**, des **photos** (avec votre téléphone portable) ou des **captures d'écran**.
> - ⚠️ Mettez à jour le journal de bord tout au long de **CHAQUE séance**.⚠️
> - 🆘 Si vous êtes **perdu** servez-vous des **guides** et des **ressources** qui sont à votre disposition dans le **répertoire du projet** sur **OneDrive**.

## @showdialog

# Récolte de données via USB
Programme qui envoit continuellement la **température** et la **luminosité** sur le port série (**USB**) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.

**Remarque**
- La **température** et la **luminosité** proviennent de deux **variables prédéfinies** dans le Micro:Bit et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants du Micro:Bit (CPU, matrice de leds)

## Étape 1/3 - Programmer le Micro:Bit @showhint
### Explications sur le programme
Les données sont envoyées chaque seconde à l'aide de la boucle ``||basic:toujours||`` (Base).
La **fonction** ``||Communication Série:série écrire valeur||`` (Communication Série) et le bloc ``||Entrée:température (°C)||`` (Entrée) sert à envoyer la **température** sur le port série. (**USB**) 
La **fonction** ``||Communication Série:série écrire valeur||`` (Communication Série) et le bloc ``||Entrée:niveau d'intensité lumineuse||`` (Entrée) sert à envoyer la **luminosité** sur le port série. (**USB**)

```blocks
basic.forever(function () {
    serial.writeValue("temperature", input.temperature())
    serial.writeValue("luminosite", input.lightLevel())
    basic.pause(1000)
})
```

> - 🆘 Si vous ne parvenez pas à faire l'exercice, vous pouvez regarder la [vidéo YouTube du RECIT](https://youtu.be/imzGdgKm4W0?si=EPmg_eWGlHzvkHMw) pour vous aider.


## Étape 2/3 - Visualiser les données sur le PC @showhint
Pour visualiser les données sur le PC, il faut préablement transférer le programme sur le Micro:Bit.
Ensuite, un nouveau bouton **Afficher les données Appareil** apparaît sur la gauche de l'écran
![Télécharger et visualiser les données sur le PC](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Record1.gif?raw=true) 

## Étape 3/3 - Sauvegarder les données sur le PC @showhint

# Récolte de données avec le capteur M5STACK EARTH
![Branchement du capteur d'humidité (sol) - M5STACK EARTH](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive29.jpeg?raw=true)

# Récolte de données avec le capteur DHT11
![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive30.jpeg?raw=true)

# Gestion de la couleur et de l'intensité de la led RGB
![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive31.jpeg?raw=true)

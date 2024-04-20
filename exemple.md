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
> - ⚠️ Mettez à jour le journal de bord tout au long de **CHAQUE séance**.⚠️
> - 🆘 Si vous êtes **perdu** servez-vous des **guides** et des **ressources** qui sont à votre disposition dans le **répertoire du projet** sur **OneDrive**.

## @showdialog

![Atelier 1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive24.jpeg?raw=true)


# Récolte de données via USB
Programme qui envoie continuellement les mesures de la **température** et de la **luminosité** sur le port série, (**USB**) afin de les **enregistrer"" et les **traiter** dans un deuxième temps sur le PC.

**Remarque**
- La mesure de la **température** et de la **luminosité** proviennent de deux **variables prédéfinies** dans le Micro:Bit et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants (CPU, matrice de leds)

## Étape 1 - Utilisation d'une boucle infinie
Une boucle infinie envoit continuellement les données à l'aide de la boucle ``||basic:toujours||`` (Base).

## Étape 2 - Transmettre la température sur le port série. (**USB**)
Le bloc ``||Communication Série:série écrire valeur||`` (Communication Série) et le bloc ``||Entrée:température (°C)||`` (Entrée) sert à envoyer la **température** sur le port série. (**USB**) 

## @showhint

```blocks
basic.forever(function () {
    serial.writeValue("temp", input.temperature())
})
```

## @showhint

## Étape 3 - Transmettre la luminosité sur le port série. (**USB**)
Le bloc ``||Communication Série:série écrire valeur||`` (Communication Série) et le bloc ``||Entrée:niveau d'intensité lumineuse||`` (Entrée) sert à envoyer la **luminosité** sur le port série. (**USB**)

## @showhint

```blocks
basic.forever(function () {
    serial.writeValue("temp", input.temperature())
    serial.writeValue("lum", input.lightLevel())
})
```
## @showhint

## Étape 4 - Visualisez les données sur le PC.

> - 🆘 Si vous ne parvenez pas à faire l'exercice, vous pouvez regarder la [vidéo YouTube du RECIT](https://youtu.be/imzGdgKm4W0?si=EPmg_eWGlHzvkHMw) pour vous aider.

# Sauvegarde des données récoltées sur le PC
Sauvegarde de données

# Récolte de données avec le capteur M5STACK EARTH
![Branchement du capteur d'humidité (sol) - M5STACK EARTH](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive29.jpeg?raw=true)

# Récolte de données avec le capteur DHT11
![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive30.jpeg?raw=true)

# Gestion de la couleur et l'intensité de la led RGB
![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive31.jpeg?raw=true)

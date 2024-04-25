
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

> - ⚠️ Mettez à jour le journal de bord à **CHAQUE séance**.⚠️

> - 🆘 Si vous êtes **perdu** servez-vous des **guides** et des **ressources** qui sont à votre disposition dans le **répertoire du projet** sur **OneDrive**.

## @showdialog

# Récolte de données via USB @showhint

Le programme envoit continuellement la **température** et la **luminosité** sur le port série (**USB**) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.

**Remarque**

- La **température** et la **luminosité** proviennent de deux **variables prédéfinies** dans le Micro:Bit et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants du Micro:Bit (CPU, matrice de leds)

## Étape 1/4 - Programmer le Micro:Bit @showhint

Pour transmettre via **USB** ces données, il faut utiliser la **fonction** ``||Communication Série:série écrire valeur||`` dans la catégorie Communication Série.

```blocks

serial.writeLine(timeanddate.dateTime())

basic.forever(function () {

    serial.writeLine(timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr))

    serial.writeValue("temperature", input.temperature())

    serial.writeValue("luminosite", input.lightLevel())

    basic.pause(1000)

})

```

Si vous ne parvenez pas à faire l'exercice, vous pouvez regarder la [vidéo YouTube](https://youtu.be/imzGdgKm4W0?si=EPmg_eWGlHzvkHMw) pour vous aider.

## Étape 2/4 - Sauvegarder les données sur le PC @showhint
Chaque fois que vous faites des essais, 

## Étape 3/4 - Visualiser les données sur le PC @showhint
Utilisez une application de traitement de données (Excel, Numbers, Google Sheet) pour visualiser et/ou traiter les données

## Étape 3/4 - Interpréter et analyser les données sur le PC @showhint
Avant tout il est nécessaire de valider les données récoltées, et supprimer les données inutiles ou incorrectes.


## Capteur - M5STACK EARTH @showhint

![Branchement du capteur d'humidité (sol) - M5STACK EARTH](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive29.jpeg?raw=true)

## Capteur - DHT11 @showhint

![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive30.jpeg?raw=true)

## Actuateur - Led RGB @showhint

![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive31.jpeg?raw=true)

```blocks
basic.forever(function () {
    for (let Rouge = 0; Rouge <= 1023; Rouge++) {
        for (let Vert = 0; Vert <= 1023; Vert++) {
            for (let Bleu = 0; Bleu <= 1023; Bleu++) {
                pins.analogWritePin(AnalogPin.P0, Rouge)
                pins.analogWritePin(AnalogPin.P1, Vert)
                pins.analogWritePin(AnalogPin.P2, Bleu)
            }
        }
    }
})
```

___Que faire quand cela ne fonctionne pas ?___

## Étape 1/4 - Vérifier les connexions
Par moment, il est préférable de tout débrancher et tout rebranché en respectant précisemment le **schéma de câblage.**

## Étape 2/4 - Vérifier la connexion Micro:Bit
Assurez-vous que le Micro:Bit soit inséré correctement (et dans le bon sens) dans le bouclier. (shield)
Contrôlez la connexion du câble Micro-USB
- Si le câble est mal branché, le transfert du programme et la récolte de données ne pourront pas fonctionner, car la liaison entre le Micro:Bit et le PC ne sera pas établie.

## Étape 3/4 - Vérifier les ports d'entrées-sorties (programmation)
Les données sont soient :
1. Récoltées en entrée depuis un capteur (input) 
2. Envoyées en sortie sur un actuateur (output).

Le Micro:Bit dispose de 3 ports (P0, P1, P2) qui sont prévus pour récolter ou envoyer des données. Mais il faut lui indiquer 
Quel port utilise le capteur/actuateur ?
Est-ce un port en entrée ou en sortie ?

## Étape 4/4 - Vérifier la temporalité

> Lorsque le Micro:Bit envoye ou reçoit de données, il peut le faire de manière beaucoup trop rapide pour le capteur ou l'actuateur, raison pour laquelle il faut insére une pause ``||basic:pause(temps)||``
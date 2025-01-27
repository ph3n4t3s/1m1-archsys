# 1M - Projet Micro-serre intelligente - Architecture des systèmes informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Harmonia_v4.jpg?raw=true)

![Atelier 1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive3.png?raw=true)
![logo CC](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/cc.png?raw=true)
Ce tutoriel est mis à disposition, sauf exception, selon les termes de la Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International.

## @showdialog

![INFORMATIONS IMPORTANTES](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive34.png?raw=true)

![Manipulations et activités de l'atelier #1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive35.png?raw=true)

## @showdialog

![Automatisation](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Automatisation.png?raw=true)

---
## @showdialog

## Récolter des données du Micro:MicroBit via le port série USB

Pour récolter des données sur le PC, il faut que le programme du MicroBit envoit des informations sur le port série **USB**.

Dans l'exemple suivant, la **température** et la **luminosité** sont envoyées chaque seconde
sur le port série (==USB==) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.

💡

- La **température** et la **luminosité** proviennent de deux **variables prédéfinies** dans le **Makecode**
  et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants du Micro:Bit (Sonde de température du CPU, matrice de leds)

![Ampoule bleue](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/ampoule_bleue.png?raw=true)

## @showdialog

## Programmation du Micro:Bit

Pour transmettre les données récoltées via le port série **USB** , il faut utiliser la **fonction** ``||Communication Série:série écrire valeur||`` qui se trouve dans la catégorie **Communication Série**
et la déposer dans la boucle toujours ``||basic:toujours||``, ce qui va définir le nom et la valeur mesurée.

ℹ️

- La variable prédéfinie pour la température ``||Entrée:température (° C)||``
  et celle pour la luminosité ``||Entrée:niveau d'intensité lumineuse||`` se trouvent dans la catégorie **Entrée**.

À la fin de la boucle nous insérons une pause ``||basic:pause (ms)||`` d'une 1 seconde avant de recommencer la boucle.

```blocks
basic.forever(function () {
    serial.writeValue("temperature", input.temperature())
    serial.writeValue("luminosite", input.lightLevel())
    basic.pause(1000)
})
```
v
## @showdialog

## Téléchargement du programme et visualisation des données

ℹ️**nformations**
- Lors du premier téléchargement, "Makecode" demande un appairage entre le Micro:Bit et l'ordinateur. 


Remarque : Cette opération s'effectue uniquement si cela n'a jamais été fait auparavant.




- Lorsque le téléchargement est terminé, un nouveau bouton "**Afficher données Appareil**" doit apparaître sur la partie gauche de l'écran.

![Téléchargement-visualisation-sauvegarde](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1-Transfert-Visualisation-Sauvegarde.gif?raw=true)

💡
Touchez le CPU pour faire varier la température, et éclairez avec votre smartphone la matrice de led du Micro:Bit.

> ⚠️
- Sauvegardez **toutes vos** données récoltées à chaque fois que vous faites des essais, ceci vous aidera à mieux comprendre ce qui se passe et apporter des corrections si besoin.
- N'oubliez pas de sauvegarder votre programme à chaque étape. (plusieurs versions)
- N'oubliez pas de télécharger le programme sur le MicroBit à chaque **modification**.

## Interprêtation et analyse des données @showdialog

💡 Utilisez une application de traitement de données tel que Excel, Numbers ou Google Sheet pour :
1. Visualiser
2. Traiter/corriger
3. Représenter sous forme graphique 

vos données de manière plus appronfondies.

> ⚠️ Il est **nécessaire** de valider les données récoltées, et supprimer celles qui sont inutiles ou incorrectes.
> => Cela évite de perdre du temps lorsqu'on va analyser les données par la suite.

## Situation 1 @showdialog

Dans l'exemple suivant nous allons utliser un capteur pour mesurer l'humidité du sol,
et envoyer la valeur mesurée sur le PC via le port série **USB**.

### Mesure de l'humidité du sol

Le shéma de câblage ci-dessous montre la façon dont le capteur est connecté aux ports P0 et P1 du MicroBit.

![Branchement du capteur d'humidité (sol) - M5STACK EARTH](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive36.png?raw=true)

### Programmation du Micro:Bit

Le programme lit les données du capteur **M5STACK-EARTH** :

- **D Out** : Digital Out -> Valeur numérique (0 ou 1) -> **P0**
- **A Out** : Analogic Out - > Valeur analogique (0-1023) -> **P1**

Le programme lit la valeur numérique du capteur à l'aide de la **fonction** ``||Broches:lire la broche numérique P0||`` et
la valeur analogique à l'aide de la **fonction** ``||Broches:lire la broche analogique P1||``  dans la catégorie **Broches**
et l'envoit sur le port série **USB** à l'aide de la **fonction** ``||Communication Série:série écrire valeur||`` dans la catégorie **Communication Série**.

⚠️
N'oubliez pas de sauvegarder **TOUS** vos programmes dans le répertoire de travail.

## @showhint

```blocks
basic.forever(function () {
    serial.writeValue("D Out", pins.digitalReadPin(DigitalPin.P0))
    serial.writeValue("A Out", pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
})
```


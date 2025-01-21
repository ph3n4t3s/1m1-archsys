# 1M - Projet Micro-serre d'intérieure automatisée - Architecture des systèmes informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Harmonia_v4.jpg?raw=true)

![Atelier 1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive3.png?raw=true)
![logo CC](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/cc.png?raw=true)
Ce tutoriel est mis à disposition, sauf exception, selon les termes de la Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International.

![INFORMATIONS IMPORTANTES](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive34.png?raw=true)

![Manipulations et activités de l'atelier #1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive35.png?raw=true)

![Automatisation](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Automatisation.png?raw=true)


## Récolter des données du Micro:MicroBit via le port série USB @fullscreen

Pour récolter des données sur le PC, il faut que le programme du MicroBit envoit des informations sur le port série **USB**.

Dans l'exemple suivant, la **température** et la **luminosité** sont envoyées chaque seconde
sur le port série (==USB==) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.

💡

- La **température** et la **luminosité** proviennent de deux **variables prédéfinies** dans le **Makecode**
  et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants du Micro:Bit (Sonde de température du CPU, matrice de leds)

![Ampoule bleue](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/ampoule_bleue.png?raw=true)

## Programmation du Micro:Bit @fullscreen

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

## Téléchargement du programme et visualisation des données @fullscreen

⚠️

- Il est important de télécharger le programme sur le MicroBit à chaque **modification**.

ℹ️

- Lors du premier téléchargement, "Makecode" demande de d'apairer le Micro:Bit si cela n'a jamais été fait auparavant.
- Lorsque le téléchargement est terminé, un nouveau bouton "**Afficher données Appareil**" doit apparaître sur la partie gauche de l'écran.

![Téléchargement-visualisation-sauvegarde](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1-Transfert-Visualisation-Sauvegarde.gif?raw=true)

💡
Touchez le CPU pour faire varier la température, et éclairez avec votre smartphone la matrice de led du Micro:Bit.

⚠️

- Sauvegardez **toutes vos** données récoltées à chaque fois que vous faites des essais, ceci vous aidera à mieux comprendre ce qui se passe et apporter des corrections si besoin.
- N'oubliez pas de sauvegarder votre programme à chaque étape.

## Interprêtation et analyse des données @fullscreen

💡
Utilisez une application de traitement de données tel que Excel, Numbers ou Google Sheet pour visualiser et/ou traiter vos données de manière plus appronfondies.

⚠️
Il est **nécessaire** de valider les données récoltées, et supprimer celles qui sont inutiles ou incorrectes.
=> Cela évite de perdre du temps lorsqu'on va analyser les données par la suite.

## Situation 1 @fullscreen

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

## Utilisation des fonctions @fullscreen

Reprenons notre programme pour créer deux **fonctions** : ``||Fonctions:Créer une fonction...||`` dans la catégorie **Avancé** / **Fonctions**.

LectureCapteurs : Qui va lire et stocker les valeurs mesurées.


```blocks
function LectureCapteurs () {
}
```

EnvoieDonnees : Qui va envoyer le contenu de ces 2 variables sur le PC via le port série **USB**.

```blocks
function EnvoieDonnees () {
}
```

### Créez le contenu des deux fonctions

**LectureCapteurs**
qui devra aller lire une valeur :

- numérique (0 ou 1) sur le port P0
- analogique (de 0 à 1023) sur le port P1

et **EnvoieDonnees**
qui devra envoyer ces données via le port série **USB**

💡
Les blocks à utilisés pour lire sont :
- ``||Broches:lire broche analogique||``
- ``||Broches:lire broche numérique||``

et pour écrire :
- ``||Communication Série:série écrire valeur||``

## @showhint

```blocks
function LectureCapteurs () {
    basic.showIcon(IconNames.SmallDiamond)
    mesure_D_Out = pins.digitalReadPin(DigitalPin.P0)
    mesure_A_Out = pins.analogReadPin(AnalogPin.P1)
}
function EnvoieDonnees () {
    basic.showIcon(IconNames.SmallSquare)
    serial.writeValue("D Out", mesure_D_Out)
    radio.sendValue("D Out", mesure_D_Out)
    serial.writeValue("A Out", mesure_A_Out)
    radio.sendValue("A Out", mesure_A_Out)
}
let mesure_A_Out = 0
let mesure_D_Out = 0
radio.setGroup(10)
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    LectureCapteurs()
    EnvoieDonnees()
})
```

💡
- L'utilisation des blocks ``||basic:montrer icône||`` pour changer l'afficage des leds suffit à ajouter des temps suffisants entre chaque mesure, donc il n'y plus besoin de pause.


### Récolte et analyse des données @fullscreen
Récoltez les données et n'oubliez pas de faitre une sauvegarde de **TOUTES** vos données sous format csv dans votre répertoire de travail.

💡
- Utilisez vos doigts pour toucher la partie métalique du capteur pour faire varier la valeur mesurée.

![Récolte de données](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/2-Mesures.gif?raw=true)

## QUESTIONNEMENT & ANALYSE

Cette expérimentation est destinée à :

1. Savoir déterminer le minimum et le maximum des valeurs attendues du capteur (exemple niveau d'eau, le réservoire d'eau est-il vide ou plein ?).
2. Comprendre comment elles évoluent.
3. Quelles sont les valeurs minimum et maximum mesurées ? 
4. A quoi correspond la valeur minimum ? 
5. À quoi correspond la valeur maximum ? 

## Situation 2 @fullscreen

Dans l'exemple suivant nous allons mesurer la température
et l'humidité de l'air via le capteur (==DHT11==) pour l'envoyer au PC via le port série **USB**.

Nous reprennons le principe des 2 fonctions l'exercice précédent :

- LectureCapteurs : Lit et stocke la température et l'humidité de l'air dans 2 variables (``||variable:mesure_temp||`` et mesure_hum).
- EnvoieDonnees : Envoit le contenu de ces 2 variables avec les bon label au PC via le port série **USB**.

### Mesure de la température et de l'humidité de l'air

![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive37.png?raw=true)

### Programmation du MicroBit
Pour lire le capteur **DHT11**, il est nécessaire d'utiliser une extension.

Cette dernière à déjà été installé et se trouve dans la catégorie **DHT11/DHT22**.
Pour lire la température et l'humidité de l'air, il faut utiliser la **fonction** ``||DHT11/DHT22:Query DHT11||``.

Poser ce block dans la fonction LectureCapteurs, et configurez comme le montre l'exemple ci-dessous :

```blocks
function LectureCapteurs () {
    basic.showIcon(IconNames.SmallDiamond)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
}
```


À la suite de ce block, créez deux variables ``||Variables:Créer une variable...||`` :
- ``||Variables:mesure_temp||``
- ``||Variables:mesure_hum||``

## @showhint

```blocks
function LectureCapteurs () {
    basic.showIcon(IconNames.SmallDiamond)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    mesure_temp = dht11_dht22.readData(dataType.temperature)
    mesure_hum = dht11_dht22.readData(dataType.humidity)
}
function EnvoieDonnees () {
    basic.showIcon(IconNames.SmallSquare)
    serial.writeValue("humidite", mesure_hum)
    radio.sendValue("humidite", mesure_hum)
    serial.writeValue("temperature", mesure_temp)
    radio.sendValue("temperature", mesure_temp)
}
let mesure_hum = 0
let mesure_temp = 0
radio.setGroup(10)
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    LectureCapteurs()
    EnvoieDonnees()
})
```

### Récolte et analyse des données @fullscreen
Récoltez les données et n'oubliez pas de faitre une sauvegarde de **TOUTES** vos données sous format csv dans votre répertoire de travail.

💡
Placer le capteur dans vos mains ou souffler sur le capteur pour faire varier les valeurs mesurées.

## Situation 3 @fullscreen

Dans l'exemple suivant, nous allons allumer ou éteindre une led lorsqu'on appuie sur le bouton A,
et changer sa couleur lorsqu'on appuie sur le bouton B.

Utilisez le schéma de câblage ci-dessous pour savoir comment la led est connectée aux ports P0, P1 et P2 sont connectés au MicroBit.

![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive38.png?raw=true)

💡
- La couleur des fils (Rouge, Vert et Bleu) correspond aux couleurs de la led. (RVB / RGB Red,Green,Blue)
- Pour traiter les événements (appuie sur boutons) utilisez les blocks suivants :

```blocks
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
```

⚠️

- Dans cet exemple, chaque valeur de couleurs est représentée de manière numérique (soit 0, soit 1)
  Exemples : 
  - Pour allumer la led en rouge, il faut que P0 soit à 1, P1 à 0, P2 à 0.
  - Pour allumer la led en verte, il faut que P0 soit à 0, P1 à 1, P2 à 0. 
  - Pour allumer la led en bleue, il faut que P0 soit à 0, P1 à 0, P2 à 1.

Créez une variable ``||Variables:Créer une variable...||`` ``||Variables:couleur_led||``

## showhint


### Autre version du programme @fullscreen

Complétez le programme suivant qui utilise trois boucles imbriquées pour faire varier la couleur de la led.

```blocks
basic.forever(function () {
    for (let Rouge = 0; Rouge <= 1023; Rouge++) {
        for (let Vert = 0; Vert <= 1023; Vert++) {
            for (let Bleu = 0; Bleu <= 1023; Bleu++) {

            }
        }
    }
})
```

💡

- Utilisez les ports P0,P1 et P3 en analogiqueen utlisant le block ``||Broches:écrire broche analogique||``.
  De cette manière vous ferez varier l'intensité lumineuse de 0 à 1023 (0=éteint et 1023=intensité maximale),
  au lieu de éteint/allumé (0 ou 1)

## @showhint

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

## Rédiger votre rapport d'atelier @fullscreen

Pour chaque sitation :

- 1. Expliquez les problèmes que vous avez rencontrés et les solutions que vous avez trouvées.
- 2. Synthétiser et expliquer les données récoltées.
- 3. Répondez à **TOUTES** les questions de manière précise (mise en lien avec la théorie).

![Questionnaire](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive39.png?raw=true)

# GUIDE DE DÉPANNAGE - (TROUBLESHOOTING) @showdialog

Ce petit guide est destiné à vous aider à résoudre la majorité de vos problèmes.

## Étape 1/4 - Vérifier les connexions

Vérifiez consciencieusement les connexions selon le schéma de câblage.

💡
Par moment, il est préférable de tout débrancher et tout rebranché en respectant précisément le **schéma de câblage.**

## Étape 2/4 - Vérifier la connexion Micro:Bit dans le bouclier

Assurez-vous que le Micro:Bit soit inséré correctement (et **dans le bon sens**) dans le bouclier. (shield)
Contrôlez que le **câble Micro-USB** soit correctement branché.

⚠️

- Si le câble est mal branché, le transfert du programme **ET** la récolte de données ne pourront pas fonctionner, car la liaison entre le Micro:Bit et le PC ne sera pas établie.

## Étape 3/4 - Vérifier la programmation des ports d'entrées-sorties

Les données sont soient :

1. Récoltées en **entrée** depuis un **capteur**. (**Input**)
2. Envoyées en **sortie** sur un **actuateur**. (**output**).

> Le Micro:Bit dispose de 3 ports standards (**P0**, **P1**, **P2**) qui sont prévus pour **récolter** ou **envoyer** des données.
> **Il est nécessaire** d'indiquer pour chaque ports si ils sont utilisés en **entrée** (**capteur**, ex. capteur de température) ou en **sortie** (**actuateur**, ex. led)

💡

- On lit depuis un capteur
- On écrit vers un actuateur

Il est également important de savoir si les données sont :

- **analogiques** (compris entre 0-1023) ou
- **numériques** (Soit 0 ou soit 1)

## Étape 4/4 - Vérifier la temporalité

> Lorsque le Micro:Bit envoie ou reçoit des données, il peut le faire de manière beaucoup trop rapide pour le capteur ou l'actuateur,
> raison pour laquelle il faut insérer une pause ``||basic:pause (ms)||`` dans la boucle qui effectue les mesures.

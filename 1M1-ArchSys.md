# 1M - Projet Micro-serre d'intérieure automatisée - Architecture des systèmes informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Harmonia_v4.jpg?raw=true)

![Atelier 1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive3.png?raw=true)
![logo CC](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/cc.png?raw=true)
Ce tutoriel est mis à disposition, sauf exception, selon les termes de la Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International.

## @showdialog

![INFORMATIONS IMPORTANTES](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive34.png?raw=true)



![Manipulations et activités de l'atelier #1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive35.png?raw=true)


### Récolter des données du Micro:MicroBit via le port série USB

Pour récolter des données sur le PC, il faut que le programme du MicroBit envoit des informations. 
Dans l'exemple suivant, la **température** et la **luminosité** sont envoyées chaque seconde
sur le port série (**USB**) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.

**Remarques**

- La **température** et la **luminosité** proviennent de deux **variables prédéfinies** dans le Micro:Bit et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants du Micro:Bit (Sonde de température du CPU, matrice de leds)

### Programmation du Micro:Bit

Pour transmettre ces données via le port série **USB** , il faut utiliser la **fonction** ``||Communication Série:série écrire valeur||`` qui se trouve dans la catégorie **Communication Série** 
et la déposer dans la boucle toujours ``||basic:toujours||``, ce qui va définir le nom et la valeur mesurée. 

**ASTUCE**

La variable prédéfinie pour la température ``||Entrée:température (° C)||``
et celle pour la luminosité ``||Entrée:niveau d'intensité lumineuse||`` se trouvent dans la catégorie **Entrée**.

À la fin de la boucle nous insérons une pause ``||basic:pause (ms)||`` d'une 1 seconde avant de recommencer la boucle.

```blocks
basic.forever(function () {
    serial.writeValue("temperature", input.temperature())
    serial.writeValue("luminosite", input.lightLevel())
    basic.pause(1000)
})
``` 

### Téléchargement du programme et visualisation des données

- Il est important de télécharger le programme sur le MicroBit à chaque **modification**.

**Remarque**
- Lors du premier téléchargement, "Makecode" demande de d'apairer le Micro:Bit si cela n'a jamais été fait auparavant.
- Lorsque le téléchargement est terminé, un nouveau bouton "**Afficher données Appareil**" doit apparaître sur la partie gauche de l'écran.

![Téléchargement-visualisation-sauvegarde](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1-Transfert-Visualisation-Sauvegarde.gif?raw=true)

**Astuces** :
Touchez le CPU pour faire varier la température, et éclairez avec votre smartphone la matrice de led du Micro:Bit.

**IMPORTANT** : 
- Sauvegardez **toutes vos** données récoltées à chaque fois que vous faites des essais, ceci vous aidera à mieux comprendre ce qui se passe et apporter des corrections si besoin.
- N'oubliez pas de sauvegarder votre programme à chaque étape.

### Interprêtation et analyse des données

**Astuces** :
Vous pouvez utiliser une application de traitement de données tel que Excel, Numbers ou Google Sheet pour visualiser et/ou traiter vos données de manière plus appronfondies.

**IMPORTANT** : 
Il est **nécessaire** de valider les données récoltées, et supprimer celles qui sont inutiles ou incorrectes.
=> Cela évite de perdre du temps lorsqu'on va analyser les données par la suite.

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

**IMPORTANT** :
N'oubliez pas de sauvegarder **TOUS** vos programmes dans le répertoire de travail.

## @showhint

```blocks
basic.forever(function () {
    serial.writeValue("D Out", pins.digitalReadPin(DigitalPin.P0))
    serial.writeValue("A Out", pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
})
```
## Autre version du programme @showdialog
Reprenons notre programme pour créer deux **fonctions** : ``||Fonctions:Créer une fonction...||`` dans la catégorie **Avancé** / **Fonctions**.

LectureCapteurs : Qui va lire et stocker les valeurs mesurées dans des variables.

```blocks
function LectureCapteurs () {
}
```

EnvoieDonnees : Qui va envoyer le contenu de ces 2 variables sur le PC via le port série **USB**.

```blocks
function EnvoieDonnees () {
}
```

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

### Récolte et analyse des données
Récoltez les données et n'oubliez pas de faitre une sauvegarde de **TOUTES** vos données sous format csv dans votre répertoire de travail.

**ASTUCE** :
Utilisez vos doigts pour toucher la partie métalique du capteur pour faire varier la valeur mesurée.

![Récolte de données](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/2-Mesures.gif?raw=true)

**QUESTION / ANALYSE**
1. Quelles sont les valeurs minimum et maximum mesurées ?
2. A quoi correspond la valeur minimum ? (humide ou sec)
3. À quoi correspond la valeur maximum ? (humide ou sec)

## Situation 2 @showdialog
Dans l'exemple suivant nous allons mesurer la température 
et l'humidité de l'air pour l'envoyer au PC via le port série **USB**.

Nous reprendrons l'utilisation des 2 fonctions l'exercice précédent, nous allons créer deux fonctions :
- LectureCapteurs : Lit et stocke la température et l'humidité de l'air dans 2 variables.
- EnvoieDonnees : Envoit le contenu de ces 2 variables au PC via le port série **USB**.

### Mesure de la température et de l'humidité de l'air

![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive37.png?raw=true)

### Programmation du MicroBit
Pour lire le capteur **DHT11**, il est nécessaire d'utiliser une extension.
Cette dernière à déjà été installé et se trouve dans la catégorie **DHT11/DHT22**.
Pour lire la température de l'air, il faut utiliser la **fonction** ``||DHT11/DHT22:Query DHT11||``
et pour lire l'humidité de l'air, il faut utiliser la **fonction**

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

## @showhint

## Récolte et analyse des données
Récoltez les données et n'oubliez pas de faitre une sauvegarde de **TOUTES** vos données sous format csv dans votre répertoire de travail.

**ASTUCE** :
Placer le capteur dans vos mains ou souffler sur le capteur pour faire varier les valeurs mesurées.

## Situation 3 @showdialog
Dans l'exemple suivant, nous allons allumer ou éteindre une led lorsqu'on appuie sur le bouton A,
et changer sa couleur lorsqu'on appuie sur le bouton B.

Utilisez le schéma de câblage ci-dessous pour savoir comment la led est connectée aux ports P0, P1 et P2 sont connectés au MicroBit.

![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive38.png?raw=true)

**ASTUCE** :
- La couleur des fils (Rouge, Vert et Bleu) correspond aux couleurs de la led. (RVB / RGB Red,Green,Blue)

**IMPORTANT** :
- Dans cet exemple, chaque valeur de couleurs est numérique (soit 0, soit 1)
    Exemple : pour allumer la led en rouge => P0=1, P1=0, P2=0

### Autre version du programme
Créez un autre programme qui utilise trois boucles imbriquées pour faire varier la couleur de la led.

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

## Rédiger votre rapport d'atelier @showdialog
Pour chaque sitation :
- 1. Expliquez les problèmes que vous avez rencontrés et les solutions que vous avez trouvées.
- 2. Synthétiser et expliquer les données récoltées.
- 3. Répondez à **TOUTES** les questions de manière précise (mise en lien avec la théorie).

![Questionnaire](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive39.png?raw=true)


# GUIDE DE DÉPANNAGE - (TROUBLESHOOTING) @showdialog
Ce petit guide est destiné à vous aider à résoudre la majorité de vos problèmes.

### Étape 1/4 - Vérifier les connexions

Vérifiez consciencieusement les connexions selon le schéma de câblage.

**ASTUCE** :
Par moment, il est préférable de tout débrancher et tout rebranché en respectant précisément le **schéma de câblage.**

### Étape 2/4 - Vérifier la connexion Micro:Bit dans le bouclier

Assurez-vous que le Micro:Bit soit inséré correctement (et **dans le bon sens**) dans le bouclier. (shield)
Contrôlez que le **câble Micro-USB** soit correctement branché.

**IMPORTANT** :
- Si le câble est mal branché, le transfert du programme **ET** la récolte de données ne pourront pas fonctionner, car la liaison entre le Micro:Bit et le PC ne sera pas établie.

### Étape 3/4 - Vérifier la programmation des ports d'entrées-sorties

Les données sont soient :
1. Récoltées en **entrée** depuis un **capteur**. (**Input**)
2. Envoyées en **sortie** sur un **actuateur**. (**output**).

> Le Micro:Bit dispose de 3 ports standards (**P0**, **P1**, **P2**) qui sont prévus pour **récolter** ou **envoyer** des données. 
**Il est nécessaire** d'indiquer pour chaque ports si ils sont utilisés en **entrée** (**capteur**, ex. capteur de température) ou en **sortie** (**actuateur**, ex. led) 

**ASTUCES**
- On lit depuis un capteur
- On écrit vers un actuateur

Il est également important de savoir si les données sont :
- **analogiques** (compris entre 0-1023) ou
- **numériques** (Soit 0 ou soit 1)

### Étape 4/4 - Vérifier la temporalité

> Lorsque le Micro:Bit envoie ou reçoit des données, il peut le faire de manière beaucoup trop rapide pour le capteur ou l'actuateur, 
raison pour laquelle il faut insérer une pause ``||basic:pause (ms)||`` dans la boucle qui effectue les mesures.
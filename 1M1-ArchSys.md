# 1M - Projet Micro-serre d'intérieure automatisée - Architecture des systèmes informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Harmonia_v4.jpg?raw=true)

![Atelier 1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive3.png?raw=true)
![logo CC](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/cc.png?raw=true)
Ce tutoriel est mis à disposition, sauf exception, selon les termes de la Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International.

## @showdialog

![INFORMATIONS IMPORTANTES](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive34.png?raw=true)

## @showdialog

![Manipulations et activités de l'atelier #1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive35.png?raw=true)

## @showdialog

## Récolter des données du Micro:MicroBit via le port série USB @showhint

Pour récolter des données sur le PC, il faut que le programme du MicroBit envoit des informations. 
Dans l'exemple suivant, la **température** et la **luminosité** sont envoyées chaque seconde
sur le port série (**USB**) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.

**Remarques**

- La **température** et la **luminosité** proviennent de deux **variables prédéfinies** dans le Micro:Bit et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants du Micro:Bit (Sonde de température du CPU, matrice de leds)

### Programmation du Micro:Bit @showhint

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

## @showdialog

## Téléchargement du programme et visualisation des données

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

## @showdialog

## Interprêtation et analyse des données

**Astuces** :
Vous pouvez utiliser une application de traitement de données tel que Excel, Numbers ou Google Sheet pour visualiser et/ou traiter vos données de manière plus appronfondies.

**IMPORTANT** : 
Il est **nécessaire** de valider les données récoltées, et supprimer celles qui sont inutiles ou incorrectes.
=> Cela évite de perdre du temps lorsqu'on va analyser les données par la suite.

## Situation 1 
Dans l'exemple suivant nous allons utliser un capteur pour mesurer l'humidité du sol, 
et envoyer la valeur mesurée sur le PC via le port série **USB**.

### Mesure de l'humidité du sol
Le shéma de câblage ci-dessous montre la façon dont le capteur est connecté aux ports P0 et P1 du MicroBit.

![Branchement du capteur d'humidité (sol) - M5STACK EARTH](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive36.png?raw=true)

### Programmation du Micro:Bit

Le programme lit les données du capteur :
- D Out : Digital Out -> Valeur numérique (0 ou 1)
- A Out : Analogic Out - > Valeur analogique (0-1023)

Le programme lit la valeur numérique du capteur à l'aide de la **fonction** ``||Broches:lire la broche numérique P0||`` et
la valeur analogique à l'aide de la **fonction** ``||Broches:lire la broche analogique P1||``  dans la catégorie **Broches** 
et l'envoit sur le port série **USB** à l'aide de la **fonction** ``||Communication Série:série écrire valeur||`` dans la catégorie **Communication Série**.

## @showhint

```blocks
basic.forever(function () {
    serial.writeValue("D Out", pins.digitalReadPin(DigitalPin.P0))
    serial.writeValue("A Out", pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
})
```

### Récolte des données @showdialog

**ASTUCE** :
Utilisez vos doigts pour toucher la partie métalique du capteur pour faire varier la valeur mesurée.

![Récolte de données](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/2-Mesures.gif?raw=true)

## Situation 2 @showdialog
Dans l'exemple suivant nous allons mesurer la température 
et l'humidité de l'air pour l'envoyer au PC via le port série **USB**.

### Mesure de la température et de l'humidité de l'air @showdialog

![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive37.png?raw=true)

## Situation 3 @showdialog

Réalisez un programme qui change la couleur de la led à chaque fois que l'on appuie sur le bouton A.

### Éclairage avec une Led RGB @showdialog

Utilisez le schéma de câblage pour savoir comment les ports P0, P1 et P2 sont connectés au MicroBit.

**ASTUCE** :
- Correspond aux couleurs des fils Rouge, Vert et Bleu. (RVB / RGB Red,Green,Blue)

![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive38.png?raw=true)

```blocks @showhints
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


## @showdialog

## Rédiger votre rapport d'atelier :

1. Expliquez les problèmes que vous avez rencontrés et les solutions que vous avez trouvées.
2. Synthétiser et expliquer les données récoltées.
3. Répondez aux questions ci-dessous.
![Questionnaire](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/1M1-ArchSys/Diapositive39.png?raw=true)


## @showdialog

# GUIDE DE DÉPANNAGE - (TROUBLESHOOTING)
Ce petit guide est destiné à vous aider à résoudre la majorité de vos problèmes.

## Étape 1/4 - Vérifier les connexions

Vérifiez méticuleusement les connexions selon le schéma de câblage.

**Conseils**
Par moment, il est préférable de tout débrancher et tout rebranché en respectant précisément le **schéma de câblage.**

## Étape 2/4 - Vérifier la connexion Micro:Bit dans le bouclier

Assurez-vous que le Micro:Bit soit inséré correctement (et **dans le bon sens**) dans le bouclier. (shield)
Contrôlez que le **câble Micro-USB** soit correctement branché.

- Si le câble est mal branché, le transfert du programme **ET** la récolte de données ne pourront pas fonctionner, car la liaison entre le Micro:Bit et le PC ne sera pas établie.

## Étape 3/4 - Vérifier la programmation des ports d'entrées-sorties

Les données sont soient :
1. Récoltées en **entrée** depuis un **capteur**. (**Input**)
2. Envoyées en **sortie** sur un **actuateur**. (**output**).

> Le Micro:Bit dispose de 3 ports standards (**P0**, **P1**, **P2**) qui sont prévus pour **récolter** ou **envoyer** des données. 
**Il est nécessaire** d'indiquer pour chaque ports si ils sont utilisés en **entrée** (**capteur**, ex. capteur de température) ou en **sortie** (**actuateur**, ex. led) 

**ASTUCES**
- On lit depuis un capteur
- On écrit vers un actuateur

Il est également important de savcoir si les données sont **analogiques** (compris entre 0-1023) ou **numériques**. (0 ou 1)

## Étape 4/4 - Vérifier la temporalité

> Lorsque le Micro:Bit envoie ou reçoit des données, il peut le faire de manière beaucoup trop rapide pour le capteur ou l'actuateur, 
raison pour laquelle il faut insérer une pause ``||basic:pause(temps)||`` dans la boucle qui effectue la mesure.
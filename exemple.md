# afficher-mot

## @showdialog

![LogoHarmonia](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Harmonia_v4.jpg)
  
## @showdialog

Faire défiler un mot sur le Micro:bit

![Afficher-un-mot](https://github.com/recitmstmam/mes-tutoriels/blob/master/images/recitmst.gif?raw=true)

## Étape 1/2

Tu dois faire défiller le mot de ton choix sur ton Micro:bit. Pour se faire, tu dois placer le bloc`` || basic: afficher texte "Hello" || `` dans l'événement ``||basic:toujours||``.  Par la suite, remplace le mot "Hello" par le mot de ton choix.

```blocks
basic.forever(function () {
    basic.showString("Hello")
})
```

## Étape 2/2

Pour éviter que le texte s'affiche à nouveau trop rapidement, tu peux ajouter ``||basic:une pause||`` de 1 seconde.

```blocks
basic.pause(100)
```

## @showdialog

FÉLICITATIONS!  Tu peux maintenant faire défiler tout le texte que tu désires sur ton Micro:bit.

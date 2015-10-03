# LMAO Gradient

Gradient Text for Zombie Browsers, Zombie Clients. Zombie Apocalypse !!!
Works for all browser, hopefully.

### Quick Start
Put the script at the bottom of your markup right after jQuery:

```
<script src="jquery.min.js"></script>
<script src="owlcarousel/owl.carousel.min.js"></script>
```
Wrap your item (```div```,```a```, ```li``` etc.) except ```span```  

```
    $('#foo').lmaoGradient();
```

### Options
```
    $('#foo').lmaoGradient({
        spaceIncluded : true,
        join : false,
        joinElement : 'a',
        gradientColor : [
            [166, 181, 210],
            [207, 0, 59],
            [212, 130, 35],
            [201, 197, 61],
            [100, 188, 185],
            [166, 181, 210]
        ]
    });
```

### LICENSE

The project is licensed under the [MIT License](LICENSE).
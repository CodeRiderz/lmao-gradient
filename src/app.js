var LmaoGradient = {
    init : ($element, opt) => {
        let gradientColor = opt.gradientColor;
        let arrText = $element.text().trim().split('');
        let newTextArr = [];

        if(opt.join) {
            arrText = $element.find(opt.joinElement).text().trim().split('');
        }

        let divider = Math.round(arrText.length/gradientColor.length);
        let dividerStart = 0;
        let gradientColorIndex = 0;

        //loop for every word in the text
        arrText.forEach(function (val, index) {

            if (val == ' ' && !opt.spaceIncluded) {
                newTextArr.push(' ');
            } else {
                if (index > (dividerStart + divider)) {
                    dividerStart += divider;
                    gradientColorIndex++;
                }

                if (index >= dividerStart && index <= dividerStart + divider) {

                    if (gradientColorIndex == gradientColor.length - 1) {
                        newTextArr.push('<span style="color:rgb(' +
                            gradientColor[gradientColorIndex][0] + ',' +
                            gradientColor[gradientColorIndex][1] + ',' +
                            gradientColor[gradientColorIndex][2]
                            + ');">' + val + '</span>');
                        return;
                    }

                    var colorGoTo = gradientColor[gradientColorIndex + 1];

                    // find the RGB in each word
                    var color = [
                        gradientColor[gradientColorIndex][0] + ((colorGoTo[0] - gradientColor[gradientColorIndex][0]) / divider * (index - dividerStart)),
                        gradientColor[gradientColorIndex][1] + ((colorGoTo[1] - gradientColor[gradientColorIndex][1]) / divider * (index - dividerStart)),
                        gradientColor[gradientColorIndex][2] + ((colorGoTo[2] - gradientColor[gradientColorIndex][2]) / divider * (index - dividerStart)),
                    ];

                    newTextArr.push('<span style="color:rgb(' +
                        Math.round(color[0]) + ',' +
                        Math.round(color[1]) + ',' +
                        Math.round(color[2])
                        + ');">' + val + '</span>');
                }
            }
        });

        if(!opt.join) {
            $element.html(newTextArr.join(""));
        } else {
            var lastNode = 0;
            console.log(newTextArr);
            $element.find(opt.joinElement).each(function(){
                var $this = $(this);
                var text = $this.text();
                var newText = '';
                var x = lastNode;
                var top = text.length+lastNode;
                for(x; x < top; x++) {
                    newText+=newTextArr[x];
                    lastNode++;
                }
                $this.html(newText);
            });
        }
    }
};

jQuery.fn.extend({
   lmaoGradient : function (opt) {
       let option = $.extend({},{
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
       },opt);
       LmaoGradient.init(this, option);
   }
});

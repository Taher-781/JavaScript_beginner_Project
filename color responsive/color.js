var index = 0;



function changeColors(){
    var colors =["red","green","yello","blue"];
    document.getElementsByTagName("body")[0].
    style.background = colors[index++]

    if(index > colors.length){
        index=0;
    }
}
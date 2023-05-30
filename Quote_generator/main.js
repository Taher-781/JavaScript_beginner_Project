function generate(){
    var quotes = {
        
        "― Alysha Speer" : '"You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity."',
        
        "― Aaron Lauritsen" : '"The struggles we endure today will be the good old days we laugh about tomorrow."',
        
        "― Jamie Ford" : '"The library is like a candy store where everything is free."'
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML= author ;
}
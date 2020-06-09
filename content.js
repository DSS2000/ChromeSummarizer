
//alert("Begin")
const head = document.links
//alert(head[15].href)
var links = [];
let paragraphs = document.getElementsByTagName('h3');
let par = document.getElementsByClassName('s');
var j = 0;
for (i = 0; i < head.length; i++) {
    var x = head[i].href;
    if (!x.includes("google") && head[i].getElementsByTagName('h3').length != 0) {
        var url = "https://textance.herokuapp.com/title/" + x;
        //console.log(head[i]);
        //console.log(head[i].getElementsByTagName('h3').length);
        //console.log(url);
        head[i].getElementsByTagName('h3').innerHTML = "Amodh";
        $.ajax({
          url: url,
          complete: function(data) {
            console.log(par[j]);
            par[j].innerHTML = data.responseText;
            j = j + 1;
          }
        });
    }
}
console.log(links[0]);
var y;

//alert("Hey")

//alert(x)
//console.log(links);

/*
var thePets = [
    {
        "name":"Cat1",
        "species":"cat",
        "favFood":"tuna"
    },
    {
        "name":"Dog1",
        "species":"dog",
        "favFood":"biscuit"
    }
];

thePets[1].species;

*/

var pageCounter = 1;

var animalContainer = document.getElementById("results");

var btn = document.getElementById("btn");

btn.addEventListener("click",function(){

var ourRequest = new XMLHttpRequest();

ourRequest.open("GET","https://learnwebcode.github.io/json-example/animals-"+pageCounter+".json");

ourRequest.onload = function(){
var ourData = JSON.parse(ourRequest.responseText);

renderHtml(ourData);

};
ourRequest.send();
pageCounter++;
if(pageCounter>3){
    btn.classList.add("hide-me");
}
});


function renderHtml(data){
var htmlString = "";

for(i=0; i<data.length; i++){
    htmlString += "<p>"+data[i].name + " is a "+data[i].species + "</p>"
}

animalContainer.insertAdjacentHTML('beforeend',htmlString);


}






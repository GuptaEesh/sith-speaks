var Input = document.querySelector("#txt-input");
var press = document.querySelector("#btn");
var Output = document.querySelector("#txt-output");

var mainURL = "	https://api.funtranslations.com/translate/sith.json";

function translateFull(input) {
    return mainURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Server is not responding, pls try again!");
}

function clickHandler() {
    var inputText = Input.value;
    if(inputText.length==0)alert("Enter the text if you want me to spare your life😡");
    else{
    fetch(translateFull(inputText)).then(response => response.json()).then(json => {
        var transforM=json.contents.translated;Output.innerText = transforM;
    }).catch(errorHandler);
    }
};
press.addEventListener("click", clickHandler);
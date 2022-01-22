var puppyWords = ["puppy", "puppies", "walkies", "dog", "good", "girl", "walk", "food", "feed", "leash", "bite", "little", "sit", "heel", "drop"];
var puppyFullWords = ["no", "yes", "vet", "pup", "pups", "pet", "pets", "petting"];
function woof() {
    var inputSection = document.getElementById('input');
    var outputSection = document.getElementById('output');
    var outputPara = document.getElementById('outputP');
    var inputElement = document.getElementById("textInput");
    var input = inputElement.value;
    console.log(input);
    input = input.split("\n").join(" <br/> ");
    console.log(input);
    inputSection.className = "hidden";
    outputSection.className = "";
    outputPara.innerHTML = splitAndSpan(input);
}
function splitAndSpan(str) {
    str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var words = str.split(" ");
    for (var i in words) {
        if (!puppyWord(words[i])) {
            words[i] = "<span class=\"fuzz\">".concat(words[i], "</span>");
        }
        else {
            words[i] = "<span>".concat(words[i], "</span>");
        }
    }
    return words.join(' ');
}
function puppyWord(word) {
    if (puppyFullWords.indexOf(word) != -1) {
        return true;
    }
    for (var _i = 0, puppyWords_1 = puppyWords; _i < puppyWords_1.length; _i++) {
        var pword = puppyWords_1[_i];
        if (word.indexOf(pword) != -1) {
            return true;
        }
    }
    return false;
}

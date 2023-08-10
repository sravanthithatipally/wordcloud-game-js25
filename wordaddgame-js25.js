let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let userinputele = document.getElementById("userInput");
let buttonele = document.getElementById("addBtn");
let errorele = document.getElementById("errorMsg");
let userwordscontainerele = document.getElementById("wordsContainer");

buttonele.onclick = function() {
    let userinputmatter = userinputele.value;
    if (userinputmatter === "") {
        errorele.textContent = "Please enter a word";
    } else {
        let word = document.createElement("span");
        let value = Math.ceil(Math.random() * 100);
        word.style.fontSize = value + "px";
        word.textContent = userinputmatter;
        userwordscontainerele.appendChild(word);
        userinputele.value = "";
    }
}
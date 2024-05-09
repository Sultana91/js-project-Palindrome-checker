const textInput=document.getElementById("text-input");
const checkButton=document.getElementById("check-btn");
const result=document.getElementById("result");
checkButton.addEventListener("click",() => {

    const lowerCaseReplace = textInput.value.toLowerCase().replace(/[^a-z0-9]/g,"") 



    if (textInput.value === ""){
        alert("Please input a value")
    } else if (textInput.value.length === 1) {
        result.innerText = textInput.value+ " is a palindrome"

    } 
    //(...textInput.value) will split the input into letters that user will enter and reverse() will reverse the letters and then join("") 
    //will join all the letters to make the word

    
    else if(lowerCaseReplace === [...lowerCaseReplace].reverse().join("")){
        result.innerText = textInput.value+ " is a palindrome" 
    } else{
        result.innerText = textInput.value+ " is not a palindrome" 
    }

});
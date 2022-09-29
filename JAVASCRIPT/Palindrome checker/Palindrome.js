var checkButton = document.getElementById("checkPalindrome");

function palindrome(str) {
    'use strict';
    var reg = /[\W_]/g;
    var aStr = str.toLowerCase().replace(reg, "");
    var palindro = aStr.split("").reverse().join("");
    
    if (palindro === aStr) return true;
    
    return false;
}
checkButton.addEventListener("click", function() {
    'use strict';
    var value = document.getElementById("inputPalindrome").value;
    var notification = document.getElementById("notification");

    if(palindrome(value)) {
        notification.innerHTML = "Yes! it is a palindrome";

    } else {
        notification.innerHTML = "No! it is not a palindrome";
        
    }
});

//add a function that can change the background of the div depnding on the result 
//make typing something required either via JS or simple html and css
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const symbolEl = document.getElementById("symbols");
const numberEl = document.getElementById("numbers");
const generate_btn = document.getElementById("generate");
const slider = document.getElementById("length");
const value = document.getElementById("value");
const copy_btn = document.getElementById("clipboard");
const result = document.getElementById("result");

const randomFunc = {
  Upper: randomUpper(),
  Lower: randomLower(),
  Number: randomLower(),
  Symbols: randomSymbol(),
};
// slider input
value.innerText = slider.value;
slider.oninput = function () {
  // console.log(slider.value)
  value.innerHTML = this.value;
};

generate_btn.addEventListener("click", () => {
  const length = slider.value;
  const hasUpper = upperCase.checked;
  const hasLower = lowerCase.checked;
  const hasNumber = numberEl.checked;
  const hasSymbols = symbolEl.checked;
   generatePassword(
    length,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbols
  );
  //    console.log(length)
});

function generatePassword(length, Upper, Lower, Number, Symbols) {
  const typesCount = Lower + Symbols + Upper + Number;
  // const typeArr=[Upper,Lower,Number,Symbols]
  const typeArr = [{ Lower }, { Upper }, { Number }, { Symbols }];
  // const arr = typeArr.filter(function (item) {
  //   if (Object.values(item) == true) {
  //     return true;
  //   }
  // });

  let generatedPassword = [];
  length = parseInt(length);
  // console.log(arr);
  if (typesCount === 0) {
    result.innerHTML=""
    return "";
  }
  for (let i = 0; i < length; i++) {
    if (Upper == true) {
      generatedPassword += randomUpper();
    }
    if (Lower == true) {
      generatedPassword += randomLower();
    }
    if (Symbols == true) {
      generatedPassword += randomSymbol();
    }
    if (Number == true) {
      generatedPassword += randomNumber();
    }
    
  }
 console.log("Generated Password:-"+generatedPassword)
 generatedPassword=shuffle(generatedPassword)
 finalPassword=generatedPassword.slice(0,length)
 result.innerHTML=finalPassword
 console.log("Final Password:-"+finalPassword)
}

function shuffle(generatedPassword ) {
  var arr = generatedPassword.split('');                       // Convert String to array
  var len = arr.length;                                     // Length of the array
  console.log(len)
  for(var i=0 ; i<len ; ++i) {
    var j = Math.floor(Math.random()*len);                   // Get random of [0, n-1]
    var temp = arr[i];                                         // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  genPassword = arr.join('');                           // Convert Array to string
  console.log("Shuffled Password:-"+genPassword)    
  return genPassword; 
}


function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}
function randomSymbol() {
  const symbols = "!@#$%^&*()_~`-=+{[}]:;?><.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

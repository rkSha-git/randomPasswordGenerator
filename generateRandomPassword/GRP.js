let inputEl = document.querySelector('input');
let copyBtn = document.getElementById('copy');
let generateBtn = document.querySelector('button');

let password = '';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let num = '1234567890';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let symbol = '!#$%^&*()_-+=?/>.<,|}[{]@~';
let pass = upperCase + num + lowerCase + symbol;

generateBtn.addEventListener('click', function(){
    for(let i = 0; i <= 13; i++){
        password += pass[Math.floor(Math.random() * pass.length)];
    }
    inputEl.value = password;
    password= '';
})

copyBtn.addEventListener('click', function(){
    inputEl.select();
    document.execCommand('copy');
})
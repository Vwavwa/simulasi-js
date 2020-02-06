/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

// PSEUDOCODE
/*
    READ AND SAVE number
    READ AND SAVE 'str' AS 'number' CONVERTED TO STRING
    READ AND SAVE newNumber EQUALS TO EMPTY STRING
    READ AND SAVE count EQUAL TO 0
    READ AND SAVE 'length' EQUAL TO LENGTH OF 'str' MINUS 1
    READ AND SAVE 'x' EQUAL TO 0
    LOOP UNTIL X MORE THAN OR EQUAL TO 0
        IF COUNT IS NOT EQUAL TO 3
            COUNT PLUS 1
            SET newStr EQUAL TO INDEX x OF str PLUS newStr
        END IF
        ELSE
            SET newStr EQUAL TO INDEX x OF str PLUS STRING '.' PLUS newStr
            SET count EQUAL TO 1
        END ELSE
        x EQUAL TO x MINUS 1
    END LOOP
    DISPLAY STRING 'Rp' PLUS 'newStr' PLUS STRING ',00'

*/
function formatUang(number) {
  //code here
  var str = number.toString()
  var newStr = ''
  var count = 0
  var length = str.length-1
  for(var x=length; x>=0; x--){
    var currentStr = str[x]
    if(count !== 3){
      count++
      newStr = str[x] + newStr
    }
    else{
      newStr = str[x] + '.' + newStr
      count = 1
    }
  }
  return 'Rp' + newStr + ',00'
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00

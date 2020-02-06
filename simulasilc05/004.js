/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
    var splitted = splitManual(words)
    var totalLength = 0
    var result = []
    for(var x=0; x<splitted.length; x++){
        totalLength += splitted[x].length
    }
    var avg = Math.round(totalLength / splitted.length)
    for(var x=0; x<splitted.length; x++){
        if(splitted[x].length === avg){
            result.push(splitted[x])
        }
    }
    return result
}

function splitManual(str){
    var result = []
    var temp = ''
    for(var x=0; x<str.length; x++){
        if(str[x] !== ' '){
            temp += str[x]
        }
        if(str[x] === ' ' || x === str.length - 1){
            result.push(temp)
            temp = ''
        }
    }
    return result
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []

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
    var arr = []
    var temp = ''
    for(var x=0; x<words.length; x++){
        if(words[x] !== ' ' && x !== words.length-1){
            temp += words[x]
        }
        else{
            arr.push(temp)
            temp = ''
        }
        if(x === words.length-1){
            temp += words[x]
            arr.push(temp)
            temp = ''
        }
    }
    var sum = 0
    for(var x=0; x<arr.length; x++){
        sum += arr[x].length
    }
    var avg = Math.ceil(sum / arr.length)
    var result = []
    for(var x=0; x<arr.length; x++){
        if(arr[x].length === avg){
            result.push(arr[x])
        }
    }
    return result
}

console.log(averageLengthWord('dd dddd dddddd dddddddd'));
console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []

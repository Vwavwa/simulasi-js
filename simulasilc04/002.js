/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

// PSEUDOCODE
/*
READ AND SAVE 'arr' EQUAL TO EMPTY ARRAY
READ AND SAVE TEMP EQUAL TO EMPTY STRING
READ AND SAVE X EQUAL TO 0
LOOP SENTENCE UNTIL X LESS THAN LENGTH OF SENTENCE
    IF INDEX X PLUS 1 OF SENTENCE NOT EQUAL TO ' ' AND INDEX X OF SENTENCE NOT EQUAL TO ' ' AND X NOT EQUAL TO LENGTH OF SENTENCE MINUS 1
        SET TEMP EQUAL TO TEMP PLUS INDEX X OF SENTENCE
    END IF
    ELSE IF INDEX X PLUS 1 OF SENTENCE EQUAL TO ' ' OR X EQUAL TO LENGTH OF SENTENCE MINUS 1
        SET TEMP EQUAL TO TEMP PLUS INDEX X OF SENTENCE
        INSERT TEMP INTO ARR
        SET TEMP EQUAL TO EMPTY ARRAY
    END ELSE
    X EQUAL TO X PLUS 1
END LOOP
READ AND SAVE RESULT EQUAL TO EMPTY STRING
READ AND SAVE X EQUAL TO 0
LOOP ARR UNTIL X IS LESS THAN OR EQUAL TO LENGTH OF ARR
    IF INDEX X OF ARR EQUAL TO WORDS
        READ AND SAVE TEMP EQUAL TO EMPTY STRING
        READ AND SAVE Y EQUAL TO 0
        LOOP INDEX X OF ARR UNTIL Y LESS THAN OR EQUAL TO LENGTH OF INDEX X OF ARR
            SET TEMP EQUAL TO TEMP PLUS *
        END LOOP
        SET INDEX X OF ARR EQUAL TO TEMP
    END IF
    SET RESULT EQUAL TO RESULT PLUS INDEX X OF ARR PLUS ' '
    SET X EQUAL TO X PLUS 1
END LOOP
DISPLAY RESULT

*/


function sensorSentence ( sentence, words ) {
    // Your code here
    var arr = []
    var temp = ''
    for(var x=0; x<sentence.length; x++){
        if(sentence[x+1] !== ' ' && sentence[x] !== ' ' && x !== sentence.length-1){
            temp += sentence[x]
        }
        else if (sentence[x+1] === ' ' || x === sentence.length - 1){
            temp += sentence [x]
            arr.push(temp)
            temp = ''
        }
    }
    var result = ''
    for(var x=0; x<arr.length; x++){
        if(arr[x] === words){
            var temp = ''
            for(var y = 0; y<arr[x].length; y++){
                temp += '*'
            }
            arr[x] = temp
        }
        result += arr[x] + ' '
    }
    return result
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''

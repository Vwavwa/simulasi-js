/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed(data) {
  // your code here
  if(!data || data === ''){
    return 'No data'
  }
  var arr = data.split(',')
  var arrSpd = []
  for(var x=0; x<arr.length; x++){
    var speed = ''
    for(var y=1; y<arr[x].length; y++){
      if(arr[x][y-1] === ':'){
        while(arr[x][y] !== ' '){
          speed += arr[x][y]
          y++
        }
        arrSpd.push(Number(speed))
      }
    }
  }
  var fastest = 0
  for(var x=0; x<arrSpd.length; x++){
    if(arrSpd[x] > fastest){
      fastest = arrSpd[x]
    }
  }
  return fastest
}

console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data

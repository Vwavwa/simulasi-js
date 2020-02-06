var arr = [1,2,3,4,5,6,7,8]
console.log('INI ARRAY ASLI -> ', arr)
console.log('ini di slice -> ', arr.slice(0,arr.length-1)) // 1
console.log('sisa slice -> ', arr)
console.log('ini di splice -> ', arr.splice(0,arr.length-1)) // 2345678
console.log('sisa splice -> ', arr)

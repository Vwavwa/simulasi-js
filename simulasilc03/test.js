function nextTargetArea(code) {
    // Code Hanya Disini!
    var obj = {
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      SIX: 6,
      SEVEN: 7,
      EIGHT: 8
    }
    var arrCode = code.split('')
    var keys = Object.keys(obj)
    for(var x=0; x<keys.length; x++){
        var str = ''
        for(var y=0; y<keys[x].length; y++){
            for(var z=0; z<arrCode.length; z++){
                if(keys[x][y] === arrCode[z]){
                    str += arrCode[z]
                    arrCode.splice(z,1)
                }
            }
        }
    }
    return str
  }
  
  console.log(nextTargetArea('WTO')); 
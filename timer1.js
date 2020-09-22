const args = process.argv.slice(2);
let newArg = args.map(n => n * 1000)

const beep = function() {

let filertedNum = newArg.filter(n => n > 0 ? n : delete n)
  for (let i = 0; i < filertedNum.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\x07`)
    }, filertedNum[i]);
  }

}

beep()


 

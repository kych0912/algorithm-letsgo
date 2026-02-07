let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))

const [a,b] = input.shift()
const [c,d] = input.shift();

let getLCM = (num1, num2) =>{
	let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}

let getGCD2 = (num1, num2) => {
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 
    return num1;
}

const lcm = getLCM(b,d)

const ans1 = a*(lcm/b)
const ans2 = c*(lcm/d)

const gcd = getGCD2(lcm,ans1+ans2)

console.log((ans1+ans2)/gcd +' '+lcm/gcd)

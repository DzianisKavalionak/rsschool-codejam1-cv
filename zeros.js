function zeros() {
	let number = +document.getElementById("number").value;
	let factorial_zeros = document.getElementById("factorial-zeros");
    let zeros = 0;
    for (let i = 5; number/i >= 1; i) {
        zeros += Math.floor(number/i);
        i = i * 5;}
	factorial_zeros.innerHTML = ('Ответ: ' + zeros);
 }
 
function advzeros() {
   let base = +document.getElementById("base2").value;
   let number = +document.getElementById("number2").value;
   let factorialn = document.getElementById("factorialn");
   let [simpleNum, arrs, result, preResult, si, zero] = [0, [], [], [],  base, {}];
   for (let n = 2; n <= base; n++ ){
       simpleNum = si % n;
       if(simpleNum === 0){
           arrs.push(n);
           si = si / n;
           n--;
       }
   }
   for (let n = 0; n < arrs.length; n++ ){
       let tempNumber = number;
       preResult[n] = 0;
       for (tempNumber; tempNumber > 0; tempNumber) {
           tempNumber = Math.floor(tempNumber / arrs[n]);
           preResult[n] += tempNumber;
       }
   }
   preResult.forEach(a => {
       (zero[a] !== undefined)? zero[a]++ : zero[a] = 1;
   });
   for(let key in zero){
       result.push(Math.floor(+key/zero[key]));
   }

   factorialn.innerHTML = (result[0]);
} 

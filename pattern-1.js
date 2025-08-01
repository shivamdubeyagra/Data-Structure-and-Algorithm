/*
const n = 6;
for(let i=1; i<=n; i++){
    let x ='';
    for(let j=1; j<=i; j++){
        x+=` ${i}`
    }
    console.log(x)
}
*/

// Pattern -5 
/*
const n = 6;
for(let i=0; i<n; i++){
    let x = '';
    for(let j=i; j<n; j++){
        x+='* ';
    }
    console.log(x);
}
*/

// pattern -6 
/*
const n = 6;
for(let i=1; i<=n; i++){
    let x='';
    for(let j=1; j<=n-i+1; j++){
        x+=`${j} `
    }
    console.log(x)
}
*/
/*
// pattern - 7
const N = 6;

for (let i = 1; i <= N; i++) {
  let spaces = ' '.repeat(N - i);
  let stars = '*'.repeat(2 * i - 1);
  console.log(spaces + stars);
}


// patten -8 -9
for (let i = N; i >= 1; i--) {
    let spaces = ' '.repeat(N - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}
*/

/*
// pattern - 10
const n =6;
for(let i=1; i<=n; i++){
    let start = '*'.repeat(i);
    console.log(start)
}
for(let i = n-1; i>=1; i--){
        let start = '*'.repeat(i);
    console.log(start)
}
// const n = 6;

// Top half
for(let i = 1; i <= n; i++) {
    let spaces = '.'.repeat(n - i);
    let stars = '*'.repeat(i);
    console.log(spaces + stars);
}

// Bottom half
for(let i = n - 1; i >= 1; i--) {
    let spaces = '.'.repeat(n - i);
    let stars = '*'.repeat(i);
    console.log(spaces + stars);
}
*/
/*
// pattern -11
const n =5;
for(let i=1; i<=n; i++){
    let x = '';
    let val = (i%2 === 0) ? 0:1;
    for(let j=1; j<=i; j++){
        x+=`${val} `;
        val=1-val;
    }
    console.log(x)
}
    */
// pattern - 12
/*
const n = 10;
let resutl ='';
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        resutl+=j;
    }
    resutl +=" ".repeat((n-i)*2);
    for(let j=i; j>=1; j--){
        resutl+=j;
    }
    resutl+='\n';
}
console.log(resutl)
*/
/*
const n = 30;
let result = '';

function getNumberWidth(num) {
    return num.toString().length;
}
function getHalfWidth(maxNum) {
    let width = 0;
    for (let i = 1; i <= maxNum; i++) {
        width += getNumberWidth(i);
    }
    return width;
}

const maxWidth = getHalfWidth(n) * 2; 

for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += j;
    }
    const currentHalfWidth = getHalfWidth(i);
    const currentTotalWidth = currentHalfWidth * 2;
    const spacesNeeded = maxWidth - currentTotalWidth;
    line += " ".repeat(spacesNeeded);
    for (let j = i; j >= 1; j--) {
        line += j;
    }
    result += line + '\n';
}

console.log(result);
*/

// pattern = 13
/*
let n=3;
let result = '';
let c = 1;
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        result+=`${c} `
        c++;
    }
    result+='\n'
}
console.log(result)
*/
// pattern -14
/*
let n = 5; // O(1)
let char = {}; // O(1)
let result = '' // O(N)
for(let i=1; i<=26; i++){ // O(26)
    char[i] = String.fromCharCode(64+i); // O(1)
}
// O(N2)
for(let i=1; i<=n; i++){ // O(N)
    for(let j=1; j<=i; j++){ // O(N)
        result+=`${char[i]} `; // O(1)
    }
    result+='\n';
}
console.log(result)
*/
// pattern -17
/*
const n = 6;
let resutl = '';
for (let i = 1; i <= n; i++) {
    resutl += ' '.repeat(n - i);
    for (let j = 0; j < i; j++) {
        resutl += String.fromCharCode(65 + j)
    }
    for (let j = i-2; j>=0; j--) {
        resutl += String.fromCharCode(65 + j)
    }
    resutl+='\n'
}
console.log(resutl)
*/
/*
pattern -18
const n =6;
let result='';
for(let i=n-1; i>=0; i--){
    for(let j=i; j<n; j++){
        result+=`${String.fromCharCode(65 + j)}`
    }   
    result+='\n'
}
console.log(result)
*/
// pattern - 19
/*
const n = 5;
let result='';
let sp= 0;
for(let i=0; i<n; i++){
    result+='*'.repeat(n-i);
    result+=' '.repeat(sp);
    result+='*'.repeat(n-i);
    sp+=2
    result+='\n'
}
sp=8;
for(let i=1; i<=n; i++){
    result+='*'.repeat(i);
    result+=' '.repeat(sp);
    result+='*'.repeat(i);
    sp-=2
    result+='\n'
}
console.log(result)
*/

//pattern - 20
/*
const n = 6;
let result='';
let sp= 2*n -2;
for(let i=1; i<=n; i++){
    result+='*'.repeat(i);
    result+=' '.repeat(sp);
    result+='*'.repeat(i);
    sp-=2
    result+='\n'
}
sp=2;
for(let i=1; i<n; i++){
    result+='*'.repeat(n-i);
    result+=' '.repeat(sp);
    result+='*'.repeat(n-i);
    sp+=2
    result+='\n'
}
console.log(result)
*/
// pattern - 21
/*
const n = 10;
let result='';
for(let i=0; i<n; i++){
    if(i==0 || i==n-1){
        result+='*'.repeat(n)
        result+='\n'
    }else{
        result+='*';
        result+=' '.repeat(n-2);
        result+='*';
        result+='\n';
    }
}
console.log(result)
*/

// patter - 22
function printPattern(N) {
    const size = 2 * N - 1; // For N=3 => size = 5
    for (let i = 0; i < size; i++) {
        let row = "";
        for (let j = 0; j < size; j++) {
            const minDist = Math.min(i, j, size - 1 - i, size - 1 - j);
            const value = N - minDist;
            row += value + " ";
        }
        console.log(row.trim());
    }
}
const n=3;
printPattern(n)

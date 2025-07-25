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

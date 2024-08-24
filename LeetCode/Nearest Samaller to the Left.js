const arr = [4,5,2,10,8];
const st = [];  // 2, 8
const re = []; // -1, 4, -1, 2, 2
for(let i=0; i<arr.length; i++){
    if(!st.length){
        re.push(-1)
    }else if(st[st.length-1]< arr[i]){
        re.push(st[st.length-1])
    }else{
        while(st.length > 0 && st[st.length-1] >=arr[i]){
            st.pop();
        }
        if(!st.length){
            re.push(-1)
        }else{
            re.push(st[st.length-1])
        }
    }
    st.push(arr[i])
}
console.log(re)
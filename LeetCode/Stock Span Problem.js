const arr =[100,80,60,70,60,75,85];
const st=[];
const ve=[];
for(let i=0; i<arr.length; i++){
    if(!st.length){
        ve.push(-1);
    }else if(st[st.length-1][0]>arr[i]){
        ve.push(st[st.length-1][1])
    }else{
        while(st.length > 0 && st[st.length-1][0] <=arr[i] ){
            st.pop()
        }
        if (!st.length) {
            ve.push(-1)
        } else {
            ve.push(st[st.length - 1][1])
        }
    }
    st.push([arr[i],i])
}
for(let i=0; i<ve.length; i++){
    ve[i] = i - ve[i]
}
console.log(ve)
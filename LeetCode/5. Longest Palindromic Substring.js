var longestPalindrome = function(s) {
    let maxLen = 0;
    let str = '';
    for(let i=0; i<s.length; i++){
        let sbStr = '';
        for(let j=i; j<s.length; j++){
            sbStr+=s[j];
            const pcheck = palindrome(sbStr)
            if(pcheck){
                if(maxLen < sbStr.length){
                    maxLen = sbStr.length;
                    str = sbStr;
                }
            }
        }
    }
    return str;
};
function palindrome(str){
    let i=0;
    let j=str.length-1;
    while(i<=j){
        if(str[i] !== str[j]) return false;
        i++;
        j--;
    }
    return true;
}
console.log(longestPalindrome('babad'))
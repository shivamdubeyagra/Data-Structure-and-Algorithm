var beautySum = function(s) {
    let n= s.length;
    let total = 0;
    for(let i=0; i<n; i++){
        let feq = Array(26).fill(0);
        
        for(let j=i; j<n; j++){
            feq[s.charCodeAt(j)-97]++;
            let maxFreq = 0;
            let minFreq = Infinity;

            for(let k=0; k<26; k++){
                if(feq[k]>0){
                    maxFreq = Math.max(maxFreq,feq[k]);
                    minFreq = Math.min(minFreq,feq[k]);
                }
            }
            total += maxFreq - minFreq;
        }
    }
    return total;
};
console.log(beautySum("aabcb"))

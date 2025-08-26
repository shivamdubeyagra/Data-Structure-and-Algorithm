
// 121. Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxPro = 0;
    for(const price of prices){
        if(price < minPrice) minPrice = price;
        const profit = price - minPrice;
        if(profit > maxPro) maxPro = profit;
    }
    return maxPro;
};
const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));
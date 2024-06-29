function maxProfit(prices){
    if (prices.length === 0) return 0; // Handle edge case of empty array
    
    let minPrice = prices[0];
    let maxProfit = 0;

for(let i=0;i<prices.length;i++){
    if(prices[i]<minPrice){
        minPrice = prices[i]
    }
    const profit = prices[i] - minPrice;
    
    if(profit<= maxProfit){
        maxProfit = profit;
    }
}

    return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5

const prices2 = [7, 6, 4, 3, 1,2];
console.log(maxProfit(prices2)); // Output: 0

function averageWaitingTime(customers){
    let currentTime = 0;
    let totalWaitingTime = 0;
    for(let [arrival, time] of customers){
        if(currentTime< arrival){
            currentTime = arrival
        }
        currentTime += time
        const WaitingTime = currentTime - arrival
        totalWaitingTime += WaitingTime
    }
    return totalWaitingTime/customers.length
    
};
console.log(averageWaitingTime([[1, 2], [2, 5], [4, 3]]))
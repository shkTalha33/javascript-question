const convertCoins = (money, coins = [100,50,20,10,5,2,1]) => {
    const reqCoins = []
    for (let i = 0; i < coins.length; i++) {
        let breakCoin = Math.floor( money / coins[i] )
        for (let j = 0; j < breakCoin; j++) {
            reqCoins.push(coins[i])
            
        }
        money -= coins[i] * breakCoin
        
    }

    return reqCoins
}

console.log(convertCoins(186));
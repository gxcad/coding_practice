function checkCashRegister(price, cash, cid) {
  let changeNeeded = (cash - price) * 100;
  let cidSum = cid.reduce((total, current) => total + current[1], 0) * 100;
  let result = {
    status: 'INSUFFICIENT_FUNDS',
    change: []
  };
  if (cidSum == changeNeeded) return {status: 'CLOSED', change: cid};

  for (let i = cid.length - 1; i >= 0; i--) {
    let currencies = {PENNY: 1, NICKEL: 5, DIME: 10, QUARTER: 25, ONE: 100, FIVE: 500, TEN: 1000, TWENTY: 2000, 'ONE HUNDRED': 10000};
    let currentArr = cid[i];
    let currentDenomination = currencies[currentArr[0]];

    if (changeNeeded >= currentDenomination) {
      if (changeNeeded <= currentArr[1] * 100) {
        let contribution = (Math.floor(changeNeeded / currentDenomination) * currentDenomination);
        result.change.push([currentArr[0], contribution / 100]);
        changeNeeded -= contribution;
      } else {
        result.change.push([currentArr[0], (currentArr[1])]);
        changeNeeded -= Math.round(currentArr[1] * 100);
      }
    }
  }
  if (changeNeeded == 0) result.status = 'OPEN';
  if (result.status == 'INSUFFICIENT_FUNDS') result.change = [];
  return result;
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

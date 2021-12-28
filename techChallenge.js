const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      }
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      }
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      }
    },
    {
        monthNumber: 3, // three months month
        account: {
          balance: { amount: 300 },
        }
    },
    {
    monthNumber: 4, // four months month
    account: {
        balance: { amount: 400 },
        }
    },
    {
    monthNumber: 5, // five months ago
    account: {
        balance: { amount: 500 },
        }
    },
    {
    monthNumber: 6, // six months ago
    account: {
        balance: { amount: 600 },
        }   
    },
    {
    monthNumber: 7, // seven months ago
    account: {
        balance: { amount: 700 },
        }
    },
    {
    monthNumber: 8, // eight months ago
    account: {
        balance: { amount: 00 },
        }
    },
    {
    monthNumber: 9, // nine months ago
    account: {
        balance: { amount: 900 },
        }
    },
    {
    monthNumber: 10, // ten months ago
    account: {
        balance: { amount: 1000 },
        }
    },
    {
    monthNumber: 11, // eleven months ago
    account: {
        balance: { amount: 1100 },
        }
    }
  ]
  const accountTypeChecker = (balanceHistory) => {
    let result = 'A'
    let monthZeroBalance = balanceHistory[0].account.balance.amount  
    let monthOneBalance = balanceHistory[1].account.balance.amount
    let difference = monthOneBalance - monthZeroBalance
    let totalMonths = balanceHistory.length 
    for(let i = 2; i <= totalMonths - 1 ; i++) {
        if(balanceHistory[i].account.balance.amount - balanceHistory[i-1].account.balance.amount === difference ) {
            result = 'B'
            continue;
        } else {
            result = 'A'
            return result;
        }
    }
    return result  
  };
console.log(accountTypeChecker(accountBalanceHistory))

// Unit tests conditions

/**
 * 
Input element must be an array
Items in the array must be greater then 1
If decrease is constant, it should return A, else B
It should through an exception when test case fails
 * 
 */
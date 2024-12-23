// Create an object called bankAccount with properties balance and transactions, and methods deposit and withdraw

// The deposit method should take amount as argument and add it to the balance and add a new transaction to the transactions property with the type "deposit" and the amount. For example, here's what a transaction looks like: { type: "deposit", amount: 100 }

const bankAcc = {
    balance: 0,
    transactions: [],
    deposit(amt) {
        this.balance += amt
        this.transactions.push({
            type: "deposit",
            amount: amt
        })
    },
    withdraw(amt) {
        if (amt > this.balance) { 
            console.log("Insufficient funds!"); 
            return;
        }
        this.balance -= amt
        this.transactions.push({
            type: "withdraw",
            amount: amt
        })
    }
}

bankAcc.deposit(30)
bankAcc.deposit(40)
bankAcc.withdraw(10)
console.log(bankAcc)
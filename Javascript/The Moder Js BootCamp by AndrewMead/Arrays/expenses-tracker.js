// Expenses -> description => string , amount => number
// addExpense -> description, amount
// getAccountSummary -> total up expenses -> message: 'Andrew Mead has $1250 in expenses.

    const account = {
        name: 'Andrew Mead',
        expenses: [],
        income: [],
        addExpense: function(description, amount){
            this.expenses.push({description, amount});
        },
        addIncome: function(description, amount){
            this.income.push({description, amount});
        },
        getAccountSummary: function(){
            let totalExpenses = 0;
            let totalIncomes = 0;
            let accountBalance = 0;
            this.expenses.forEach(expense =>{
                totalExpenses += expense.amount;
            })
            this.income.forEach(income =>{
                totalIncomes += income.amount;
            })
            accountBalance = totalIncomes - totalExpenses;
            return `${this.name} has a balance of $${accountBalance}. $${totalIncomes} in Income. $${totalExpenses} in Expense.`
        }

    }


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2.5)
account.addIncome('salary', 2750)
// console.log(account)
console.log(account.getAccountSummary());
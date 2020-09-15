let account  = {
    Name: "Jody",
    Expenses: [],

    addExpenses: function(description, amount){
        this.Expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.Expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};
account.addExpenses('Membeli Minuman', 15000);
account.addExpenses('Membeli Makanan', 30000);
console.log("Total pengeluaran " + account.Name + " adalah Rp." + account.getAccountSummary());
class CheckingAccount {
    private initialBalance: number;
    private ownerName: string;
    constructor(initialBalance: number, ownerName: string ) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(amount: number){
        this.initialBalance += amount;
    }

    withdraw(amount: number){
        this.initialBalance -= amount;
    }

    checkBalance(){
        console.log(`Your current balance is $${this.initialBalance}`);
    }
}

let account:CheckingAccount = new CheckingAccount(0, "Min");
account.checkBalance();
account.deposit(100);
account.checkBalance();
account.withdraw(100);
account.checkBalance();

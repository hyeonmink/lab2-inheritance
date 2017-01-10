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

let savings:CheckingAccount = new CheckingAccount(0, "Min");
savings.checkBalance();
savings.deposit(100);
savings.checkBalance();
savings.withdraw(100);
savings.checkBalance();

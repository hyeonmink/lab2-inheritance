class SavingsAccount{
    private initialBalance: number;
    private ownerName: string;
    private count: number = 0;
    constructor(initialBalance: number, ownerName: string ) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(amount: number){
        this.initialBalance += amount;
    }

    withdraw(amount: number){
        if(this.count <3){
            this.count++;
            this.initialBalance -= amount;
        }
        else{
            console.log("you have used all 3 withdraws")
        }
        
    }

    checkBalance(){
        console.log(`Your current balance is $${this.initialBalance}`);
    }    
}

var account:SavingsAccount = new SavingsAccount(1000, "Min");
account.checkBalance();
account.withdraw(100);
account.checkBalance();
account.withdraw(100);
account.checkBalance();
account.withdraw(100);
account.checkBalance();
account.withdraw(100);
account.checkBalance();
account.withdraw(100);
account.checkBalance();
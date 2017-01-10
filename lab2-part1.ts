class Part1 {
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

let check:Part1 = new Part1(0, "Min");
check.checkBalance();
check.deposit(100);
check.checkBalance();
check.withdraw(100);
check.checkBalance();
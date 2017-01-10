class Account {
    public initialBalance: number;
    public ownerName: string;
    public accountType: string = "checking"
    public constructor(initialBalance: number, ownerName: string ) {
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
        console.log(`Your current ${this.accountType} account balance is $${this.initialBalance}`);
    }
}
class Savings extends Account{
    private count: number = 0;
    private accountType:String = "savings"
    constructor(initialBalance: number, ownerName: string){
        super(initialBalance, ownerName);
    }

    withdraw(amount: number){
        if(this.count <3){
            this.count++;
            this.initialBalance -= amount;
        } else{
            console.log("you have used all 3 withdraws")
        }       
    }    
}

let account:Account = new Account(0, "Min");
account.checkBalance();
account.deposit(100);
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

let savings:Savings = new Savings(0, "Min");
savings.checkBalance();
savings.deposit(100);
savings.checkBalance();
savings.withdraw(100);
savings.checkBalance();
savings.withdraw(100);
savings.checkBalance();
savings.withdraw(100);
savings.checkBalance();
savings.withdraw(100);
savings.checkBalance();
savings.withdraw(100);
savings.checkBalance();



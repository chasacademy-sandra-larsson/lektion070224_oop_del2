
class BancAccount {

    // Privat egenskap - endast åtkomlig inom klassen! (inskapling, säkerhet)
    #balance
   
    constructor(owner) {
        this.owner = owner;
        this.#balance = 0.0; //saldo
    }

    // Sätta in pengar
    deposit(amount) {
        return this.#balance += amount;
    }

    withdraw(amount) {
        // Enast ta ut så mycket som finns på kontot
        if(amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("You are out of money!")
        }
    }

    getBalance() {
        return this.#balance;
    }

}

const customer = new BancAccount("Torsen");

customer.deposit(100);
customer.withdraw(200);
customer.deposit(1000);
customer.withdraw(1099);
console.log(customer.getBalance())
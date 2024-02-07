
class User {
    constructor(username) {
        this.username = username;
    }

    static helloEmail = "hello@company.se"

    // "Vanlig metod" som anropas genom instansobjektet
    displayUsername() {
        return `Username: ${this.username}`;
    }

    // En metod som anropas enbart på klassnamnet ("hoppar" över konstrukturn)
   static checkValidEmail(email) {
        return "Hmm the email looks good!";
    }

    static loginHelloEmail() {
        this.checkValidEmail(this.helloEmail)
        console.log("Logged in with helloEmail")
    }

}

// "Vanligt" - utan static
const user1 = new User();
user1.displayUsername();

console.log(User.checkValidEmail());

User.loginHelloEmail()


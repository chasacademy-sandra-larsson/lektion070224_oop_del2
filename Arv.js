// Basklassen
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    displayUsernamePassword() {
        return `Username: ${this.username} Password: ${this.password}`;
    }

}

class AdminUser extends User {

    constructor(username, password) {
        super(username, password);
        this.bannedUsers = [];
    }

    banUser(user) {
        this.bannedUsers.push(user);
    }

    displayBannedUsers() {
        return `Banned users ${this.bannedUsers.join(", ")}`;
    }

}

const adminUser = new AdminUser("sandra", "123");
adminUser.banUser("Torsten");
console.log(adminUser.displayBannedUsers())
console.log(adminUser.displayUsernamePassword())
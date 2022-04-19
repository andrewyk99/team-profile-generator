const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); // Super recieved from the parent 'Employee' class
        this.school = school; // Intern unique info
    }

    getName() {
        return super.getName();
    }

    getId() {
        return super.getId();
    }

    getEmail() {
        return super.getEmail();
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
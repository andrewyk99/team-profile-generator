const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); // Super get's the information from the parent 'Employee' class
        this.officeNumber = officeNumber; // Manager unique information
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

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
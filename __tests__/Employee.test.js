const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Luke', 1, 'luke@email.com');

    expect(employee.name).toBe('Luke');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('Luke', 1, 'luke@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Luke'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Luke', 1, 'luke@email.com');

    expect(employee.getId()).toBe(1);
});

test("gets employee's email", () => {
    const employee = new Employee('Luke', 1, 'luke@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('luke@email.com'));
});
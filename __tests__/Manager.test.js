const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Luke', 1, 'luke@email.com', 102);

    expect(manager.name).toBe('Luke');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager('Luke', 1, 'luke@email.com', 102);

    expect(manager.getName()).toEqual(expect.stringContaining('Luke'));
});

test("gets manager's employee ID", () => {
    const manager = new Manager('Luke', 1, 'luke@email.com', 102);

    expect(manager.getId()).toBe(1);
});

test("gets manager's email", () => {
    const manager = new Manager('Luke', 1, 'luke@email.com', 102);

    expect(manager.getEmail()).toEqual(expect.stringContaining('luke@email.com'));
});

test("gets manager's office number", () => {
    const manager = new Manager('Luke', 1, 'luke@email.com', 102);

    expect(manager.getOfficeNumber()).toBe(102);
});
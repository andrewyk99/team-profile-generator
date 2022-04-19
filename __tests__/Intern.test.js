const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Luke', 1, 'luke@email.com', 'UT Austin');

    expect(intern.name).toBe('Luke');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test("gets intern's name", () => {
    const intern = new Intern('Luke', 1, 'luke@email.com', 'UT Austin');

    expect(intern.getName()).toEqual(expect.stringContaining('Luke'));
});

test("gets intern's employee ID", () => {
    const intern = new Intern('Luke', 1, 'luke@email.com');

    expect(intern.getId()).toBe(1);
});

test("gets intern's email", () => {
    const intern = new Intern('Luke', 1, 'luke@email.com');

    expect(intern.getEmail()).toEqual(expect.stringContaining('luke@email.com'));
});

test("gets intern's school", () => {
    const intern = new Intern('Luke', 1, 'luke@email.com', 'UT Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining('UT Austin'))
})
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Luke', 1, 'luke@email.com', 'lukeGH');

    expect(engineer.name).toBe('Luke');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
    const engineer  = new Engineer('Luke', 1, 'luke@email.com', 'lukeGH');

    expect(engineer.getName()).toEqual(expect.stringContaining('Luke'));
});

test("gets engineer's employee ID", () => {
    const engineer = new Engineer('Luke', 1, 'luke@email.com', 'lukeGH');

    expect(engineer.getId()).toBe(1);
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Luke', 1, 'luke@email.com', 'lukeGH');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('luke@email.com'));
});

test("gets engineer's GitHub account", () => {
    const engineer = new Engineer('Luke', 1, 'luke@email.com', 'lukeGH');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('lukeGH'));
});
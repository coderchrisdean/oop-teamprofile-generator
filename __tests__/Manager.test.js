const { randomUUID } = require("uuid");
const Manager = require("../lib/Manager");

test('creates a manager object', () => {
    const manager = new Manager('Chris', 1, 'coderchrisdean@gmail.com', "123");
    expect(manager.name).toBe('Chris');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('gets manager role', () => {
    const manager = new Manager('Chris', 1, 'coderhchrisdean@gmail.com', randomUUID);
    expect(manager.getRole()).toBe('Manager');
});

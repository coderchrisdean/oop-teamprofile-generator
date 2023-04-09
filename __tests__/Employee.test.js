const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should create an object with a name, id, and email if provided with valid arguments', () => {
        const employee = new Employee('Chris', 1, 'coderchrisdean@gmail.com');
        
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
});

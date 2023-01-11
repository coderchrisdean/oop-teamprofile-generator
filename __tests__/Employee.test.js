const Employee = require("../library/Employee");

describe("Employee", () => {
    it("should create a new Employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });
});

describe("getName", () => {
    it("should return the employee's name", () => {
        const name = "J";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
});

describe("getId", () => {
    it("should return the employee's id", () => {
        const id = 1;
        const employee = new Employee("J", id);
        expect(employee.getId()).toBe(id);
    });
});

describe("getEmail", () => {
    it("should return the employee's email", () => {
        const email = "j@j.com";
        const employee = new Employee("J", 1, email);
        expect(employee.getEmail()).toBe(email);
    });
});

describe("getRole", () => {
    it("should return the employee's role", () => {
        const role = "Employee";
        const employee = new Employee("J", 1, "j@j.com");
        expect(employee.getRole()).toBe(role);
    });
});
const Manager = require("../library/Manager");

describe("Manager", () => {
    it("should create a new Manager object", () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe("object");
    });
});

describe("getOfficeNumber", () => {
    it("should return the manager's office number", () => {
        const officeNumber = 123;
        const manager = new Manager("J", 1, "j@j.com", officeNumber);
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
});

describe("getRole", () => {
    it("should return the manager's role", () => {
        const role = "Manager";
        const manager = new Manager("J", 1, "j@j.com", 123);
        expect(manager.getRole()).toBe(role);
    });
});
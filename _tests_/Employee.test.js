const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    it("should create an object with a name, id, and an email address if provided valid argument", () => {
        let employee = new Employee("Jared", 1, "jared@fakemail.com");

        // Verify that the newly-created object has the correct properties
        expect(employee.name).toEqual("Jared");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("jared@fakemail.com");
    });
});
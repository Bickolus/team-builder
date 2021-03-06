const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        // Test for all use cases when initializing a new Employee object
        it("should create an object with a name, id, and an email address if provided the valid string arguments", () => {
            let employee = new Employee("Jared", "1", "jared@fakemail.com");

            // Verify that the newly-created object has the correct properties
            expect(employee.name).toEqual("Jared");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("jared@fakemail.com");
        });
    });

    describe("getName", () => {
        it("should return the employee's name value", () => {
            let employee = new Employee("Alec", "2", "alec@fakemail.com");

            // Verify that the newly-created object's method returns the correct value
            expect(employee.getName()).toEqual("Alec");
        });
    });

    describe("getId", () => {
        it("should return the employee's id value", () => {
            let employee = new Employee("Grace", "3", "grace@fakemail.com");

            // Verify that the newly-created object's method returns the correct value
            expect(employee.getId()).toEqual("3");
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            let employee = new Employee("Tammer", "4", "tammer@fakemail.com");

            // Verify that the newly-created object's method returns the correct value
            expect(employee.getEmail()).toEqual("tammer@fakemail.com");
        });
    });

    describe("getRole", () => {
        it("should return the employee's role (class)", () => {
            let employee = new Employee("John", "5", "john@fakemail.com");

            // Verify that the newly-created object's method returns the correct value
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
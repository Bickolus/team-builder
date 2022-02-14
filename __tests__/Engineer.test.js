const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        // Test for all use cases when initializing a new Engineer object
        it("should create an object with a name, id, and an email address of its parent Employee class and a github username, all strings", () => {
            let engineer = new Engineer("Engie", "96", "engie@fakemail.com", "devengie");

            // Verify that the newly-created object has the correct properties of both parent class and the subclass
            expect(engineer.name).toEqual("Engie");
            expect(engineer.id).toEqual("96");
            expect(engineer.email).toEqual("engie@fakemail.com");
            expect(engineer.github).toEqual("devengie");
        });
    });

    describe("getGithub", () => {
        it("should return the employee's github username", () => {
            let engineer = new Engineer("Engie", "96", "engie@fakemail.com", "devengie");

            // Verify that the newly-created object's method returns the correct value
            expect(engineer.getGithub()).toEqual("devengie");
        });
    });

    describe("getRole", () => {
        it("should return the string 'Engineer'", () => {
            let engineer = new Engineer("Engie", "96", "engie@fakemail.com", "devengie");

            // Verify that the newly-created object's method returns the correct value
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
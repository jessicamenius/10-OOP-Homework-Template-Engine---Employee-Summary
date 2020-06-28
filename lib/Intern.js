// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // set school as class variable
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

// const intern = new Intern("Jessica", 1234, "jessicamenius@gmail.com", "Mizzou");

// console.log(intern);
// console.log(intern.getSchool());

// console.log(intern.getName());

module.exports = Intern;

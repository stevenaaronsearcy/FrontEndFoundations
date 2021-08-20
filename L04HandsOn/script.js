class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}
class Manager extends Employee {
  constructor(descriptionOfJob, name, salary, hireDate) {
    super(name, salary, hireDate);
    this.descriptionOfJob = descriptionOfJob;
  }
  jobDescription() {
    console.log(
      "Hello, my name is " +
        this.name +
        " " +
        "and I was hired on " +
        this.hireDate +
        "." +
        " My currently salary is " +
        this.salary +
        " and I " +
        this.descriptionOfJob +
        "."
    );
  }
}
class Designer extends Employee {
  constructor(experience, name, salary, hireDate) {
    super(name, salary, hireDate);
    this.experience = experience;
  }
  yearsExperience() {
    console.log(
      "Hello, my name is " +
        this.name +
        " " +
        "and I was hired on " +
        this.hireDate +
        "." +
        " My currently salary is " +
        this.salary +
        " and I have " +
        this.experience +
        "."
    );
  }
}
class SalesAssociate extends Employee {
  constructor(degrees, name, salary, hireDate) {
    super(name, salary, hireDate);
    this.degrees = degrees;
  }
  degreeCompleted() {
    console.log(
      "Hello, my name is " +
        this.name +
        " " +
        "and I was hired on " +
        this.hireDate +
        "." +
        " My currently salary is " +
        this.salary +
        " and I have " +
        this.degrees +
        "."
    );
  }
}

let newhire = new Manager(
  "serve tables at a restaurant",
  "Steven Searcy",
  1000,
  "October 2nd, 2020"
);
let otherhire = new Designer(
  "ten years of experience",
  "Steven Searcy",
  1000,
  "October 2nd, 2020"
);
let theotherhire = new SalesAssociate(
  "a degree in hospitality",
  "Steven Searcy",
  1000,
  "October 2nd, 2021"
);

newhire.jobDescription();
otherhire.yearsExperience();
theotherhire.degreeCompleted();

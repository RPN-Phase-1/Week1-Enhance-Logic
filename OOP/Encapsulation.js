class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getInfo() {
    const cond1 = this.age >= 18 || this.age <= 6;
    const cond2 = this.grade >= 100 || this.grade <= 0;
    if (cond1 || cond2) {
      return "Invalid Age or Grade.";
    } else {
      return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
  }
}

const student1 = new Student("Alice", 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade

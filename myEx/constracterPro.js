function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
    return this.grades;
};
Student.prototype.computeAverageGrade = function () {
    let average = this.grades.reduce(
        (sum, item, index, arr) => sum + item / arr.length,
        0
    );
    return average;
};
let shibiru = new Student("shibiru", "Smith", [60, 70, 80]);
let ebisa = new Student("Bob", "Doe", [85, 95, 83]);
let dejene = new Student("cathy", "jade", [90, 80, 95]);
let arr = [shibiru, ebisa, dejene];

let averages = arr.map((item) => item.computeAverageGrade());
console.log(averages);

Student.prototype.sort = function () {
    let sorted = this.grades.sort((x, y) => x - y);
    console.log(sorted);
    return sorted;
};

shibiru.sort();

let student = {
    firstName: "default",
    lastName: "default",
    grades: [1, 2, 3],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        let average = this.grades.reduce(
            (sum, item, index, arr) => sum + item / arr.length, 0);
        return average;
    },
};

let shibiru = Object.create(student);
shibiru.firstName = "shibiru";
shibiru.lastName = "smith";
shibiru.grades = [60, 90, 80];

let ebisa = Object.create(student);
bob.firstName = "Bob";
bob.lastName = "Doe";
bob.grades = [85, 95, 83];

let dejene = Object.create(student);
dejene.firstName = "Cathy";
dejene.lastName = "Jade";
dejene.grades = [90, 80, 95];

let arr = [shibiru, ebisa, dejene];

let averages = arr.map((item) => item.computeAverageGrade());
console.log(averages);

/*
function Student(firstName, lastName, birthYear, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [10, 3, 8, 9];
    this.attendance = [true, false, true];
    this.course = course;

    this.addGrade = function(grade){
        this.grades.push(grade);
        console.log("Додати оцінку");
    }
    this.addAttendance = function(attended){
        this.attendance.push(attended);
        console.log("Додати відвідування");
    }
    this.averageGrades = function(){
        let sum = this.grades.reduce((a, b) => a + b, 0);
          let avg = attendedClasses / this.attendance.length;
        console.log("Середнє відвідування: " + avg);
        return avg;
    }
    this.changeCourse = function(newCourse){
        this.course = newCourse;
        console.log("Курс змінено на: " + newCourse);
    }
    this.informationStudent = function(){
        console.log(`Ім'я: ${this.firstName}, Прізвище: ${this.lastName}, Рік народження: ${this.birthYear}, Курс: ${this.course}`);
    }
}

let john = new Student("John", "Snow", 1990, "PHP");
john.informationStudent();
john.averageGrades();
john.averageAttendance();
john.changeCourse("JS"); let avg = sum / this.grades.length;
        console.log("Середня успішність: " + avg);
        return avg;
    }
    this.averageAttendance = function(){
        let attendedClasses = this.attendance.filter(a => a).length;
     
*/

/*
function Student(firstName, lastName, birthYear, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [, 3, 8, 9];
    this.attendance = [true, false, true];
    this.courses = courses;

    this.addGrade = function(grade) {
        this.grades.push(grade);
        console.log("Додати оцінку");
    }

    this.addAttendance = function(attended) {
        this.attendance.push(attended);
        console.log("Додати відвідування");
    }

    this.averageGrades = function() {
        let sum = this.grades.reduce((a, b) => a + b, 0);
        let avg = sum / this.grades.length;
        console.log("Середня успішність: " + avg);
        return avg;
    }

    this.averageAttendance = function() {
        let attendedClasses = this.attendance.filter(a => a).length;
        let avg = attendedClasses / this.attendance.length;
        console.log("Середнє відвідування: " + avg);
        return avg;
    }

    this.addCourse = function(newCourse) {
        this.courses.push(newCourse);
        console.log("Курс додано: " + newCourse);
    }

    this.removeCourse = function(courseToRemove) {
        this.courses = this.courses.filter(course => course !== courseToRemove);
        console.log("Курс видалено: " + courseToRemove);
    }

    this.informationStudent = function() {
        console.log(`Ім'я: ${this.firstName}, Прізвище: ${this.lastName}, Рік народження: ${this.birthYear}, Курси: ${this.courses.join(", ")}`);
    }
}

    let john = new Student("John", "Snow", 1990, ["PHP"]);
    john.informationStudent();
    john.addCourse("JS");
    john.removeCourse("PHP");
    john.informationStudent();
    john.averageGrades();
    john.averageAttendance();
*/



class Student {
    constructor(name, attendance, grades) {
        this.name = name;
        this.attendance = attendance;
        this.grades = grades;
    }
}

class Group {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(studentName) {
        this.students = this.students.filter(student => student.name !== studentName);
    }

    getAttendanceRanking() {
        return this.students.sort((a, b) => a.attendance - b.attendance);
    }

    getGradesRanking() {
        return this.students.sort((a, b) => {
            let avgA = a.grades.reduce((sum, grade) => sum + grade) / a.grades.length;
            let avgB = b.grades.reduce((sum, grade) => sum + grade) / b.grades.length;
            return avgB - avgA;
        });
    }
}


let student1 = new Student("John", 90, [85, 90, 78]);
let student2 = new Student("Ned", 95, [88, 92, 80]);
let student3 = new Student("Arya", 85, [75, 80, 70]);

let group = new Group();
group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

console.log("Рейтинг за відвідуваністю:");
group.getAttendanceRanking().forEach(student => console.log(student.name, student.attendance));

console.log("Рейтинг за успішністю:");
group.getGradesRanking().forEach(student => {
    const avgGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    console.log(student.name, avgGrade);
});
    
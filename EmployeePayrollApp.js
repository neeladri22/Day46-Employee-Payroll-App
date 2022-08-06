//UC1 - Modify Employee Payroll Class with new Attributes and Getters and Setters

class EmployeePayrollData {
    //getter and setter method
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$")
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }
    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }
    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }
    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this._startDate = startDate;
        if (startDate > now) throw 'Start Date is a Future Date';
        var diff = Math.abs(now.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30)
            throw 'Start Date is beyond 30 days!';
        this.startDate = startDate;
    }

    //methord--
    toString() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + ", profilepic= " + this.profilePic + ", department= " + this.department + ", salary=" + this.salary + ", startDate= " + empDate + ", note=" + this.note;
    }
}

//UC2 - Ability to set Event Listeners when Document is loaded so as to

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            //setTextValue('.text-error', "");
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            //setTextValue('.text-error', "");
            textError.textContent = "";
        }
        catch (e) {
            //setTextValue('.text-error', e);
            textError.textContent = e;
        }
    });


    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary—output");
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});
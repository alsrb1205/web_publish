// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ==> Member 부모클래스(name, age, address)
class Member {
    #name;
    #age;
    #address;
    constructor(name, age, address) {  // 자식의 클래스 생성자함수에서 super 호출
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }
    get name() { return this.#name; }
    get age() { return this.#age; }
    get address() { return this.#address; }

    set name(name) { return this.#name = name; }
    set age(age) { return this.#age = age; }
    set address(address) { return this.#address = address; }
}
/**Student Class */
class Student extends Member {
    #sno; // 학번
    constructor(sno, name, age, address) {
        super(name, age, address);
        this.#sno = sno;
    }
    get sno() { return this.#sno; } //private이 포함된 메소드는 해당 클래스에 있어야 함
    //전체 값을 반환하는 함수 정의

    //호출방법 : 객체명.values()
    // values =()=> [this.name, this.age, this.address. this.sno];

    //호출방법 : 객체명.values
    get values() {
        return [this.name, this.age, this.address, this.#sno];
    }
}
/**Professor Class */
class Professor extends Member {
    #subject; // 과목
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() { return this.#subject; }
    get values() {
        return [this.name, this.age, this.address, this.#subject];
    }

}
/**Parent Class */
class Parent extends Member {
    #cname; // 자녀명
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.#cname = cname;
    }
    get cname() { return this.#cname; }
    get values() {
        return [this.name, this.age, this.address, this.#cname];
    }

}
/**Employee Class */
class Employee extends Member {
    #department; // 부서명
    constructor(name, age, address, department) {
        super(name, age, address);
        this.#department = department;
    }
    get department() { return this.#department; }
    get values() {
        return [this.name, this.age, this.address, this.#department];
    }

}

// signup 버튼 클릭시 호출되는 함수
const signupCheck = () => {
    let type = document.querySelector('input[type=radio]:checked');
    let name, age, address, sno, subject, cname, department;
    let member = null; // type 에 따라서 각각의 클래스 생성

    switch (type.value) {
        case '1':
            name = document.querySelector('#student #name');
            age = document.querySelector('#student #age');
            address = document.querySelector('#student #address');
            sno = document.querySelector('#student #sno');

            member = new Student(sno.value, name.value, age.value, address.value); break;

        case '2':
            name = document.querySelector('#professor #name');
            age = document.querySelector('#professor #age');
            address = document.querySelector('#professor #address');
            subject = document.querySelector('#professor #subject');

            member = new Professor(name.value, age.value, address.value, subject.value); break;

        case '3':
            name = document.querySelector('#parent #name');
            age = document.querySelector('#parent #age');
            address = document.querySelector('#parent #address');
            cname = document.querySelector('#parent #cname');

            member = new Parent(name.value, age.value, address.value, cname.value); break;

        case '4':
            name = document.querySelector('#employee #name');
            age = document.querySelector('#employee #age');
            address = document.querySelector('#employee #address');
            department = document.querySelector('#employee #department');

            member = new Employee(name.value, age.value, address.value, department.value); break;
        default:
    }
    console.log(member);
    // 자바스크립트로 생성되는 HTML을 Dynamic HTML(DHTML)
    // let list = Object.keys(member); // ['name','age','address','sno'] -->클래스의 필드값이 private인 경우에는 데이터를 가져올 수 없다.

    let list = '';
    member.values.forEach((item) => {
        list += `<li>${item}</li>`;
    });

    let output = `<ul>${list}</ul>`;

    document.querySelector('#result').innerHTML = output;

} //end of signupCheck

// display : 라디오버튼 선택시 화면 전환시키는 함수
const display = (type) => {

    document.querySelector('#result').innerHTML = ''; //다른 버튼 선택시 result 사라지게

    document.querySelector('#student').style.display = "none";
    document.querySelector('#professor').style.display = "none";
    document.querySelector('#parent').style.display = "none";
    document.querySelector('#employee').style.display = "none";
    if (type === '1') {
        document.querySelector('#student').style.display = "block";
    } else if (type === '2') {
        document.querySelector('#professor').style.display = "block";
    } else if (type === '3') {
        document.querySelector('#parent').style.display = "block";
    } else if (type === '4') {
        document.querySelector('#employee').style.display = "block";
    }
} // end of display
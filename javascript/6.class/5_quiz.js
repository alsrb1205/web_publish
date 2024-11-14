// 학생(Student) 클래스
// 속성 : #이름, #나이, #주소, 별칭
// 메소드 : setter/getter 메소드 정의

class Student {
    #name;
    #age;
    #add;
    constructor(name, age, add, nick) {
        this.#name = name;
        this.#age = age;
        this.#add = add;
        this.nick = nick;
    }
    // set/get 함수 형식은 private 정의된 필드값에 한해서 생성한다.
    get name() { return this.#name };
    get age() { return this.#age };
    get add() { return this.#add };
    // get nick () { return this.nick }; 

    set name(name){this.#name = name;}
    set age(age){this.#age = age;}
    set add(add){this.#add = add;}
    // set nick(nick){this.nick = nick;}

    info = () => console.log(`${this.name},${this.age},${this.add},${this.nick}`);
    infoAll = () => console.log(`${this.#name},${this.#age},${this.#add},${this.nick}`);
}
const hong = new Student('홍길동', '20', '서울시', '홍홍');
hong.info();
hong.infoAll();

hong.name = '홍길순';
hong.nick = '홍홍홍홍';
console.log(`${hong.name}`);
console.log(`${hong.nick}`);


hong.info();

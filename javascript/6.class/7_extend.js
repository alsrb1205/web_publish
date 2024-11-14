// 클래스간의 상속관계
// E 동물원에서 동물관리 프로그램을 생성
// 흰색사자,회색사자,흰색호랑이,회색호랑이,푸들,말티즈
// 객체 모델링 ==> Lion, Tiger, Dog 클래스
// 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지),sleep, eat

// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ==> Animal
// Animal 클래스 속성 : name, color, emoji, taste(식성)
// Animal 클래스 메소드 : display(이모지),sleep, eat
class Animal {
    constructor(name, color, emoji, taste) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
    }
    display = () => console.log(`${this.name} : ${this.emoji}`);
    eat = () => console.log(`${this.name} 가(이) 먹는다.`);
    sleep = () => console.log(`${this.name} 가(이) 잔다.`);
}


// Lion 클래스
class Lion extends Animal {} // extend 할때마다 부모인 Animal도 같이 생성됨
// Tiger
// age 값 추가
class Tiger extends Animal {
    constructor(name, color, emoji, taste, age) {
        super(name, color, emoji, taste);
        this.age = age;
    }
    getAge =()=> console.log(this.age);
    
}
// Dog
class Dog extends Animal {
    constructor(name, color, emoji, taste, type) {
        super(name, color, emoji, taste);
        this.type = type;
    }
    getType = () => console.log(this.type);
}

/**
 * 동물원에서 동물을 관리하는 클래스
 * 속성 : #type, #동물의 객체(Lion, Tiger, Dog)
 * 메소드 : setter/getter
 */
class EverZoo {
    static LION = 1;
    static TIGER = 2;
    static DOG = 3;

    #type;
    #animal;
    constructor(type, animal) {
        this.#type = type;
        this.#animal = animal;
    }
    get type() { return this.#type };
    get animal() { return this.#animal };

    set type(type) { this.#type = type; }
    set animal(animal) { this.#animal = animal; }
}


// 클래스 생성 및 호출
const tom = new Lion("tom", "white", "🦁", "meat");
const smith = new Tiger("smith", "gray", "🐯", "meat", 3);
const bob = new Dog("bob", "white", "🐶", "meat", "푸들");

tom.display(); tom.eat(); tom.sleep();
smith.display(); smith.eat(); smith.sleep(); smith.getAge()
bob.display(); bob.eat(); bob.sleep(); bob.getType();

const everZoo = new EverZoo(EverZoo.LION, tom);
console.log(everZoo.type, everZoo.animal);

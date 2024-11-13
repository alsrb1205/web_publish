// static 메소드 : 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능함. 인스턴스에서는 접근할 수 없다!!!
class Fruit {
    constructor(name, color, emoji) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    static makeFruit = () => {
        return new Fruit('orange','coral','🍊')
    }
    display = () => console.log(`${this.name},${this.color},${this.emoji}`);
}

let apple = new Fruit('apple', 'red', '🍎');
apple.display();
// apple.makeFruit();    출력 불가!
let orange = Fruit.makeFruit();
console.log(orange);
orange.display();

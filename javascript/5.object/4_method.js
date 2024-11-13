// 객체에서 기능을 구현하는 메소드
const apple = {
    name: "사과",
    color: "red",
    emoji: "🍎",
    display: function () { console.log("🍎"); }, //메소드(method)
    getName: function () { console.log(this.name); }, //this = apple
    getColor: function () { console.log(this.color); },
    getEmoji: function () { console.log(this.emoji); },

}
apple.getName();
apple.getColor();
apple.getEmoji();

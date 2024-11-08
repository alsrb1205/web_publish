// 임의의 과일을 선택받아..
// 좋아하는 과일 : apple, orange, lemon
// 이외 과일 선택시 '좋아하는 과일 없음'

let fruit = "apple";
let choie = undefined;
if (fruit === "apple") 
    choice = "🍎"
else if (fruit === "orange") 
    choice = "🍊" 
else if (fruit === "lemon") 
    choice = "🍋"
else choice = `${fruit} 없음`;

console.log(`선택 결과 : ${choice}`);

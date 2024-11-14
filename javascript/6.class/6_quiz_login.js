// 로그인 체크를 위한 클래스 정의
class User {
    #id;
    #pass;
    constructor(id, pass) {
        this.#id = id;
        this.#pass = pass;
    }
    get id() { return this.#id; }
    get pass() { return this.#pass; }

    set id(id) { this.#id = id; }
    set pass(pass) { this.#pass = pass; }
}
/**
 * 로그인 버튼 클릭시 호출하는 함수
 */
// 함수에 여러가지 기능 x 한가지 기능만 넣는게 좋다.
let user = null;
const DID = "test";
const DPASS = "1234";
function loginCheck() {
    let id = document.querySelector('#id'); //id값이 입력되는 폼 객체
    let pass = document.querySelector('#pass'); //pass값이 입력되는 폼 객체
    // 유효성 체크
    if (id.value === "") {
        alert('아이디를 입력해주세요!');
        id.focus();
    } else if (pass.value === "") {
        alert('비밀번호를 입력해주세요!');
        pass.focus();
    } else {
        // id, pass ==> User 클래스 객체 생성과 처리작업
        user = new User(id.value, pass.value);
        if(DID ===user.id && DPASS ===user.pass){
            alert('로그인 성공!!');
        } else {alert('로그인 실패!!')}
    }
}

/**
 * 서버 연동 작업
 */


// const hong= new User('hong1234', '1234');
// console.log(`id : ${hong.id}, pass : ${hong.pass}`);
// hong.id = 'hong11'
// hong.pass = '123456'
// console.log(`id : ${hong.id}, pass : ${hong.pass}`);
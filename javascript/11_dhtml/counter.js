// counter 증가/감소
function counter(flag) {
    let number = document.querySelector('#number').textContent;
    if (flag === 'increment') {
        if (number < 10) {
            document.querySelector('#number').textContent = ++number;            
        }
    } else {
        if (number > 0) {
            document.querySelector('#number').textContent = --number;
        }
    }
}





//increment
function increment() {
    let number = document.querySelector('#number').textContent;
    if (number < 10) {
        document.querySelector('#number').textContent = ++number;
    }

}

//decrement
function decrement() {
    let number = document.querySelector('#number').textContent;
    if (number > 0) {
        document.querySelector('#number').textContent = --number;
    }


}

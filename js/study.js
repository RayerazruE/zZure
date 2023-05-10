//비교연산자, 조건문 if else
//논리연산자 and or not
//반복문 for, while, do while

//switch문은 if else문과 동일하다.


//switch(평가){
    case A:
        //A일때 코드
    case B:
        //B일때 코드
}

//if(평가==A){
    //A일때 코드
} else if(평가==B){
    //B일때 코드
}

//위의 두 구문이 동일함.

let fruit = prompt('무슨 과일을 사고 싶나요?');

switch(fruit){
    case '사과':
        console.log('100원 입니다.');
        break;
    case '바나나':
        console.log('200원 입니다.');    
        break;
    case '키위':
        console.log('300원 입니다.');
        break;
    case '멜론':
    case '배':
        console.log('400원 입니다.');
        break;
    case '수박':
        console.log('500원 입니다.');
        break;
    default :
        console.log('그런 과일은 없습니다.');
}

//function

//console, alert, confirm

//   함수   함수명  매개변수
//function sayHello(name){
    console.log(`Hello, ${name}`);
}

//sayHello('Mike');

//함수 작성
//매개변수가 없는 함수

function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요.');
}

showError();


//함수 작성
//매개변수가 있는 함수

let msg='Hello';  // 전역변수(global varable)
console.log('함수 호출 전')
console.log(msg)

function sayHello(name){
    if(name){
        msg += `, ${name}`;
    }
    console.log('함수 내부') // 지역 변수(local varable)
    console.log(msg);
}

sayHello('Mike');
console.log('함수 호출 후')
console.log(msg)

//전역 변수와 지역 변수

let msg = "welcome";
console.log(msg)

function sayHello(name){
    let msg = "Hello"
    console.log(msg + ' ' + name);
}

sayHello('Mike');
console.log(msg)

//예제2

let name = "Mike";

function sayHello(name){
    console.log(name)
}

sayHello();
sayHello('Jane');

//OR

function sayHello(name){
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`
    console.log(msg)
}

sayHello();
sayHello('Jane');


//OR 다른방법 default value

function sayHello(name = 'friend'){
    let msg = `Hello, ${name}`
    console.log(msg)
}

sayHello();
sayHello('Jane');

//return 으로 값 반환 리턴 오른쪽에 있는 값을 반환

function add(num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log(result)


function showError(){
    alert('에러가 발생했습니다.');
    return;
    alert('이 코드는 절대 실행되지 않습니다.')
}
const result = showError();
console.log(result);


//함수는 한번에 한 작업에 집중
//읽기쉽고 어떤 동작인지 알 수 있게 네이밍
//showError 에러를 보여줌
//getName 이름을 얻어옴
//createUserData 유저데이터 생성
//checkLogin 로그인 여부 체크



//함수 선언문 vs 함수 표현식

let sayHello = function(){
    console.log('Hello');
}

sayHello();



//화살표 함수(arrow function)

let add = function (num1, num2){
    return num1 + num2;
}
console.log(add)

let add1 = (num1, num2) =>{
    return num1 + num2;
}
console.log(add1)

let add2 = (num1, num2) =>(
    num1 + num2
)
console.log(add2)
    

let add3 = (num1, num2) => num1 + num2;
console.log(add3)


//인수가 하나라면 괄호 생략가능
let sayHello =(name) => `Hello, ${name}`;

//인수가 없다면 괄호 생략 불가능
let showError = () => {
    alert('error!');
}

const sayHello = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}

const add = (num1, num2) => num1 + num2;

console.log(add(1,2))



//표현식보다는 선언문이 자유로움



//객체(Object)

//객체는 {}중괄호로 작성 그 사이에 키(key)와 값(value)가 들어감 ,쉼표로 구분함.

//객체에 접근하고 싶을때는 . 또는 [] 를 사용.
//추가할때도 마찬가지
//삭제는 delete를 사용 삭제하고싶은 프로퍼티 앞에 사용


//프로퍼티 = 객체 내부의 속성
//단축 프로퍼티

//프로퍼티 존재 여부 확인

//존재하지 않는 항목
superman.birthDay;
// undefined

//존재여부 확인 (true 또는 false)
'birthDay' in superman;
// false
'age' in superman;
// true


//객체

const superman = {
    name : 'zzure',
    age : 32,
}

superman['hairColor'] = 'black'
superman.hobby = 'basketball';

delete superman.age;

console.log(superman)


function makeObject(name, age){
    return {
        name,
        age,
        hobby : 'basketball'
    }
}

const Pang = makeObject("Pang", 27);
console.log(Pang);

console.log('age' in Pang)
console.log('birthDay' in Pang)


//객체 in


function isAdult(user){
    if(!('age' in user) || //user에 age가 없거나
    user.age < 20){ // 20살 미만이거나
        return false;
    } return true;
}

const Pang = {
    name : 'Pang',
    age : 27
}

const Bone = {
    name : "Bone"
}

console.log(isAdult(Bone))


//객체 for ... in

const Zzure = {
    name: "Zzure",
    age: 32,
    hobby: "basketball"
};

for(x in Zzure){
    if(x == 'name' || x == 'age') continue;
    console.log(Zzure[x]) // Zzure['name']  Zzure['age']
}


//객체 method / this
//method : 객체 프로퍼티로 할당 된 함수


let boy={
    name:'Mike',
    showName: function(){
        console.log(boy.name)
    }
};

    //sayHello:function(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

let girl={
    name:'Jane',
}


boy.sayHello();
girl.sayHello();


sayHello:function(){
    console.log(`Hello, I'm${this.name}`);
}


//method

let boy={
    name:'Mike',
    showName: function() {
        console.log(boy.name)
    }
};

let man = boy;
man.name = "Tom"

console.log(boy.name)

//another method

let boy={
    name:'Mike',
    showName: function() {
        console.log(boy.name)  // boy -> this로 바꿔주면 작동.
    }
};

let man = boy;
boy = null;

man.showName(); // Error


//화살표함수 사용 method
//객체의 method를 작성할때는 화살표함수로 작성X

let boy = {
    name : 'Mike',
    sayThis: function(){
        console.log(this);
    }
};

boy.sayThis();




//배열 array


//1번에 쭈루 2번에 팡어 30번에 뼈햄
//let students=['쭈루', '팡어', ... ,'뼈햄'];
//        index   0       1            29



let arr = [
    '쭈루',  //문자
    3,   //숫자
    false, //불린
    {
        name : 'Zzure',
        age : 32,
    },      //객체
    function(){
        console.log('TEST'); 
    }  //함수
];

//length: 배열의 길이


students.length // 30



//push() 배열 끝에 추가
//pop() 배열 끝 요소 제거
//shift, unshift 배열 앞에 제거/추가



//array

let days = ['mon', 'tue', 'wed'];

days[1] = '화요일';

console.log(days.length);




let days = ['mon', 'tue', 'wed'];

days.push('thu', 'fri');
days.shift();
days.shift();

console.log(days);


for(let index=0; index<days.length; index++){
    console.log(days[index]);
}


for(let day of days){
    console.log(day);
}



// 실행문은 세미콜론 ; 으로 구분됨.
// 대소문자를 구분함
// 리터럴(Literal)은 직접 표현되는 값 그자체

// 식별자 방식 Camel Case, Underscore Case
// 자바스크립트에서는 카멜케이스를 베이스로 사용함.


// window.alert() 메소드
// document.write() 메소드

var num = 10; // 숫자
var hello = "안녕"; // 문자열
var bool = false // boolean 타입 false

var sym = Symbol("javascript") // symbol타입
var symObj = Object(sym); // object 타입
var str; // undefined
var str = null; // null

// 객체object
var person = {name:"김씨", age:20}; // 객체의 생성
// 객체의 프로퍼티 참조
document.getElementById("result").innerHTML =
"이름:" + person.name + "나이:" + person.age;

var month; // month라는 이름의 변수 선언
date = 25; // date라는 이름의 변수를 묵시적으로 선언

// 대입연산자 += -= *= /= %=
// 증감연산자 ++x x++ --x x--
// 비교연산자 == === != !== > <= < <=
// 논리연산자 && || !


/* 함수 function 키워드로 선언, 함수의 이름, 괄호 안에 (,)로 구분되는
함수의 매개변수(parameter)  중괄호({})로 둘러싸인 자바스크립트 실행문*/


/* 반환문
return 키워드 사용
function multiNum(x, y) {
    return x * y;
}

var num = multinum(3, 4);
document.write(num);
*/


// jQuery - 수많은 라이브러리 존재
// 기본문법 $(선택자).동작함수();


// 필터링에 사용 가능한 선택자
/*
:eq(n) 선택한 요소 중에서 인덱스가 n인 요소를 선택함
:gt(n) 선택한 요소 중에서 인덱스가 n보다 큰 요소를 모두 선택함
:lt(n) 선택한 요소 중에서 인덱스가 n보다 작은 요소를 모두 선택함
:even 선택한 요소 중에서 인덱스가 짝수인 요소를 모두 선택함
:odd 선택한 요소 중에서 인덱스가 홀수인 요소를 모두 선택함
:first 첫 번째 요소
:last 마지막 요소
:animated 애니메이션 효과가 실행 중인 요소 모두 선택
:header h1 ~ h6까지의 요소 모두 선택
:lang(언어) 지정한 언어의 요소 모두 선택
:not(선택자) 일치하지 않는 요소 모두 선택
:root 최상위 루트 요소 선택
:target URL의 fragment 식별자와 일치하는 요소 모두 선택
:contains(텍스트) 지정한 텍스트를 포함하는 요소를 모두 선택
:has(선택자) 일치하는 자손 요소를 갖는 요소 모두 선택
:empty 자식요소를 가지고 있지 않은 요소를 모두 선택
:parent 자식 요소를 가지고 있는 요소를 모두 선택
*/


//input 요소를 선택할 수 있는 선택자
//:이름

//조상요소 탐색
/*
.parent() 부모 선택
.parents() 조상 모두 선택
.parentsUntil() 조상 요소 중 지정한 선택자에 해당하는 요소
                바로 이전까지의 요소 모두 선택
.closest() 선택한 요소 포함 조상 요소 중에서 지정한 선택자에
           해당하는 요소 중 가장 첫 번째를 선택
*/

//형제요소 탐색
/*
.siblings() 모두
.next() 다음
.nextAll() 다음 모두
.nextUntil() 선택자에 해당하는 요소 바로 이전까지 모두 선택
.prev() 바로 이전에 위치한 형제 요소
.prevAll()
.prevUntil()
*/

//자손요소 탐색
/*
.children()
.find()
*/

//기타 탐색
/*
.add()
.addBack()
.each()
.end()
.offsetParent()
.contents()
*/


// 이벤트? = 마우스 클릭, 페이지를 벗어남 등
/*
이벤트 처리를 위해 이벤트 핸들러 함수를 작성
.on()
    .click()
    .dblclick()
    .hover()
    .mousedown()
    .mouseenter()
    .mouseleave()
    .mousemove()
    .mouseout()
    .mouseover()
    .mouseup()

    .keydown()
    .keyup()
    .keypress()
*/


//이벤트 연결 - 입력 양식 이벤트 메소드
/*
.blur()
.change()
.select()
.submit()
.focus()
.focusin()
.focusout()
*/



//쭈루연구소 응용가능한 예제
/*
<script>
$(document).ready(function(){
    $("button").click(function(){
        //$("p").hide();
            $("#test").display();
                $(".another").hide();
    })
})
</script>
</head>

<body>
    <p>문자1</p>
    <p id="test">문자2</p>
    <p class="another">문자3</p>

    <button>클릭</button>
</body>
</html>
*/


// jQuery UI 인터랙션

/* 인터랙션
Draggable
Droppable
Resizeable
Selectable
Sortable
*/

/* 위젯
Accordion
Autocomplete
Button
Datepicker
Dialog
Progressbar
Slider
Tabs
*/





































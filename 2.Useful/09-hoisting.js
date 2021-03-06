//Hoisting : 자바스크립트에서 아직 선언되지 않은 함수, 변수를 끌어올려서 사용할 수 있는 자바스크립트의 작동방식

myFunction();

function myFunction(){
    console.log("hello world");
}   //호출후 선언이 되었는데 자바스크립트는 아래에서 호출한것처럼 받아들이고 결과가 나옴
    //이처럼 아래에 선언된걸 끌어올려서 사용하는걸 호이스팅이라고 함
    //왠만하면 피해야하는 코드방식! -> 유지보수하기 힘듬, 하지만 상황에따라 사용가능

//위의 코드 처럼 되는 이유 -> 자바스크립트 엔진은 아래처럼 해석하기 때문!!!

function myFunction(){
    console.log("hello world");
}
 myFunction();



console.log(number);    //이렇게만 할시 number is not defined 오류가 뜸
                        //하지만 아래에 변수를 선언해주면 undefined가 뜸
var number = 2;         


//위의 코드 처럼 되는 이유 -> 자바스크립트 엔진은 아래처럼 해석하기 떄문
var number;
console.log(number);
number = 2;     //즉 선언 후 호출하고 나중에 값을 설정하는 형태로 받아드림 
    
//BUT const나 let을 쓰면 변수에 대한 호이스팅은 일어나지않음!!!!!!!!
//함수에 대한 호이스팅 방지방법은  선언후 호출 하는 걸 습관화 들이거나
//                               이에셀인트(?!)도구를 사용하면 경고를 에디터상에서 알 수 있음



//정리!!! - 호이스팅을 방지해야하는 이유
//1.코드가  쉽게 헷갈려지고
//2.유지보수가 어려워지고
//3.의도치 않은 결과물이 나올 수 있기 때문

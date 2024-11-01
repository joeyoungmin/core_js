/* ---------------- */
/* Condition        */
/* ---------------- */

// const result = prompt("자바스크립트의 공식 이름은 무엇일까요?")
// if(result === "ECMAScript"){
//     console.log("정답입니다")
// }else{
//     console.log("몰랏나 정답은 ECMAScirpt")
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt('그영화봄?');

// 영화 볼거니?
let goingToWatchMovie = prompt('그영화 볼거니?');

// if 문(statement)
// else 절(clause)
// else if 복수 조건 처리
if (didWatchMovie === 'yes') {
  console.log('웅');
} else {
  if (goingToWatchMovie !== 'yes') {
    console.log('웅');
  } else {
    console.log('아니');
  }
}

// 조건부 연산자

console.log(
  didWatchMovie === 'yes' || goingToWatchMovie !== 'yes' ? '웅' : '아니'
);

// 멀티 조건부 연산자 식
let a = 1;
let b = 3;
let result = a + b < 4 ? (result = '미만') : (result = '이상');

let login;
let message =
  login == '직원'
    ? '안녕하세요'
    : login == '임원'
      ? '환영합니다'
      : login == ''
        ? '로그인이필요합니다.'
        : '';

import {
  diceAnimation,
  getNodes,
  getNode,
  insertLast,
  attr,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');

// [주사위 굴리기 버튼을 누르면 주사위가]
// 1. 주사위 굴리기 버튼을 선택하기
// 2. 클릭 이벤트 바인딩

// [애니메이션이 될 수 있도록 만들어 주세요]
// 1. setInterval
// 2. diceAnimation()

// [같은 버튼 눌렀을 때 ]
// 1. 상태 변수 true | false
// 2. 조건 처리

// [애니메이션이 재생 or 정지]
// 1. setInterval
// 2. clearInterval ( scope )

// [기록 버튼을 누르면]
// 1. recordButton에 클릭 이벤트 바인딩

// [table이 등장]
// 1. recordListWrapper에 hidden 속성 제어하기 (true | false)

// [table 안쪽에 tr 태그 랜더링]
// 1. 태그 만들기
// 2. insertLast 함수 사용하기 (tbody 안쪽에 랜더링)

// [table 안쪽에 tr 태그에 데이터를 넣고 랜더링]

{
  /* <tr>
<td>0</td>
<td>5</td>
<td>5</td>
</tr> */
}

let count = 0;

function renderRecordItem() {
  const diceNumber = attr(getNode('#cube'), 'dice');

  console.log(diceNumber);

  const template = `
    <tr>
      <td>${++count}</td>
      <td>5</td>
      <td>5</td>
    </tr>
  `;

  insertLast('tbody', template);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);

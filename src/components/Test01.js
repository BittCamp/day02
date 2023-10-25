import React from 'react';

const Test01 = () => {
    
    const test1 = () => { //함수 구현부 만 잡아놓음.
        alert('test1')
    }
    const test2 = () => {
        alert('test2')
    }
    const test3 = (num) => { 
        alert('num = ' + num) 
    }
    const test4 = (num) =>{
        alert(`num = ${num}`)
    }

    return (
        <div>
            <h2>이벤트 : on+첫 글자 대문자</h2>
            <p> 
                {/* test1() 이렇게  괄호 넣으면 무조건 실행됨. 온클릭이 아니라 새로고침시 작동함. */}
                <button onClick={ test1 }>클릭</button> 
                <button onClick={ test2 }>클릭2</button>
                <button onClick={ () => test3(10) }>클릭3</button> {/* () => 함수() 화살표 함수를 써야 ()를 써도 바로 호출이 안된다. */}
                <button onClick={ () => test4(20) }>클릭4</button>
            </p>
            <p>
                <button onClick={ () => {
                    console.log('호랑이')
                    console.log('기린')
                    console.log('사자')
                } }>클릭5</button>{/* 구현겸 호출임  */}
                <button onClick={() => console.log('빨강 사과') }>클릭6</button>
            </p>
        </div>
    );
};
/*
Hook ?

https://ko.reactjs.org/docs/hooks-state.html

Hook은 React 16.8버전에 새로 추가되었습니다.
Hook은 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용할 수 있습니다.

Hook의 개요

함수형 컴포넌트는 렌더링할때마다 내부의 것들을 기억하지 못한다.
다시 생성, 초기화 해야한다. (변수, 함수 등)

내부의 것들을 유지하기 위해서 hook이 등장했다 - useXXX

useState
- 값이 유동으로 변할 때
- const [상태데이터, 상태데이터의 값을 변경해주는 함수] = React.useState(초기값);
*/

export default Test01;
import React , {useState} from 'react';

const Test05 = () => {
    const [상태데이터 , 변경함수] = useState(1)
    const onAdd = () => {
        변경함수(상태데이터 + 1) //새롭게 이함수를 통해서 1씩 증가하게 된다.
    }
    const onSub = () => {
        변경함수(상태데이터 - 1)
    }
    const onReset  = () =>{
        변경함수(1)
    }
    return (
        <div>
            <h2>숫자 : {상태데이터} </h2>
            <p>
                <button onClick={ onAdd }>1씩 증가</button>
                <button onClick={ onSub }>1씩 감소</button>
                <button onClick={ onReset }>초기화</button>
            </p>
        </div>
    );
};

export default Test05;
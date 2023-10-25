import React , {useState} from 'react' ;

const Test04 = () => {
    const [visible, setVisible] = React.useState(true)
    const onShow = () => {
        setVisible(true)
    } 
    const onHide = () => {
        setVisible(false)
    }
    const onToggle = () => {
        //visible ? setVisible(false) : setVisible(true) 누를때 마다 visible을 반대로 바뀌게 하는것.
        setVisible(!visible) // visible 부정. 같은의미임.
    }
    
    return (
        <div>
            <button onClick={ onShow }>보이기</button>
            <button onClick={ onHide }>숨기기</button>
            <button onClick={ onToggle }>{visible?'숨기기' : '보이기'}</button>
            <hr/>
            {  
                //조건 ? 참 : 거짓
                //visible ? <div style={{ width:300, height: 300, margin: 20 , background: 'hotpink' }} ></div> :  null
                
                visible &&<div style={{ width:300, height: 300, margin: 20 , background: 'hotpink' }} ></div>
            }
        </div>
    );
};

export default Test04;
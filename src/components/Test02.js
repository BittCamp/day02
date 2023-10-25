import React from 'react';

const Test02 = () => {
    const title = '신상명세서'
    const arr = ['홍길동','코난','둘리','라이언','네오']
    const data = [
        {id: 1, name: '홍길동'},
        {id: 2, name: '코난'},
        {id: 3, name: '둘리'},
        {id: 4, name: '라이언'},
        {id: 5, name: '네오'},
    ]
    return (
        <div>
            <h2>{title}</h2> {/* 객체를 잡아주고 title 이라고 하면 나온다. */}
            <ul style={{ border : '1px solid red' }}>
                { 
                    arr.map((item,index)=>  { 
                        // key 안넣으면 key 넣으라고 에러남.
                        return (<li key={index}>{index} :  {item} </li>)
                    })
                  
                }
            </ul>
            <hr/>
            {/* 제이슨 객체랑 배열의 차이임. */}
            <ul>
                {   //key값은 반드시 써야함.
                    data.map((item,index)=> { 
                        return(<li key={item.id}> {item.id} : {item.name} </li>)
                    })
                }
                <hr/>    
                {
                    
                    data.map(item => { //id 가 인덱스의 역할을 함.
                      return (<li key={item.id}> {item.id} : {item.name} </li>)  
                    })
                }
            </ul>  
        </div>
    );
};

export default Test02;
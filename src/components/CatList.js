import React from 'react';
import CatItem from './CatItem';
const CatList = ({data}) => { //Cat.js에서 데이터 넘어옴.
    return (
        <div className='list2Wrapper'>
            <ul className='list2'>
                {
                    data.map(item => <CatItem item={item}/>)
                }
            </ul>
        </div>
    );
};

export default CatList;
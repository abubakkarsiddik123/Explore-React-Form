import React, { use } from 'react';
import Spacial from './Spacial';
import Friend from './Friend';
import { MoneyContext } from './FamilyTree';

const Cousin = ({name ,asset}) => {
    const [money,setMoney]=use(MoneyContext);
    return (
        <div>
            <h3>{name}</h3>

            {
                name==="Rakib"  && <Spacial asset={asset}/>
            }
            {
                name === "Manik" && <Friend></Friend>
            }
            {
                name === "Sultal" && <button onClick={()=>setMoney(money - 500)} className='btn' >sub 500 tk</button>
            }
        </div>
    );
};

export default Cousin;
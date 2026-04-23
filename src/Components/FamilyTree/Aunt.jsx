import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {

    const [money,setMoney]=use(MoneyContext);
    const handleAddMoney =()=>{
        setMoney(money + 50000)
    }

    return (
        <div>
          <h3>Aunty</h3> 
           <button onClick={handleAddMoney} className='btn'>Add 50000 tk</button> 
          <section className='flex'>
            <Cousin asset={asset} name="Rakib"/>
            <Cousin name="Manik"/>
          </section>
        </div>
    );
};

export default Aunt;
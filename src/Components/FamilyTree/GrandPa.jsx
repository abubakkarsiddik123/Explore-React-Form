import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const GrandPa = ({asset}) => {
    return (
        <div >
            <h3>GrandPa</h3>
            <section className='flex'>
                <Dad asset={asset}/>
                <Uncle/>
                <Aunt asset={asset}/>
            </section>
        </div>
    );
};

export default GrandPa;
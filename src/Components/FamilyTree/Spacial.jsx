import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Spacial = ({name,asset}) => {
    const newAsset=useContext(AssetContext);
    console.log("newAsset",newAsset);
    return (
        <div>
            <h3>Spacial:{name} </h3>
            <p>Asset:{asset} </p>
            <p>newAsset:{newAsset}</p>
        </div>
    );
};

export default Spacial;
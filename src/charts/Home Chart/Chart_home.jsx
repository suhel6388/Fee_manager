import React from 'react';
import Barchart from '../Barchart';

const ChartHome = () => {
 
    return (
        <div className='mt-20'>
            <Barchart width={900} height={300} fill = {'orange'} />
        </div>
    );
}

export default ChartHome;

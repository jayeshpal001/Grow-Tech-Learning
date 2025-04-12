import React from 'react'
import { Cards } from './Cards';

export const Home = ({ data }) => {
    console.log("This is home", data);

    return (
        <div >
            <div >
                {
                    data?.map((myData, inx) => {
                        return <Cards key={inx} myData={myData} />
                    })
                }
            </div>


        </div>
    );
}

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const Form2D = (prop) => {
    let navigate = useNavigate()
    let location=useLocation()

    const goToPdfPage = () => {

        let GraphData={
                rightOpts: prop.rightOpt,
                leftOpts: prop.leftOpt,
                rightData: prop.rightData,
                leftData: prop.leftData
        }
        navigate('/pdf',{state:GraphData})
    }
    return (
        <>


            {/* Graph area */}
            <div className='m-10 md:flex justify-between'>
                {/* Right ear graph */}
                <div className='w-[90%]'>
                    <Line options={prop.rightOpt} data={prop.rightData} />
                </div>
                {/* Left ear graph */}
                <div className='w-[90%]'>
                    <Line options={prop.leftOpt} data={prop.leftData} />
                </div>

            </div>
            <div className='text-center'>
               {location.pathname!='/pdf' && <button onClick={goToPdfPage} className='px-6 py-1 rounded-md text-white font-bold hover:border-black hover:border-2 m-2 bg-blue-600 shadow-lg ' >Next</button>}

            </div>

        </>
    );
};

export default Form2D;

import React from 'react';
import { Pie } from 'react-chartjs-2';

const GraphicPie = () => {
    const data = {
        labels: ['Patients 2019', 'Patients 2020'],
        datasets: [
            {
                data: [1586, 2310],
                backgroundColor: ['#336cfb', '#fac032'],
            },
        ],
    };
    const options = {
        resposive: true,
        title: {
            display: true,
            text: 'Hospital Survey',
            fontSize: 20,
        },
    };

    return (
        <div>
            <Pie data={data} options={options} />
        </div>
    );
};

export default GraphicPie;

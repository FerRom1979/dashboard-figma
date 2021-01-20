import React from 'react';
import * as style from './style';
import { Line } from 'react-chartjs-2';

const SurveyGraph = () => {
    const { DivContainer } = style;
    const data = {
        labels: [
            '2020-1',
            '2020-2',
            '2020-3',
            '2020.4',
            '2020-5',
            '2020-6',
            '2020-7',
            '2020-8',
            '2020-9',
            '2020-10',
            '2020-11',
            '2020-12',
        ],
        datasets: [
            {
                label: 'Patients 2019',
                background:
                    'linear-gradient(180deg, rgba(51, 108, 251, 0.2) 0%, rgba(51, 108, 251, 0.02) 100%)',
                borderColor: '#336cfb',
                borderWidht: 1,
                data: [150, 100, 200, 111, 180, 140, 180, 170, 155, 190, 220, 280],
            },
        ],
    };
    const options = {
        maintainAspesctRatio: false,
        title: {
            display: true,
            text: 'hospital',
        },
    };
    return (
        <DivContainer>
            <div style={{ height: '350px' }}>
                <Line data={data} options={options} />
            </div>
        </DivContainer>
    );
};

export default SurveyGraph;

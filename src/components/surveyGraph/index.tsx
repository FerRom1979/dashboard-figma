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
            '2020-4',
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
                borderWidth: 1,
                data: [150, 100, 200, 111, 180, 140, 180, 170, 155, 190, 220, 240],
            },
            {
                label: 'Patients 2020',
                borderColor: '#fac032',
                borderWidth: 1,
                fill: false,
                data: [50, 100, 150, 171, 160, 130, 170, 180, 165, 110, 190, 210],
            },
        ],
    };
    const options = {
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        maintainAspectRatio: false,
        responsive: true,
        title: {
            display: true,
            text: 'Hospital Survey',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#25282b',
            align: 'start',
        },

        legend: {
            align: 'end',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 16,
            color: '#a0a4a8',
            labels: {
                boxWidth: 40,
                padding: 10,
                boxHeight: 1,
            },
        },
        tooltips: {
            titleAlign: 'right',
        },
        elements: {
            line: {
                borderWidth: 1,
                padding: 10,
                fill: false,
            },
            point: {
                cursor: 'pointer',
            },
        },
    };
    return (
        <DivContainer>
            <div style={{ height: '374px' }}>
                <Line data={data} options={options} />
            </div>
        </DivContainer>
    );
};

export default SurveyGraph;

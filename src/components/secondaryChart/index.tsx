import React from 'react';
import { Line } from 'react-chartjs-2';
import { IPropsGraphic } from '../../types';
import * as style from './style';

const SecondaryChart = ({ title, legend, dataLabel, dataSet, borderColor }: IPropsGraphic) => {
    const { Container } = style;
    const data = {
        labels: dataLabel,
        datasets: [
            {
                label: `${legend}`,
                borderColor: `${borderColor}`,
                borderWidth: 1,
                data: dataSet,
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
            text: `${title}`,
            fontFamily: 'Lato',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            textAlign: 'left',
        },
        legend: {
            align: 'end',
            fontFamily: 'Lato',
            fontWeight: 700,
            fontStyle: 'normal',
            padding: {
                right: 40,
            },
            fontSize: 12,
            lineHeight: 16,
            color: '#a0a4a8',
            labels: {
                boxWidth: 0,
                /* paddingRight: 20, */
                boxHeight: 1,
                padding: 20,
            },
        },
        tooltips: {
            titleAlign: 'left',
        },
        elements: {
            line: {
                borderWidth: 1,
                padding: 10,
                fill: false,
            },
        },
    };
    return (
        <Container>
            <Line data={data} options={options} />
        </Container>
    );
};

export default SecondaryChart;

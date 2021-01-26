/* eslint-disable react/prop-types */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { IPropsGraphic } from '../../types';
import * as style from './style';

const SecondaryCrart: React.FC<IPropsGraphic> = ({
    title,
    legend,
    dataLabel,
    dataSet,
    borderColor,
}) => {
    const { DivContainer } = style;
    const data = {
        labels: dataLabel,
        datasets: [
            {
                label: `${legend}`,
                borderColor: `${borderColor}`,
                borderWidht: 1,
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
            textAling: 'left',
        },
        legend: {
            align: 'end',
            fontFamily: 'Lato',
            fontWeight: 700,
            fontStyle: 'normal',
            padding: {
                rigth: 40,
            },
            fontSize: 12,
            lineHeight: 16,
            color: '#a0a4a8',
            labels: {
                boxWidth: 0,
                paddingRigth: 20,
                boxHeinght: 1,
            },
        },
        tooltips: {
            titleAlign: 'left',
        },
        elements: {
            line: {
                borderWidh: 1,
                padding: 10,
                fill: false,
            },
        },
    };
    return (
        <DivContainer>
            <Line data={data} options={options} />
        </DivContainer>
    );
};

export default SecondaryCrart;

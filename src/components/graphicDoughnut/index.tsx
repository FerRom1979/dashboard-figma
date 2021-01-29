import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { IPropsGraphic } from '../../types';

const GraphicDoughnut = ({ title, legend, dataLabel, dataSet, borderColor }: IPropsGraphic) => {
    const data = {
        labels: dataLabel,
        datasets: [
            {
                label: `${legend}`,
                data: dataSet,
                backgroundColor: [
                    `${borderColor}`,
                    '#2471a3',
                    '#28b463',
                    '#d68910',
                    '#34495e',
                    '#c0392b',
                ],
            },
        ],
    };
    const options = {
        responsive: true,
        title: {
            display: true,
            text: `${title}`,
            fontSize: 20,
        },
    };

    return <Doughnut data={data} options={options} />;
};

export default GraphicDoughnut;

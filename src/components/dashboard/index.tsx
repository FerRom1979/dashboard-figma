import React from 'react';
import Navigation from '../navigation/index';
import Header from '../header/index';
import Card from '../card/index';
import SurveyGraph from '../surveyGraph/index';
import SecondaryChart from '../secondaryChart/index';
import BasicTable from '../table/basicTable';
import GraphicPie from '../graphicPie/index';
import GraphicDoughnut from '../graphicDoughnut/index';
import * as style from './style';
import {
    faBriefcaseMedical,
    faUserInjured,
    faProcedures,
    faUniversity,
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const { ResponsiveDiv, DivContainer, DivCard, DivSecondaryChart } = style;
    const dataLabel = ['1 July', '8 July', '16 July', '24 July', '31 July'],
        dataSet = [60000, 70000, 35000, 63000, 42000],
        title = '$100,000',
        legend = 'Income in current month',
        borderColor = '#336cfb',
        dataLabelTwo = [
            '25 July',
            '26 July',
            '27 July',
            '28 July',
            '29 July',
            '30 July',
            '31 July',
        ],
        dataSetTwo = [62000, 38000, 59000, 41000, 78000, 20000, 53000],
        titleTwo = '$25,000',
        legendTwo = 'Income in current week',
        borderColorTwo = '#fac032';

    return (
        <DivContainer>
            <ResponsiveDiv displayDesktop={'none'}>
                <Navigation />
            </ResponsiveDiv>
            <div>
                <ResponsiveDiv displayDesktop={'none'}>
                    <Header />
                </ResponsiveDiv>
                <DivCard>
                    <Card title={'Appointments'} people={'213'} logo={faBriefcaseMedical} />
                    <Card title={'New Patients'} people={'104'} logo={faUserInjured} />
                    <Card title={'Operation'} people={'24'} logo={faProcedures} />
                    <Card title={'Hospital Earnings'} people={'$12,74'} logo={faUniversity} />
                </DivCard>
                <SurveyGraph />
                <ResponsiveDiv displayTable={'block'} display={'none'} width={100}>
                    <GraphicPie />
                </ResponsiveDiv>
                <DivSecondaryChart>
                    <SecondaryChart
                        dataLabel={dataLabel}
                        dataSet={dataSet}
                        title={title}
                        legend={legend}
                        borderColor={borderColor}
                    />
                    <SecondaryChart
                        dataLabel={dataLabelTwo}
                        dataSet={dataSetTwo}
                        title={titleTwo}
                        legend={legendTwo}
                        borderColor={borderColorTwo}
                    />
                </DivSecondaryChart>
                <ResponsiveDiv displayTable={'block'} display={'none'}>
                    <GraphicDoughnut
                        dataLabel={dataLabel}
                        dataSet={dataSet}
                        title={title}
                        legend={legend}
                        borderColor={borderColor}
                    />
                    <GraphicDoughnut
                        dataLabel={dataLabelTwo}
                        dataSet={dataSetTwo}
                        title={titleTwo}
                        legend={legendTwo}
                        borderColor={borderColorTwo}
                    />
                </ResponsiveDiv>
                <BasicTable />
            </div>
        </DivContainer>
    );
};

export default Dashboard;

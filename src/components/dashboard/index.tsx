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
import * as data from './data';

const Dashboard = () => {
    const { Responsive, Container, WrapperCard, WrapperSecondaryChart } = style;
    const {
        dataLabel,
        dataSet,
        title,
        legend,
        borderColor,
        dataLabelTwo,
        dataSetTwo,
        legendTwo,
        titleTwo,
        borderColorTwo,
    } = data;

    return (
        <Container>
            <Responsive displayDesktop={'none'}>
                <Navigation />
            </Responsive>
            <div>
                <Responsive displayDesktop={'none'}>
                    <Header />
                </Responsive>
                <WrapperCard>
                    <Card title={'Appointments'} people={'213'} logo={faBriefcaseMedical} />
                    <Card title={'New Patients'} people={'104'} logo={faUserInjured} />
                    <Card title={'Operation'} people={'24'} logo={faProcedures} />
                    <Card title={'Hospital Earnings'} people={'$12,74'} logo={faUniversity} />
                </WrapperCard>
                <SurveyGraph />
                <Responsive displayTable={'block'} display={'none'} width={100}>
                    <GraphicPie />
                </Responsive>
                <WrapperSecondaryChart>
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
                </WrapperSecondaryChart>
                <Responsive displayTable={'block'} display={'none'}>
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
                </Responsive>
                <BasicTable />
            </div>
        </Container>
    );
};

export default Dashboard;

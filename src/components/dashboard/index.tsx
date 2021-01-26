import React from 'react';
import Navigation from '../navigation/index';
import Header from '../header/index';
import Card from '../card/index';
import SurveyGraph from '../surveyGraph/index';
import SecondaryChatr from '../secondaryChart/index';
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
    const {
        DivContainer,
        DivCard,
        DivSecondaryChart,
        DivResponsive,
        GraphicDiv,
        GraphicDougDiv,
    } = style;
    const dataLabel = ['1 July', '8 July', '16 July', '24 July', '31 July'],
        dataSet = [60000, 70000, 35000, 63000, 42000],
        title = '$100,000',
        legend = 'Income in current month',
        borderColor = '#336cfb',
        dataLabeltwo = [
            '25 July',
            '26 July',
            '27 July',
            '28 July',
            '29 July',
            '30 July',
            '31 July',
        ],
        dataSettwo = [62000, 38000, 59000, 41000, 78000, 20000, 53000],
        titletwo = '$25,000',
        legendtwo = 'Income in current week',
        borderColortwo = '#fac032';
    return (
        <DivContainer>
            <DivResponsive>
                <Navigation />
            </DivResponsive>
            <div>
                <DivResponsive>
                    <Header />
                </DivResponsive>
                <DivCard>
                    <Card title={'Appointments'} people={'213'} logo={faBriefcaseMedical} />
                    <Card title={'New Patients'} people={'104'} logo={faUserInjured} />
                    <Card title={'Operatios'} people={'24'} logo={faProcedures} />
                    <Card title={'Hospital Earnings'} people={'$12,74'} logo={faUniversity} />
                </DivCard>
                <SurveyGraph />
                <GraphicDiv>
                    <GraphicPie />
                </GraphicDiv>
                <DivSecondaryChart>
                    <SecondaryChatr
                        dataLabel={dataLabel}
                        dataSet={dataSet}
                        title={title}
                        legend={legend}
                        borderColor={borderColor}
                    />
                    <SecondaryChatr
                        dataLabel={dataLabeltwo}
                        dataSet={dataSettwo}
                        title={titletwo}
                        legend={legendtwo}
                        borderColor={borderColortwo}
                    />
                </DivSecondaryChart>
                <GraphicDougDiv>
                    <GraphicDoughnut
                        dataLabel={dataLabel}
                        dataSet={dataSet}
                        title={title}
                        legend={legend}
                        borderColor={borderColor}
                    />
                    <GraphicDoughnut
                        dataLabel={dataLabeltwo}
                        dataSet={dataSettwo}
                        title={titletwo}
                        legend={legendtwo}
                        borderColor={borderColortwo}
                    />
                </GraphicDougDiv>
                <BasicTable />
            </div>
        </DivContainer>
    );
};

export default Dashboard;

import React from 'react';
import Navigation from '../navigation/index';
import Header from '../header/index';
import Card from '../card/index';
import SurveyGraph from '../surveyGraph/index';
import * as style from './style';

import {
    faBriefcaseMedical,
    faUserInjured,
    faProcedures,
    faUniversity,
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const { DivContainer, DivCard } = style;
    return (
        <DivContainer>
            <Navigation />
            <div>
                <div>
                    <Header />
                </div>
                <DivCard>
                    <Card title={'Appointments'} people={'213'} logo={faBriefcaseMedical} />
                    <Card title={'New Patients'} people={'104'} logo={faUserInjured} />
                    <Card title={'Operatios'} people={'24'} logo={faProcedures} />
                    <Card title={'Hospital Earnings'} people={'$12,74'} logo={faUniversity} />
                </DivCard>
                <div>
                    <SurveyGraph />
                </div>
            </div>
        </DivContainer>
    );
};

export default Dashboard;

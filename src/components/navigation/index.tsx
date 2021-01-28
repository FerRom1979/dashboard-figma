import React from 'react';
import * as style from './style';
import Logo from '../../assets/img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartPie,
    faStethoscope,
    faUserMd,
    faUserNurse,
    faWheelchair,
    faCreditCard,
    faQuestionCircle,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const {
        DivContainer,
        LogoDiv,
        ImgLogo,
        DivNavDashboard,
        SubTitleNav,
        DivList,
        Label,
        DivListNav,
        LabelList,
        SpanListNav,
        SpanListDash,
        Hr,
        DivNoneList,
        LabelNoneIcon,
    } = style;

    return (
        <DivContainer>
            <LogoDiv>
                <ImgLogo src={Logo} alt="logo" /> <span>Healthcare</span>
            </LogoDiv>
            <DivNavDashboard>
                <SubTitleNav>MEDICINE</SubTitleNav>
                <DivList>
                    <SpanListDash>
                        <FontAwesomeIcon icon={faChartPie} />
                    </SpanListDash>
                    <Label>Dashboard</Label>
                </DivList>
            </DivNavDashboard>
            <DivListNav>
                <SpanListNav>
                    <FontAwesomeIcon icon={faStethoscope} />
                </SpanListNav>
                <LabelList>Appointments</LabelList>
            </DivListNav>
            <DivListNav>
                <SpanListNav>
                    <FontAwesomeIcon icon={faUserMd} />
                </SpanListNav>
                <LabelList>Doctors</LabelList>
            </DivListNav>
            <DivListNav>
                <SpanListNav>
                    <FontAwesomeIcon icon={faUserNurse} />
                </SpanListNav>
                <LabelList>Departments</LabelList>
            </DivListNav>
            <DivListNav>
                <SpanListNav>
                    <FontAwesomeIcon icon={faWheelchair} />
                </SpanListNav>
                <LabelList>Patients</LabelList>
            </DivListNav>
            <DivListNav>
                <SpanListNav>
                    <FontAwesomeIcon icon={faCreditCard} />
                </SpanListNav>
                <LabelList>Payments</LabelList>
            </DivListNav>
            <DivNoneList>
                <DivListNav>
                    <LabelList>ServicePages</LabelList>
                    <LabelNoneIcon>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </LabelNoneIcon>
                </DivListNav>
            </DivNoneList>
            <Hr />
            <DivListNav>
                <SpanListNav>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                </SpanListNav>
                <LabelList>Help</LabelList>
            </DivListNav>
        </DivContainer>
    );
};

export default Navigation;

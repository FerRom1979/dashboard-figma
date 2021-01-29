import React from 'react';
import * as style from './style';
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
import logo from '../../assets/img/logo.jpg';

const Navigation = () => {
    const {
        Container,
        Logo,
        ImgLogo,
        NavDashboard,
        SubTitleNav,
        List,
        Label,
        ListNav,
        LabelList,
        IconWrapperListNav,
        IconWrapperListDash,
        Hr,
        DivNoneList,
        IconWrapperNoneIcon,
        WrapperNameLogo,
    } = style;

    return (
        <Container>
            <Logo>
                <ImgLogo src={logo} alt="logo" /> <WrapperNameLogo>Healthcare</WrapperNameLogo>
            </Logo>
            <NavDashboard>
                <SubTitleNav>MEDICINE</SubTitleNav>
                <List>
                    <IconWrapperListDash>
                        <FontAwesomeIcon icon={faChartPie} />
                    </IconWrapperListDash>
                    <Label>Dashboard</Label>
                </List>
            </NavDashboard>
            <ListNav>
                <IconWrapperListNav>
                    <FontAwesomeIcon icon={faStethoscope} />
                </IconWrapperListNav>
                <LabelList>Appointments</LabelList>
            </ListNav>
            <ListNav>
                <IconWrapperListNav>
                    <FontAwesomeIcon icon={faUserMd} />
                </IconWrapperListNav>
                <LabelList>Doctors</LabelList>
            </ListNav>
            <ListNav>
                <IconWrapperListNav>
                    <FontAwesomeIcon icon={faUserNurse} />
                </IconWrapperListNav>
                <LabelList>Departments</LabelList>
            </ListNav>
            <ListNav>
                <IconWrapperListNav>
                    <FontAwesomeIcon icon={faWheelchair} />
                </IconWrapperListNav>
                <LabelList>Patients</LabelList>
            </ListNav>
            <ListNav>
                <IconWrapperListNav>
                    <FontAwesomeIcon icon={faCreditCard} />
                </IconWrapperListNav>
                <LabelList>Payments</LabelList>
            </ListNav>
            <DivNoneList>
                <ListNav>
                    <LabelList>ServicePages</LabelList>
                    <IconWrapperNoneIcon>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </IconWrapperNoneIcon>
                </ListNav>
            </DivNoneList>
            <Hr />
            <ListNav>
                <IconWrapperListNav>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                </IconWrapperListNav>
                <LabelList>Help</LabelList>
            </ListNav>
        </Container>
    );
};

export default Navigation;

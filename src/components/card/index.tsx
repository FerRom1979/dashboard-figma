import React from 'react';
import { IPropsCard } from '../../types';
import * as style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, people, logo }: IPropsCard) => {
    const { Container, PCard, PCardNumber, IconWrapper, SectionCard } = style;

    return (
        <Container>
            <SectionCard marginLeft={24} marginTop={24}>
                <IconWrapper>
                    <FontAwesomeIcon icon={logo} />
                </IconWrapper>
            </SectionCard>
            <SectionCard marginLeft={24}>
                <PCard>{title}</PCard>
                <PCardNumber>{people}</PCardNumber>
            </SectionCard>
        </Container>
    );
};

export default Card;

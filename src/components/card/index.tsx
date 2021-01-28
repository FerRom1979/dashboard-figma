/* eslint-disable react/prop-types */
import React from 'react';
import { IPropsCard } from '../../types';
import * as style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card: React.FC<IPropsCard> = ({ title, people, logo }) => {
    const { DivContainer, PCard, PCardNumber, SpanIcon, DivSectionCard } = style;

    return (
        <DivContainer>
            <DivSectionCard marginLeft={24} marginTop={24}>
                <SpanIcon>
                    <FontAwesomeIcon icon={logo} />
                </SpanIcon>
            </DivSectionCard>
            <DivSectionCard marginLeft={24}>
                <PCard>{title}</PCard>
                <PCardNumber>{people}</PCardNumber>
            </DivSectionCard>
        </DivContainer>
    );
};

export default Card;

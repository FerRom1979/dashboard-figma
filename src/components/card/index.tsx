/* eslint-disable react/prop-types */
import React from 'react';
import { IPropsCard } from '../../types';
import * as style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card: React.FC<IPropsCard> = ({ title, people, logo }) => {
    const { DivContainer, PCard, PCardNumber, DivIcon, DivInfo, SpanIcon } = style;

    return (
        <DivContainer>
            <DivIcon>
                <SpanIcon>
                    <FontAwesomeIcon icon={logo} />
                </SpanIcon>
            </DivIcon>
            <DivInfo>
                <PCard>{title}</PCard>
                <PCardNumber>{people}</PCardNumber>
            </DivInfo>
        </DivContainer>
    );
};

export default Card;

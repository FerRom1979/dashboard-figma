/* eslint-disable react/prop-types */
import React from 'react';
import { IPropsCard } from '../../types';
import * as style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card: React.FC<IPropsCard> = ({ title, people, logo }) => {
    const { DivContainer, PCard, PCardNumber, SpanIcon, DivBodyCard } = style;

    return (
        <DivContainer>
            <DivBodyCard marginLeft={26.5} marginTop={26.26}>
                <SpanIcon>
                    <FontAwesomeIcon icon={logo} />
                </SpanIcon>
            </DivBodyCard>
            <DivBodyCard marginLeft={26.49}>
                <PCard>{title}</PCard>
                <PCardNumber>{people}</PCardNumber>
            </DivBodyCard>
        </DivContainer>
    );
};

export default Card;

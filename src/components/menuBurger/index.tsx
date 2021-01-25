import React, { useState } from 'react';
import * as style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../navigation/index';

const MenuHamburguer = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [navMenu, setNavMenu] = useState<string>('');
    const { DivMenu, DivNav, Button, SpanButton } = style;
    const openClose = () => {
        setOpen(!open);
        if (open === true) setNavMenu('block');
        if (open === false) setNavMenu('none');
    };

    return (
        <div>
            <DivMenu id="menu">
                <Button onClick={openClose}>
                    <SpanButton>
                        <FontAwesomeIcon icon={faBars} />
                    </SpanButton>
                </Button>
            </DivMenu>
            <DivNav style={{ display: `${navMenu}` }}>
                <Navigation />
            </DivNav>
        </div>
    );
};

export default MenuHamburguer;

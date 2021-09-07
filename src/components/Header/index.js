import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../images/react-movie-logo.svg';
import MDBLogo from '../../images/test.svg';


import { Wrapper, Content, LogoImg, MDBLogoImg } from './Header.style';

const Header = () =>(
    <Wrapper>
        <Content>
        <Link to="/">
        <LogoImg src={Logo} alt="logo" />
        </Link>
    
            <MDBLogoImg src={MDBLogo} alt="mdb-logo" />
       </Content>
    </Wrapper>
)
export default Header;
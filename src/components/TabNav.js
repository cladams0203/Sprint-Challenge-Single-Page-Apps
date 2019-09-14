import React from "react";
import styled from 'styled-components';

import { NavLink } from "react-router-dom";

const Menu = styled.div `
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`
const Link = styled(NavLink)`
    text-decoration: none;
    font-size: 1.5rem;
    color:black;
    
`


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

    return(
    <Menu>
        <Link exact to={`/`}>Home</Link>
        <Link to={`/characters`}>Character</Link>
        <Link to={`/locations`}>Location</Link>
        <Link to={`/episodes`}>Episodes</Link>
    </Menu>
    )
};

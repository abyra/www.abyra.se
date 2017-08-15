import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import List from "./List";

const Nav = styled.nav``;

class NavLink {
    constructor(path) {
        this.raw_path = path;
    }

    get Path() {
        return this.raw_path.replace("å", "a");
    }

    get DisplayName() {
        return this.raw_path[0].toUpperCase() + this.raw_path.slice(1);
    }
}

const navLinks = [
    new NavLink("medarbetare"),
    new NavLink("verksamhetsområden"),
    new NavLink("aktuellt"),
    new NavLink("kontakt")
];

class MainNavigation extends React.Component {
    static defaultProps = {
        onRouteChange: () => {}
    };

    render() {
        return (
            <Nav>
                <List items={navLinks}>
                    {({ item }) =>
                        <Link onClick={this.props.onRouteChange} to={item.Path}>
                            {item.DisplayName}
                        </Link>}
                </List>
            </Nav>
        );
    }
}

export default MainNavigation;

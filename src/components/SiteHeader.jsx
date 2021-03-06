import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import Logo from "./Logo";
import Link from "gatsby-link";
import Media from "react-media";
import styled from "styled-components";

const NavLink = styled(Link)`align-self: flex-end;`;

const main_navigation = [
    {
        title: "Hem",
        slug: ""
    },
    {
        title: "Verksamhetsområden",
        slug: "verksamhetsomraden"
    },
    {
        title: "Medarbetare",
        slug: "medarbetare"
    },
    {
        title: "Aktuellt",
        slug: "aktuellt"
    },
    {
        title: "Kontakt",
        slug: "kontakt"
    }
];

const Navigation = ({ ...props }) => (
    <Menu borderless size="large">
        <Menu.Item>
            <Link to="/">
                <Logo />
            </Link>
        </Menu.Item>
        {props.children}
    </Menu>
);

const CompactNavigation = ({ ...props }) => (
    <Menu borderless>
        <Menu.Item>
            <Link to="/">
                <Logo small />
            </Link>
        </Menu.Item>
        <Menu.Menu position="right">
            <Dropdown item pointing icon="bars">
                <Dropdown.Menu>{props.children}</Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

export default () => (
    <Media query="(min-width: 992px)">
        {matches =>
            matches ? (
                <Navigation>
                    {main_navigation.map((item, index) => (
                        <Menu.Item
                            key={index}
                            as={NavLink}
                            to={`/${item.slug}`}
                            activeClassName="active"
                            exact>
                            {item.title.toLocaleUpperCase()}
                        </Menu.Item>
                    ))}
                </Navigation>
            ) : (
                <CompactNavigation>
                    {main_navigation.map((item, index) => (
                        <Dropdown.Item
                            key={index}
                            as={Link}
                            to={`/${item.slug}`}>
                            {item.title.toLocaleUpperCase()}
                        </Dropdown.Item>
                    ))}
                </CompactNavigation>
            )}
    </Media>
);

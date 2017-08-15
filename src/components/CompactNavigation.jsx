import React from "react";
import styled from "styled-components";
import { Fixed, Box, Flex, Drawer, ButtonTransparent, Heading } from "rebass";
import MenuIcon from "react-icons/lib/md/menu";
import MainNavigation from "./MainNavigation";

class CompactMenu extends React.Component {
    state = {
        isOpened: false
    };

    static defaultProps = {
        position: "left"
    };

    toggle = () => {
        this.setState({ isOpened: !this.state.isOpened });
    };

    render() {
        return (
            <div>
                <ButtonTransparent f="40px" onClick={this.toggle}>
                    <MenuIcon />
                </ButtonTransparent>
                {this.state.isOpened &&
                    <Fixed top right bottom left onClick={this.toggle} />}
                <Drawer
                    open={this.state.isOpened}
                    position={this.props.position}
                    p={3}
                    color="white"
                    bg="rgba(55, 64, 71, 0.91)"
                    z={2}>
                    <MainNavigation onRouteChange={this.toggle} />
                </Drawer>
            </div>
        );
    }
}

export default CompactMenu;

import React from "react";
import styled from "styled-components";

const UnorderedList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

class List extends React.Component {
    render() {
        const { items } = this.props;

        if (items && items.length && items.length > 0) {
            return (
                <UnorderedList>
                    {items.map((item, index) =>
                        <li key={index}>
                            {this.props.children({ item })}
                        </li>
                    )}
                </UnorderedList>
            );
        } else {
            return null;
        }
    }
}

export default List;

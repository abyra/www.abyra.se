import styled from "styled-components";
import { Image, Transformation } from "cloudinary-react";
import React from "react";

export const Page = styled.article`
    > header {
        display: flex;
        justify-content: center;

        > h1 {
            text-transform: uppercase;
            margin: 0;
        }
    }
`;

const PageHeader = ({ image, children }) =>
    <header>
        <Image publicId={image}>
            <Transformation overlay={`text:Arial_100:${children}`} />
        </Image>
    </header>;

Page.Header = PageHeader;

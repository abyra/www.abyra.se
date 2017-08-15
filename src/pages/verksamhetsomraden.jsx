import React from "react";
import { Page, Text } from "../components";
import areas from "../business-areas";
import { List, Icon } from "semantic-ui-react";

const BusinessAreas = ({ areas }) =>
    <List relaxed divided>
        {areas.map((area, index) =>
            <List.Item key={index}>
                <Icon name="tag" />
                <List.Content>
                    <List.Header>
                        {area.DisplayName}
                    </List.Header>
                    <List.Description>
                        {area.Description}
                    </List.Description>
                </List.Content>
            </List.Item>
        )}
    </List>;

export default class extends React.Component {
    render() {
        return (
            <Page
                title="Verksamhetsområden"
                bg="http://res.cloudinary.com/abyra-se/image/upload/hemsida/verksamhetsomraden.jpg">
                
                    <Text>
                        Vi är en ung, modern och kompetent advokatbyrå med en
                        bred kunskapsbas och med stor erfarenhet inom våra
                        specialområden. Vi erbjuder kvalificerad juridisk
                        rådgivning till såväl företag som privatpersoner. Vi har
                        ett prestigelöst arbetssätt och tillsammans kompletterar
                        vi varandra väl, såväl professionellt som personligt.
                    </Text>
                    <Text mt={1}>Våra specialområden är följande:</Text>
                    <BusinessAreas areas={areas} />
                    <Text mt={1}>
                        Vi anser att delad kunskap också är en kostnadseffektiv
                        och viktig väg till framgång. Vi arbetar därför i stor
                        utsträckning som ett team för att våra klienter skall få
                        ta del av advokatbyråns och dess kontaktnäts samlade
                        kunskap.
                    </Text>

            </Page>
        );
    }
}

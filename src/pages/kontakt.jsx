import React from "react";
import { Page } from "../components";
import { Icon, Label, Divider, Header } from "semantic-ui-react";
import styled from "styled-components";

const Maps = styled.div`
    display: flex;
    flex-direction: column;

    > * + * {
        margin-top: 5%;
    }

    @media (min-width: 992px) {
        justify-content: space-between;
        flex-direction: row;
        align-items: baseline;

        > * + * {
            margin-left: 2%;
            margin-top: 0;
        }

        > .map {
            width: 50%;
        }
    }
`;

const Map = ({ src, title }) => (
    <div className="map">
        <Header as="h3">{title}</Header>
        <iframe
            title={title}
            src={src}
            frameBorder="0"
            style={{ border: 0, minHeight: "450px", width: "100%" }}
            allowFullScreen
        />
    </div>
);

export default class extends React.Component {
    render() {
        return (
            <Page
                title="Kontakt"
                bg="//images.contentful.com/23egy2u19di5/2ACPUs55vqgqOCkOYS6S2m/8957dd916a708feb44f22b6f81ee4b55/kontakt.jpg?fl=progressive">
                <address>
                    <strong>Adriansson Advokatbyrå AB</strong>
                    <p>Box 37, 741 40 Knivsta</p>
                    <Label.Group size="large" color="blue">
                        <Label as="a" href={`mailto:info@abyra.se`}>
                            <Icon name="mail" />
                            info@abyra.se
                        </Label>
                        <Label as="a" href={`tel://+4618341400`}>
                            <Icon name="phone" />
                            +46 (0)18 34-14-00
                        </Label>
                    </Label.Group>
                    <p>
                        Organisationsnummer: 556954-9081 <br /> Säte: Uppsala,
                        Knivsta
                    </p>
                </address>

                <Divider section />

                <Maps>
                    <Map
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.3951190214284!2d17.785375615815372!3d59.726249981799484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fb869aed730e1%3A0xf3537d1f000a0e33!2sCentralv%C3%A4gen+14%2C+741+40+Knivsta!5e0!3m2!1sen!2sse!4v1484400477340"
                        title="Besöksadress"
                    />
                    <Map
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.8050037394828!2d18.06751261596607!3d59.336209317513166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5ce46b0b11%3A0xe41a297d6c416b8c!2sKungsgatan+8%2C+111+43+Stockholm%2C+Sweden!5e0!3m2!1sen!2sse!4v1491766525523"
                        title="Mottagningskontor KG10"
                    />
                </Maps>
            </Page>
        );
    }
}

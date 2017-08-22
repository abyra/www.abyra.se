import React from "react";
import styled from "styled-components";
import { PageWrapper, PageHeading, ContentWrapper } from "../components/Page";
import { FlexBox } from "../components";
import { PageSummary as Page1 } from "../pages/verksamhetsomraden";
import { PageSummary as Page2 } from "../pages/aktuellt";
import Media from "react-media";
import { Image } from "semantic-ui-react";

const StartPage = styled.div`
    display: flex;
    flex-direction: column;

    > * + * {
        margin-top: 1em;
    }
`;

const StartPageHeading = PageHeading.extend`
    padding-bottom: 60%;
    background-image: url(${props => props.bg});

    > header {
        > h1 {
            display: inline-block;
            transform: rotateY(180deg) rotateX(180deg);
            font-size: 2.5em;
        }
    }
`;

export default class Index extends React.Component {
    render() {
        return (
            <StartPage>
                <PageWrapper>
                    <StartPageHeading bg="http://res.cloudinary.com/abyra-se/image/upload/v1503397720/hemsida/team_adriansson_new.jpg">
                        <header>
                            <h1>Nya Perspektiv</h1>
                        </header>
                    </StartPageHeading>
                    <ContentWrapper>
                        <FlexBox>
                            <div>
                                <p>
                                    Att ligga i framkant i en ständigt
                                    föränderlig bransch kräver ständigt nya
                                    infallsvinklar, kreativitet och
                                    innovationsförmåga. En bra advokat söker
                                    lösningar utanför den traditionella boxen
                                    och löser problem utan bundenhet till gamla
                                    vanor.
                                </p>

                                <p>
                                    Vi är en modern, prestigelös och kompetent
                                    advokatbyrå med bred kunskaps- och
                                    erfarenhetsbas. Vårt upptagningsområde är
                                    främst Stockholms-, Upplands- och
                                    Västmanlands län men vi har klienter över
                                    hela landet. Av denna anledning har
                                    geografiskt fördelaktiga Knivsta, med dess
                                    närhet till Arlanda – och därmed hela
                                    Sverige – valts som bas för vår verksamhet.
                                    För att hålla en hög servicegrad för våra
                                    Stockholmsklienter har vi även ett
                                    mottagningskontor på Kungsgatan 8 i
                                    Stockholm.
                                </p>

                                <p>
                                    Hör av dig till oss så berättar vi mer om
                                    oss och vår verksamhet.
                                </p>
                            </div>
                            <Media query="(min-width: 992px)">
                                {matches =>
                                    matches &&
                                    <FlexBox.Item
                                        align-self="center"
                                        padded="left">
                                        <Image
                                            src="http://res.cloudinary.com/abyra-se/image/upload/s--2E1PJ1cl--/c_scale,f_auto,h_400,q_jpegmini:2,w_400/v1496404442/hemsida/nya_perspektiv.jpg"
                                            shape="circular"
                                            size="big"
                                        />
                                    </FlexBox.Item>}
                            </Media>
                        </FlexBox>
                    </ContentWrapper>
                </PageWrapper>

                <Page1 />
                <Page2 />
            </StartPage>
        );
    }
}

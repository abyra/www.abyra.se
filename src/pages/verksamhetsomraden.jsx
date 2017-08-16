import React from "react";
import { Page, FlexBox } from "../components";
import { List, Icon, Popup, Image } from "semantic-ui-react";
import Media from "react-media";

export const BusinessLaw = {
    DisplayName: "Allmän affärsjuridik",
    Description: `Adriansson Advokatbyrå bistår med rådgivning och biträde vid köp, tvister, fordringsrättsliga frågor och upprättande eller granskning av avtal. 
    Vi företräder såväl privatpersoner som företag, föreningar och ideella organisationer.`
};

export const ContractLaw = {
    DisplayName: "Avtalsrätt",
    Description: `Avtalsrätt handlar i första hand att genom avtalet, genom vilket en affärsrelation inleds, säkerställa klientens rättigheter i förhållande till motparten vid en eventuell tvist. 
    Avtal träffas i första hand inte för situationen när allt går som planerat, utan för att säkerställa din rätt om det inte gör det. Vi arbetar proaktivt, för att genom avtalets utformning minimera risken för en senare tvist.`
};

export const Construction = {
    DisplayName: "Bygg & Entreprenad",
    Description: `Adriansson Advokatbyrå har stor kompetens inom det entreprenadrättsliga området. Det gäller allt från konsumententreprenader till omfattande entreprenadrelationer med underentreprenörer i flera led. Vi har omfattande erfarenhet av att tolka byggbranschens olika standardavtal, som AB, ABT, ABS m.fl.  Vi biträder såväl beställare som entreprenörer genom hela byggprocessen, från upprättande av avtal till biträde vid eventuell tvist.`
};

export const PropertyLaw = {
    DisplayName: "Fastighetsrätt",
    Description: `Adriansson Advokatbyrå har omfattande erfarenhet inom det fastighetsrättsliga området, främst beträffande frågor om överlåtelser och fel i fastighet. Vi kan även hjälpa till med frågor om bygglov och liknande.`
};

export const RentalLaw = {
    DisplayName: "Hyresjuridik",
    Description:
        "Adriansson Advokatbyrå biträder såväl hyresgäster som hyresvärdar i frågor som rör hyra av bostäder eller lokaler. Det kan till exempel handla om hyresavtalets utformning, hyrans storlek, rätten till uppsägning eller förlängning, eller frågor om hyresobjektets skick när hyresförhållandet upphör."
};

export const FamilyLaw = {
    DisplayName: "Familjerätt",
    Description:
        "Familjerätt är samlingsnamnet för den juridik som reglerar livets olika skeden. Det kan till exempel handla om samboförhållande och äktenskap, frågor om vårdnad och umgänge med barn, bodelning vid samboförhållandes upphörande, skilsmässa eller dödsfall samt frågor om arv och testamente. Vi biträder er med allt från upprättande av avtal till biträde vid familjerättsliga tvister."
};

export const DisputeResolutionAndLitigation = {
    DisplayName: "Tvistlösning & Processrätt",
    Description:
        "Adriansson Advokatbyrå biträder vid rättsprocesser i såväl allmän domstol som i skiljeförfaranden. Tvistemålsprocesser kan bli mycket kostsamma och det är inte ovanligt att rättegångskostnaderna överstiger det värde som själva tvisten gäller. Därför är det ofta en fördel att anlita ett ombud i ett tidigt skede för att därigenom undvika att konflikten parterna emellan fördjupas. Vi kan biträda den ena parten i en tvist i ett medlingsförfarande eller agera som oberoende medlare för att lösa en tvist utom rätta."
};
export const Claims = {
    DisplayName: "Fordringsrätt",
    Description:
        "Fordringsrätt handlar i korthet om rätten till betalning av en eller annan anledning. Rätten till betalning kan grundas på ett skadestånd på grund av brott, ett avtalsbrott eller att den ena parten har att betala för en utförd tjänst eller en levererad vara. Oavsett vilken typ av fordran det handlar om kan parterna ha olika uppfattningar om ifall rätt till betalning föreligger eller storleken på fordran. Adriansson Advokatbyrå biträder vid alla typer av fordringsrättsliga tvister och har en omfattande erfarenhet inom området."
};
export const HorseLaw = {
    DisplayName: "Hästjuridik",
    Description:
        "Anledningen till att hästjuridiken räknas som ett eget område inom juridiken är att det i princip saknas lagstiftning som reglerar framförallt vad som gäller vid utförande av till exempel tränartjänster eller veterinärtjänster. Därför har praxis ofta en avgörande betydelse. Hästbranschen karaktäriseras också av att det väldigt ofta saknas skriftliga avtal, vilket komplicerar området än mer. Vi har stor erfarenhet av tvister inom området och biträder löpande såväl travtränare som säljare och köpare av travhästar."
};
export const ApiRelatedLaw = {
    DisplayName: "API-relaterad juridik"
};

export const Counsel = {
    DisplayName: "Målsägandebiträde",
    Description:
        "Om du har utsatts för brott har du ofta rätt till ett målsägandebiträde. Målsägandebiträdets roll är att se till att du som brottsoffer får till rätt tillvaratagen på bästa sätt. Du kan också begära att få ett målsägandebiträde redan i samband med att du anmäler ett brott. Har du blivit utsatt för ett brott är du välkommen att kontakta Jeanette Jacobsson, så hjälper hon dig."
};
export const Insolvency = {
    DisplayName: "Obeståndsjuridik",
    Description: "..."
};

export const all_business_areas = {
    BusinessLaw,
    ContractLaw,
    Construction,
    PropertyLaw,
    RentalLaw,
    FamilyLaw,
    DisputeResolutionAndLitigation,
    Claims,
    HorseLaw,
    ApiRelatedLaw,
    Counsel,
    Insolvency
};

export const BusinessAreas = ({ areas, expanded, ...props }) => {
    const ExpandedContent = ({ area }) =>
        <List.Content>
            <List.Header>
                {area.DisplayName}
            </List.Header>
            <List.Description>
                {area.Description}
            </List.Description>
        </List.Content>;

    const Content = ({ area }) => {
        const Trigger = (
            <List.Content>
                <List.Header>
                    {area.DisplayName} <Icon name="angle double right" />
                </List.Header>
            </List.Content>
        );

        return (
            <Popup
                position="top left"
                offset={20}
                on={"click"}
                hideOnScroll
                inverted
                trigger={Trigger}
                header={area.DisplayName}
                content={area.Description}
            />
        );
    };

    return (
        <List {...props}>
            {areas.map((area, index) =>
                <List.Item key={index}>
                    <Icon name="tag" />
                    {expanded
                        ? <ExpandedContent area={area} />
                        : <Content area={area} />}
                </List.Item>
            )}
        </List>
    );
};

export default class extends React.Component {
    render() {
        return (
            <Page title="Verksamhetsområden" slug="verksamhetsomraden">
                <FlexBox>
                    <div>
                        <p>
                            Vi är en ung, modern och kompetent advokatbyrå med
                            en bred kunskapsbas och med stor erfarenhet inom
                            våra specialområden. Vi erbjuder kvalificerad
                            juridisk rådgivning till såväl företag som
                            privatpersoner. Vi har ett prestigelöst arbetssätt
                            och tillsammans kompletterar vi varandra väl, såväl
                            professionellt som personligt.
                        </p>
                        <p>Våra specialområden är följande:</p>
                        <Media query="(max-width: 992px)">
                            {matches =>
                                <BusinessAreas
                                    expanded={matches}
                                    areas={[
                                        BusinessLaw,
                                        ContractLaw,
                                        Construction,
                                        PropertyLaw,
                                        RentalLaw,
                                        FamilyLaw,
                                        DisputeResolutionAndLitigation,
                                        Claims,
                                        HorseLaw
                                    ]}
                                />}
                        </Media>
                        <p>
                            Vi anser att delad kunskap också är en
                            kostnadseffektiv och viktig väg till framgång. Vi
                            arbetar därför i stor utsträckning som ett team för
                            att våra klienter skall få ta del av advokatbyråns
                            och dess kontaktnäts samlade kunskap.
                        </p>
                    </div>
                    <Media query="(min-width: 992px)">
                        {matches =>
                            matches &&
                            <FlexBox.Item align-self="center">
                                <Image
                                    src="http://res.cloudinary.com/abyra-se/image/upload/s--wt2ojZPp--/c_scale,f_auto,h_400,q_jpegmini:2,w_400/v1496404934/hemsida/verksamhetsomraden_small.jpg"
                                    shape="circular"
                                    size="large"
                                />
                            </FlexBox.Item>}
                    </Media>
                </FlexBox>
            </Page>
        );
    }
}

export const PageSummary = () =>
    <Page.Summary title="Verksamhetsområden" slug="verksamhetsomraden">
        <p>Våra specialområden är följande:</p>
        <BusinessAreas
            areas={[
                BusinessLaw,
                ContractLaw,
                Construction,
                PropertyLaw,
                RentalLaw,
                FamilyLaw,
                DisputeResolutionAndLitigation,
                Claims,
                HorseLaw
            ]}
        />
    </Page.Summary>;

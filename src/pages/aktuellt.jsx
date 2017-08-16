import React from "react";
import { Page, FlexBox } from "../components";
import Media from "react-media";
import { Image } from "semantic-ui-react";

export default class extends React.Component {
    render() {
        return (
            <Page title="Aktuellt" slug="aktuellt">
                <FlexBox>
                    <div>
                        <p>
                            Till oss är du alltid välkommen att höra av dig. Den
                            första kontakten kostar ingenting. Du kan anlita oss
                            för såväl juridisk konsultation som biträde vid
                            tvister och avtalsförhandlingar. Därutöver kan vi
                            hjälpa dig med upprättande av avtal, testamenten,
                            äktenskapsförord och andra rättshandlingar.
                        </p>

                        <p>
                            De flesta hem- och företagsförsäkringar omfattar ett
                            så kallat rättsskydd. Rättsskydd innebär att
                            försäkringsbolaget betalar viss del av dina eller
                            ditt företags rättegångskostnader om du hamnar i
                            tvist. Hur stor del som försäkringsbolaget ersätter
                            framgår av försäkringsvillkoren.
                        </p>

                        <p>
                            För privatpersoner varierar rättsskyddsbeloppet
                            normalt mellan 75-80 % av den s k rättshjälpstaxan.
                            Rättshjälpstaxan är en taxa domstolsverket årligen
                            fastställer. För 2016 uppgår rättshjälpstaxan till 1
                            323 kr per timme exklusive moms.
                        </p>

                        <p>
                            För företag varierar rättsskyddsbeloppet normalt
                            mellan 75-80 % av ombudsarvodet exklusive moms. De
                            flesta försäkringsbolag har en grundsjälvrisk som
                            varierar mellan ca 7 000 kr och ett prisbasbelopp.
                        </p>
                    </div>
                    <Media query="(min-width: 992px)">
                        {matches =>
                            matches &&
                            <FlexBox.Item align-self="center" padded="left">
                                <Image
                                    src="http://res.cloudinary.com/abyra-se/image/upload/s--URcrLIuw--/c_scale,f_auto,h_400,q_jpegmini:2,w_400/v1496405162/hemsida/aktuellt_small.jpg"
                                    shape="circular"
                                    size="medium"
                                />
                            </FlexBox.Item>}
                    </Media>
                </FlexBox>
            </Page>
        );
    }
}

export const PageSummary = () =>
    <Page.Summary title="Aktuellt" slug="aktuellt">
        <p>
            Till oss är du alltid välkommen att höra av dig. Den första
            kontakten kostar ingenting. Du kan anlita oss för såväl juridisk
            konsultation som biträde vid tvister och avtalsförhandlingar.
        </p>
    </Page.Summary>;

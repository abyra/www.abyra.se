import React from "react";
import { Page } from "../components";

export default class extends React.Component {
    render() {
        return (
            <Page
                title="Aktuellt"
                bg="http://res.cloudinary.com/abyra-se/image/upload/hemsida/aktuellt.jpg">
                <p>
                    Till oss är du alltid välkommen att höra av dig. Den första
                    kontakten kostar ingenting. Du kan anlita oss för såväl
                    juridisk konsultation som biträde vid tvister och
                    avtalsförhandlingar. Därutöver kan vi hjälpa dig med
                    upprättande av avtal, testamenten, äktenskapsförord och
                    andra rättshandlingar.
                </p>

                <p>
                    De flesta hem- och företagsförsäkringar omfattar ett så
                    kallat rättsskydd. Rättsskydd innebär att försäkringsbolaget
                    betalar viss del av dina eller ditt företags
                    rättegångskostnader om du hamnar i tvist. Hur stor del som
                    försäkringsbolaget ersätter framgår av försäkringsvillkoren.
                </p>

                <p>
                    För privatpersoner varierar rättsskyddsbeloppet normalt
                    mellan 75-80 % av den s k rättshjälpstaxan. Rättshjälpstaxan
                    är en taxa domstolsverket årligen fastställer. För 2016
                    uppgår rättshjälpstaxan till 1 323 kr per timme exklusive
                    moms.
                </p>

                <p>
                    För företag varierar rättsskyddsbeloppet normalt mellan
                    75-80 % av ombudsarvodet exklusive moms. De flesta
                    försäkringsbolag har en grundsjälvrisk som varierar mellan
                    ca 7 000 kr och ett prisbasbelopp.
                </p>
            </Page>
        );
    }
}

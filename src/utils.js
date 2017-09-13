function phoneWithoutLeadingZero(phone) {
    return parseInt(phone, 10);
}

export function normalizePhoneNumberForHref(phone) {
    //e.g. 0706673857 > tel://+46706673857
    return `tel://+46${phoneWithoutLeadingZero(phone)}`;
}

export function normalizePhoneNumberForDisplay(phone) {
    //e.g. 0706673857 > +46 (0) 70- 667 38 57
    return `+46 ${phone.replace(
        /(\d{1})(\d{2})(\d{3})(\d{2})(\d{2})/,
        "($1) $2- $3 $4 $5"
    )}`;
}

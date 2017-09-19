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

export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .normalize("NFD") // separate accent from letter
        .replace(/[\u0300-\u036f]/g, "") // remove all separated accents
        .replace(/\s+/g, "-") // replace spaces with -
        .replace(/&/g, "-and-") // replace & with 'and'
        .replace(/[^\w\-]+/g, "") // remove all non-word chars
        .replace(/\-\-+/g, "-"); // replace multiple '-' with single '-'
}

export function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function detectScreenType(width) {
    if (width <= 414) {
        return 'mobile';
    }
    if (width > 414 && width <= 768) {
        return 'pad';
    }
    if (width > 768) {
        return 'pc';
    }
}

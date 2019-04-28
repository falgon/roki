export function detectIE(): string {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    const trident = ua.indexOf('Trident/');
    const edge = ua.indexOf('Edge/');
    return msie > 0 ? 'IE10 or Older' : trident > 0 ? 'IE11' : edge > 0 ? 'Edge' : 'other';
}

export function isIE10orOlder(): boolean {
    return detectIE() === 'IE10 or Older';
}

export function coverHeight(): number {
    if (isIE10orOlder()) {
        return document.documentElement.clientHeight;
    } else {
        return window.innerHeight;
    }
}

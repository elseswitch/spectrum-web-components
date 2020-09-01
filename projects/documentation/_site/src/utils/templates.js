import { html, css } from 'lit-element';
export function toHtmlTemplateString(code) {
    const stringArray = [`${code}`];
    stringArray.raw = [`${code}`];
    return html(stringArray);
}
export function toCssTemplateString(code) {
    const stringArray = [`${code}`];
    stringArray.raw = [`${code}`];
    return css(stringArray);
}
//# sourceMappingURL=templates.js.map
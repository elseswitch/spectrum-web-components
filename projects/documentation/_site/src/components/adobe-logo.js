/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { __decorate } from "tslib";
import { LitElement, html, property, customElement, } from 'lit-element';
import logoStyles from './adobe-logo.css';
let SpectrumLogo = /** @class */ (() => {
    let SpectrumLogo = class SpectrumLogo extends LitElement {
        constructor() {
            super(...arguments);
            this.size = '36px';
        }
        static get styles() {
            return [logoStyles];
        }
        render() {
            return html `
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 30 26"
                width="${this.size}"
                xml:space="preserve"
            >
                <path
                    fill="#FA0F00"
                    d="M19 0h11v26zM11.1 0H0v26zM15 9.6L22.1 26h-4.6l-2.1-5.2h-5.2z"
                />
            </svg>
        `;
        }
    };
    __decorate([
        property({ type: String })
    ], SpectrumLogo.prototype, "size", void 0);
    SpectrumLogo = __decorate([
        customElement('docs-spectrum-logo')
    ], SpectrumLogo);
    return SpectrumLogo;
})();
export { SpectrumLogo };
//# sourceMappingURL=adobe-logo.js.map
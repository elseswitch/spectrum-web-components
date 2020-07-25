import './components/layout.js';

declare global {
    interface Window {
        spAlert(el: HTMLElement, message: string): void;
    }
}

window.spAlert = (el: HTMLElement, message: string): void => {
    el.dispatchEvent(
        new CustomEvent('alert', {
            composed: true,
            bubbles: true,
            detail: {
                message,
            },
        })
    );
};
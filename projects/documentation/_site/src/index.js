import './components/layout.js';
window.spAlert = (el, message) => {
    el.dispatchEvent(new CustomEvent('alert', {
        composed: true,
        bubbles: true,
        detail: {
            message,
        },
    }));
};
//# sourceMappingURL=index.js.map
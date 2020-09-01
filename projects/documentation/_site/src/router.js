const tabs = document.querySelector('sp-tabs');
tabs.addEventListener('change', (event) => {
    const target = event.target;
    const { selected } = target;
    const { pathname } = location;
    const isAPI = pathname.search('api') > -1;
    switch (selected) {
        case 'api': {
            if (isAPI)
                return;
            const dest = (pathname + '/api/').replace('//a', '/a');
            history.pushState({}, document.title, dest);
            break;
        }
        case 'examples': {
            if (!isAPI)
                return;
            const dest = pathname.split('/api')[0] + '/';
            history.pushState({}, document.title, dest);
            break;
        }
    }
});
//# sourceMappingURL=router.js.map
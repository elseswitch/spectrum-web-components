import { Tabs } from '@spectrum-web-components/tabs';

const tabs = document.querySelector('sp-tabs') as Tabs;
tabs.addEventListener('change', (event: Event) => {
    const target = event.target as Tabs;
    const { selected } = target;
    const { pathname } = location;
    const isAPI = pathname.search('api') > -1;
    switch (selected) {
        case 'api': {
            if (isAPI) return;
            const dest = (pathname + '/api/').replace('//a', '/a');
            history.pushState({}, document.title, dest);
            break;
        }
        case 'examples': {
            if (!isAPI) return;
            const dest = pathname.split('/api')[0] + '/';
            history.pushState({}, document.title, dest);
            break;
        }
    }
});

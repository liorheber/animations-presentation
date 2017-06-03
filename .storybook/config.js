import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
    name: 'CUSTOM-OPTIONS',
    url: 'https://github.com/kadirahq/storybook-addon-options',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false,
    sortStoriesByKind: false,
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

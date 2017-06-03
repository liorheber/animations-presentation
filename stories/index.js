import React from 'react';
import { setAddon, configure } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import styles from './app.scss';

setAddon(infoAddon);

const req = require.context('./', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
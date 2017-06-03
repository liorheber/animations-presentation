import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import readMe from '../src/session-1/README.md';
import withReadme from 'storybook-readme/with-readme';

import App from '../src/session-1/app';
import Loader from '../src/components/loading/loading';

storiesOf('Session 1', module)
    .addDecorator(withKnobs)
    .add('Main page', withReadme(readMe, () => (
        <App />
    )))
    .add('With loader', withReadme(readMe, () => (
        <App loader={Loader} refresh={true}/>
    )))
    .add('With indication', withReadme(readMe, () => (
        <App loader={Loader} refresh={true} isLive={true}/>
    )))
    .add('With slide', withReadme(readMe, () => (
        <App loader={Loader} refresh={true} isLive={true} slide={true}/>
    )));

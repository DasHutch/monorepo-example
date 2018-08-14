import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import Greeting from './Greeting';

const stories = storiesOf('Greeting', module);

// NOTE: Add the `withKnobs` decorator to add knobs support to your stories.
//       You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories
    .add('with default greeting', () => {
        return <Greeting />;
    })
    .add('with custom greeting', () => {
        return <Greeting name='Jane' />;
    });

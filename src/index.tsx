import * as React from 'react';
import { render } from 'react-dom';
import Main from './component/main';
import '../docs/style/index.scss';

render(
    <Main />,
    document.getElementById('content')
);

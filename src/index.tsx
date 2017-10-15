import * as React from 'react';
import { render } from 'react-dom';
import Main from './component/main';
import '../docs/style/style.scss';
import '../docs/style/menu.scss';
import '../docs/style/rokiicon.scss';
import '../docs/style/clearfix.scss';
import '../docs/style/logo.scss';
import '../docs/style/contents.scss';

render(
    <Main />,
    document.getElementById('content')
);

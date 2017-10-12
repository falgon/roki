import * as React from 'react';
import * as ReactDom from 'react-dom';
import Main from './component/main';
require('../docs/style/style.scss');

ReactDom.render(
    <Main />,
    document.getElementById('content')
);

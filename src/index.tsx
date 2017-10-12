import * as React from 'react';
import * as ReactDom from 'react-dom';
import Test from './component/testcomp';
require('../docs/style/style.scss');

ReactDom.render(
    <Test message={"hello"} />,
    document.getElementById('content')
);

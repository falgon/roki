import * as React from 'react';
import * as ReactDom from 'react-dom';
import Test from './component/testcomp';
require('../doc/style/style.scss');

/*interface TestState {
    rendernize: boolean;
}

class Test extends React.Component<undefined, TestState> {
    constructor(props: undefined) {
	super(props);
	this.state = {
	    rendernize: false
	};
    }

    public render() {
	return (<div>
	    <p>hogehoge</p>
	</div>);
    }
}*/

ReactDom.render(
    <Test message={"hello"} />,
    document.getElementById('content')
);

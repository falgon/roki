import * as React from 'react';
import '../../../docs/style/contents.scss';

export default class ContentsLayouter extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() : JSX.Element{
        return (
	    <div id='contentsWrapper'>
	    	{this.props.children}
	    </div>
	);
    }
}

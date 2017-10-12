import * as React from 'react';
import '../../docs/style/centernize.scss';

interface CenterViewProps {
    children: string | JSX.Element;
}

export default class CenterView extends React.Component<CenterViewProps, {}> {
    constructor(props: CenterViewProps) {
	super(props);
    }

    public render() {
	return (
	    <div id='centernize'>
	    	{this.props.children}
	    </div>
	);
    }
}

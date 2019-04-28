import * as React from 'react';
import { coverHeight } from './detectIE';

export default class Wrapper extends React.Component<{}, {}> {
    constructor(props: {}) {
	super(props);
    }

    public componentDidMount() {
	this.updateWindowDimensions();
	window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    public componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    public render() {
	return(
		<div className='clearfix' style={{margin: '0 auto', maxWidth: '100%', width: '100%', height: '100%'}}>{this.props.children}</div>
	);
    }

    private updateWindowDimensions() {
	this.setState({ windowHeight: coverHeight() });
    }
}

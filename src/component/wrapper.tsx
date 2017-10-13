import * as React from 'react';
import { isIE10orOlder } from './detectIE';
import '../../docs/style/clearfix.scss';

interface WrapperProps {
    maxWidth: number;
}

/*interface WrapperState {
    isOpen?: boolean;
    isInited?: boolean;
    windowHeight?: any;
}*/

export default class Wrapper extends React.Component<WrapperProps, {}> {
    constructor(props: WrapperProps) {
	super(props);
//	this.state = { isOpen: false, isInited: false, windowHeight: 0 };
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
		<div className='clearfix' style={{margin: '0 auto', maxWidth: this.props.maxWidth, width: '100%'}}>{this.props.children}</div>
	);
    }

    private updateWindowDimensions() {
	if(isIE10orOlder()) {
	    var height = document.documentElement.clientHeight;
	} else {
	    var height = window.innerHeight;
	}
	this.setState({ windowHeight: height });
    }
}

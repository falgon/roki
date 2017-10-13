import * as React from 'react';
import '../../../docs/style/rokiicon.scss';
import { isIE10orOlder } from '../detectIE';

/*interface RoProps {
    textAlign: string;
}*/

/*interface RoState {
    isOpen?: boolean;
    isInited?: boolean;
    windowHeight?: any;
}*/

export default class Ro extends React.Component<{}/*RoProps*/, {}> {
    constructor(props: {}/*RoProps*/) {
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
		<div style={{position: 'absolute', top: 0, bottom: 0, right: '180px', left: 0, margin: 'auto', width: '80px'}} id='ro'><h1>Ro</h1></div>
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

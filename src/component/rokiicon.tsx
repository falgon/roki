import * as React from 'react';
import Roki from '../../assets/roki.png';
import '../../docs/style/rokiicon.scss';

interface RokiIconProps {
    width: number;
    height: number;
}

interface RokiIconState {
    isOpen?: boolean;
    isInited?: boolean;
}

export default class RokiIcon extends React.Component<RokiIconProps, RokiIconState> {
    constructor(props: RokiIconProps) {
	super(props);
	this.state = { isOpen: false, isInited: false };
    }

    public render() {
	const isOpen = this.state.isOpen;
	const isInited = this.state.isInited;

	return (
	    	<div style={{zIndex: 1, width: this.props.width, height: this.props.height, position:'absolute', margin: 'auto', top: 0, bottom: 0, right: 0, left: 0}} onClick={() => this.setState({isOpen: !isOpen, isInited: isInited ? isInited : !isInited})} className={!isInited ? '' : isOpen ? 'isOpen' : 'isClose'}>
	    	
		    <img id='rokiicon' src={Roki} style={{width: this.props.width, height: this.props.height}} />
		</div>
	);
    }
}

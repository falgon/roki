import * as React from 'react';
import Roki from '../../assets/roki.png';
import '../../docs/style/rokiicon.scss';

interface RokiIconProps {
    width: number;
    height: number;
}

interface RokiIconState {
    isOpen: boolean;
}

export default class RokiIcon extends React.Component<RokiIconProps, RokiIconState> {
    constructor(props: RokiIconProps) {
	super(props);
	this.state = { isOpen: false };
    }
    public render() {
	const isOpen = this.state.isOpen;

	return (
	    	<div style={{width: this.props.width, height: this.props.height}}onClick={() => this.setState({isOpen: !isOpen})} className={isOpen ? 'isOpen' : ''}>
		    <img id='rokiicon' src={Roki} style={{width: this.props.width, height: this.props.height}} />
		</div>
	);
    }
}

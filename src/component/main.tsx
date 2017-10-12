import * as React from 'react';
//import CenterView from './centerview';
import RokiIcon from './rokiicon';

export default class Main extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    public render() : JSX.Element{
        return (
	//    <CenterView>
	    	<RokiIcon width={200} height={200} />
	  //  </CenterView>
	);
    }
}

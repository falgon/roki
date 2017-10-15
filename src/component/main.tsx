import * as React from 'react';
import Wrapper from './wrapper';
import RokiIcon from './rokiicon';
import Ro from './roki/ro';
import Ki from './roki/ki';
import '../../assets/favicon.ico';

export default class Main extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() : JSX.Element{
        return (
	    <div style={{width: '100%', height: '100%'}}>
	    	<Wrapper>
	    		<Ro /><RokiIcon width={150} height={150} menuStatus={false} /><Ki />
	    	</Wrapper>
	    </div>
	);
    }
}

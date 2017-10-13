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
	    <div>
	    	<Wrapper maxWidth={500}>
	    		<Ro /><RokiIcon width={150} height={150} /><Ki />
	    	</Wrapper>
	    </div>
	);
    }
}

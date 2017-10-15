import * as React from 'react';
import FaBirthdayCake from 'react-icons/lib/fa/birthday-cake';
import FaMale from 'react-icons/lib/fa/male';
import GoInfo from 'react-icons/lib/go/info';
import GoLocation from 'react-icons/lib/go/location';

interface Pair {
    text: string;
    icon: JSX.Element;
}

export default class About extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
	const IconsStyle = { marginRight: '5px', fontSize: '2em' };
	const ListStyle = { display: 'inline-block', marginRight: '8px' };

	const ele: Pair[] = [
	    {text: 'Born in 1995', icon: <FaBirthdayCake style={ IconsStyle }/>}, 
	    {text: 'Male', icon: <FaMale style={ IconsStyle }/>},
	    {text: 'Junior in college', icon: <GoInfo style={ IconsStyle }/>},
	    {text: 'Tokyo, JP', icon: <GoLocation style={ IconsStyle }/>}
	];

        return (
            <div>
                <h2 className='typeString'>About</h2>
                <section style={{ marginTop: '30px', fontSize: '14px' }}>
	    	<ul style={{ listStyle:'none', textAlign: 'center'}}>
	    	{
		    ele.map((e: Pair) => {
			return <li style={ ListStyle }>{e.icon}{e.text}</li>;
		    })
		}
	    	</ul>
                </section>
            </div>
        );
    }
}

import * as React from 'react';
import { GoMail } from 'react-icons/go';
import { TiSocialSkype } from 'react-icons/ti';

export default class Contact extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        const IconsStyle = { marginRight: '6px', fontSize: '3em' };
        const ListStyle = { marginBottom: '8px' };
        const ele: Pair[] = [
            { 
		text: <a className='InputStyle' href='mailto:falgon53@yahoo.co.jp'>Mail</a>,
		icon: <GoMail style={IconsStyle} />
	    },
            { 
		text: <a className='InputStyle' href='callto://cpp_0x35'>Skype Me</a>, 
		icon: <TiSocialSkype style={IconsStyle} /> 
	    }
        ];

        return (
            <div id='Contact'>
                <h2 className='typeString'>Contact</h2>
                <section>
                        <ul style={{ listStyle: 'none', textAlign: 'center', marginLeft: '15px' }}>
                            {
                                ele.map((e: Pair) => {
                                    return <li style={ListStyle}>{e.icon}{e.text}</li>;
                                })
                            }
                        </ul>
                </section>
            </div>
        );
    }
}

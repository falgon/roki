import * as React from 'react';
import Wrapper from '../wrapper';
import { FaBirthdayCake, FaMale } from 'react-icons/fa';
import { GoInfo, GoLocation, GoTag, GoStar } from 'react-icons/go';
import { TiCalendar } from 'react-icons/ti';
import Roki from '../../../assets/roki.png';
import * as ossList from '../../../docs/oss_contribution.json';
import * as toolTips from '../../../docs/tool_tips.json';
  
export default class About extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        const IconsStyle = { marginRight: '6px', fontSize: '2em' };
        const ListStyle = { marginBottom: '8px' };

        const ele: Pair[] = [
            { text: 'Born in 1995', icon: <FaBirthdayCake style={IconsStyle} /> },
            { text: 'Male', icon: <FaMale style={IconsStyle} /> },
            { text: 'Engineer', icon: <GoInfo style={IconsStyle} /> },
            { text: 'Tokyo, JP', icon: <GoLocation style={IconsStyle} /> },
            { text: 'Beer 🍺', icon: <GoStar style={IconsStyle} /> },
            {
                text: (
                    <div className='tooltip'>
                        Skill / Fav
		    	<ul className='tooltipText'>
                            {toolTips.map((t: string) => { return <li>{t}</li>; })}
                        </ul>
                    </div>
                ),
                icon: <GoTag style={IconsStyle} />
            },
        ];

        let indexer: number = 0;
        return (
            <div id='About'>
                <h2 className='typeString' style={{ marginBottom: '15px'}}>About</h2>
                <section>
                    <Wrapper>
                        <div id='AboutRoki'>
                            <img id='AboutRokiImage' src={Roki} style={{float: 'right'}} />
                        </div>
                        <ul style={{ listStyle: 'none', textAlign: 'left', marginLeft: '15px' }}>
                            {
                                ele.map((e: Pair) => {
                                    return <li style={ListStyle}>{e.icon}{e.text}</li>;
                                })
                            }
                        </ul>
                    </Wrapper>
                    <div id='tablePositioner'>
                        <h2 className='typeString' style={{ marginBottom: '15px', fontSize: '3em' }}>OSS Contribution</h2>
                        <div id='tableWrapper'>
                            <table id='ossContrib'>
                                <tr><th>#</th><th>Description</th><th>Genre</th><th><TiCalendar style={{ fontSize: '1.5em' }} /> Date</th></tr>
                                {
                                    ossList.map((o: OSS) => {
                                        ++indexer;
                                        return (
                                            <tr>
                                                <td>{indexer}</td>
                                                <td><a href={o.link} id='ossText'>{o.text}</a></td>
                                                <td><div id='Genre'>{o.genre}</div></td>
                                                <td><p>{o.date}</p></td>
                                            </tr>
                                        );
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

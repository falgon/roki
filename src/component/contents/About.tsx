import * as React from 'react';
import Wrapper from '../wrapper';
import FaBirthdayCake from 'react-icons/lib/fa/birthday-cake';
import FaMale from 'react-icons/lib/fa/male';
import GoInfo from 'react-icons/lib/go/info';
import GoLocation from 'react-icons/lib/go/location';
import GoTag from 'react-icons/lib/go/tag';
import GoStar from 'react-icons/lib/go/star';
import Roki from '../../../assets/roki.png';
import TiCalender from 'react-icons/lib/ti/calender';

interface OSS {
    text: string;
    link: string;
    genre: string;
    date: string;
}

export default class About extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        const IconsStyle = { marginRight: '6px', fontSize: '2em' };
        const ListStyle = { marginBottom: '8px' };

        const toolTips: string[] = [
            'C++', 'Scala', 'Rust', 'Haskell', 'Lisp Scheme', 'Typescript',
            'GNU/Linux', 'Vim', 'Data compression', 'Quantum mechanics'
        ];

        const ele: Pair[] = [
            { text: 'Born in 1995', icon: <FaBirthdayCake style={IconsStyle} /> },
            { text: 'Male', icon: <FaMale style={IconsStyle} /> },
            { text: 'Univercity student', icon: <GoInfo style={IconsStyle} /> },
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

        const ossList: OSS[] = [
            {
                text: 'cpprefjp: Fix typo #388',
                link: 'https://github.com/cpprefjp/site/pull/388/commits/5652d53580b10e357f1093b907b90021dc04ebc1',
                genre: 'C++',
                date: '2017/01/09'
            },
            {
                text: 'cppreference: Fix typo',
                link: 'http://en.cppreference.com/mwiki/index.php?title=cpp/language/class_template_argument_deduction&diff=prev&oldid=92071',
                genre: 'C++',
                date: '2017/04/04'
            },
            {
                text: 'cpprefjp: Fix typo 8c9490',
                link: 'https://github.com/cpprefjp/site/commit/8c09490285f735480bfacec2037fa7d94742b370',
                genre: 'C++',
                date: '2017/07/06'
            },
            {
                text: 'MDN web docs Revision 1279273 of parseInt()',
                link: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt$revision/1279273',
                genre: 'javascript',
                date: '2017/07/29'
            },
            {
                text: 'P0052 unique_resource implementation: Fix assert typo',
                link: 'https://github.com/PeterSommerlad/SC22WG21_Papers/pull/4',
                genre: 'C++',
                date: '2017/08/16'
            },
            {
                text: 'cpprefjp: Fix typo 336fa5e',
                link: 'https://github.com/cpprefjp/site/commit/6bb217759bd852629c2e24cd8285bf8925719ad4',
                genre: 'C++',
                date: '2017/08/26'
            },
            {
                text: 'Boost C++ libraries predef: fix typo s/BOOST_ARCH_PARISK/BOOST_ARCH_PARISC',
                link: 'https://github.com/boostorg/predef/pull/63',
                genre: 'C++',
                date: '2017/10/11'
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
                                <tr><th>#</th><th>Description</th><th>Genre</th><th><TiCalender style={{ fontSize: '1.5em' }} /> Date</th></tr>
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

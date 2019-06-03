import * as React from 'react';
import { 
    TiSocialGithub,
    TiSocialTwitter,
    TiSocialSkype
} from 'react-icons/ti';
import { 
    FaAmazon, 
    FaYoutube, 
    FaSteamSquare, 
    FaStackOverflow, 
    FaTumblr 
} from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';

export default class Contact extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        const IconsStyle = { marginRight: '6px', fontSize: '3em' };
        const ListStyle = { marginBottom: '8px' };
        const PStyle = { lineHeight: '1.5em' };

        const ele: ContentsElement[] = [
            {
                text:
                <a className='IconsStyle' href='https://github.com/falgon'>
                    <TiSocialGithub style={IconsStyle} /><span style={PStyle}>Github</span>
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://twitter.com/530506'>
                    <TiSocialTwitter style={IconsStyle} />Twitter
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://falgon.github.io/roki.log/'>
                    <GoPencil style={IconsStyle} />Blog
                </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://roki.hateblo.jp/'>
                    <GoPencil style={IconsStyle} />Old Blog
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://0x35.tumblr.com'>
                    <FaTumblr style={IconsStyle} />tumblr
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://steamcommunity.com/id/r0k1'>
                    <FaSteamSquare style={IconsStyle} />Steam
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://www.youtube.com/user/53falgon53/'>
                    <FaYoutube style={IconsStyle} />YouTube
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://amzn.asia/e8TP5A2'>
                    <FaAmazon style={IconsStyle} />Amazon Wish List
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://stackoverflow.com/users/8345717/roki'>
                    <FaStackOverflow style={IconsStyle} />Stackoverflow
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='callto://cpp_0x35'>
                    <TiSocialSkype style={IconsStyle} />Skype
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://www.gitbook.com/@roki'>
                    GitBook
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://teratail.com/users/kjfkhfhgx'>
                    teratail
		        </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://yukicoder.me/users/3223'>
                    yukicoder
		        </a>
            }
        ];

        return (
            <div id='Links'>
                <h2 className='typeString'>Links</h2>
                <section>
                    <ul style={{ listStyle: 'none', textAlign: 'center' }}>
                        {
                            ele.map((e: ContentsElement) => {
                                return <li style={ListStyle}>{e.text}</li>;
                            })
                        }
                    </ul>
                </section>
            </div>
        );
    }
}

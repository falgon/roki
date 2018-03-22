import * as React from 'react';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import FaSlideshare from 'react-icons/lib/fa/slideshare';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaSteamSquare from 'react-icons/lib/fa/steam-square';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaYoutube from 'react-icons/lib/fa/youtube';
import FaAmazon from 'react-icons/lib/fa/amazon';
import FaStackOverflow from 'react-icons/lib/fa/stack-overflow';
import FaTumblr from 'react-icons/lib/fa/tumblr';
import TiSocialSkype from 'react-icons/lib/ti/social-skype';
import GoPencil from 'react-icons/lib/go/pencil';

export default class Contact extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        const IconsStyle = { marginRight: '6px', fontSize: '3em' };
        const ListStyle = { marginBottom: '8px' };

        const ele: ContentsElement[] = [
            {
                text:
                <a className='IconsStyle' href='https://github.com/falgon'>
                    <TiSocialGithub style={IconsStyle} />Github
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
                <a className='IconsStyle' href='http://roki.hateblo.jp/'>
                    <GoPencil style={IconsStyle} />Old Blog (旧ブログ)
		</a>
            },
            {
                text:
                <a className='IconsStyle' href='http://rok1.hateblo.jp/'>
                    <GoPencil style={IconsStyle} />Second Blog
		</a>
            },
            {
                text:
                <a className='IconsStyle' href='http://www.slideshare.net/HirokiGomi'>
                    <FaSlideshare style={IconsStyle} />Slideshare
		</a>
            },
            {
                text:
                <a className='IconsStyle' href='https://www.facebook.com/roki53'>
                    <TiSocialFacebook style={IconsStyle} />facebook
		</a>
            },
            {
                text:
                <a className='IconsStyle' href='0x35.tumblr.com'>
                    <FaTumblr style={IconsStyle} />tumblr
		    </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://www.instagram.com/rr0ki'>
                    <FaInstagram style={IconsStyle} />Instagram
		     </a>
            },
            {
                text:
                <a className='IconsStyle' href='http://steamcommunity.com/id/0x35'>
                    <FaSteamSquare style={IconsStyle} />Steam
		    </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://soundcloud.com/falgon'>
                    <FaSoundcloud style={IconsStyle} />SoundCloud
		    </a>
            },
            {
                text:
                <a className='IconsStyle' href='https://jp.pinterest.com/0x35/'>
                    <FaPinterest style={IconsStyle} />Pinterest
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
                <a className='IconsStyle' href='http://amzn.asia/e8TP5A2'>
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

import * as React from 'react';
import Roki from '../../assets/roki.png';
import '../../docs/style/menu.scss';
import '../../docs/style/rokiicon.scss';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import GoPencil from 'react-icons/lib/go/pencil';
import GoLink from 'react-icons/lib/go/link';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import TiContacts from 'react-icons/lib/ti/contacts';

interface RokiIconProps {
    width: number;
    height: number;
    menuStatus: boolean;
}

interface RokiIconState {
    isOpen?: boolean;
    isInited?: boolean;
}

interface MenuElement {
    uri: string;
    icon: JSX.Element;
}

export default class RokiIcon extends React.Component<RokiIconProps, RokiIconState> {
    constructor(props: RokiIconProps) {
        super(props);
        this.state = { isOpen: this.props.menuStatus, isInited: false };
    }

    public render() {
        const isOpen = this.state.isOpen;
        const isInited = this.state.isInited;
        let index = 0;

        return (
            <div className='fade'>
                <input type='checkbox' className='menu-open' name='menu-open' id='menu-open' />
                <label className='menu-open-button' htmlFor='menu-open'>
                    <div
                        style={{ zIndex: 2, width: this.props.width, height: this.props.height, position: 'absolute', margin: 'auto', top: 0, bottom: 0, right: 0, left: 0 }}
                        onClick={() => this.setState({ isOpen: !isOpen, isInited: isInited ? isInited : !isInited })}
                        className={!isInited ? '' : isOpen ? 'isOpen' : 'isClose'}
                    >
                        <img id='rokiicon' src={Roki} style={{ width: this.props.width, height: this.props.height }} />
                    </div>
                </label>
                {
                    this.menuElement.map((elm: MenuElement) => {
			++index;
                        return <a href={elm.uri} className={['menu-item', 'item-' + index.toString(), isOpen ? 'menu-Opend' : 'menu-NotOpen'].join(' ')}>{elm.icon}</a>
                    })
                }
            </div>
        );
    }

    private menuElement: MenuElement[] = [
        { uri: 'https://twitter.com/530506', icon: <TiSocialTwitter /> },
        { uri: 'https://github.com/falgon', icon: <GoMarkGithub /> },
        { uri: '', icon: <GoLink /> },
        { uri: '', icon: <MdAccountCircle /> },
	{ uri: '', icon: <TiContacts />},
        { uri: 'http://roki.hateblo.jp/', icon: <GoPencil /> }
    ];
}

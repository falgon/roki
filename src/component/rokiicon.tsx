import * as React from 'react';
import InPageContents from './pageContents';
import Roki from '../../assets/roki.png';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import GoPencil from 'react-icons/lib/go/pencil';
import GoLink from 'react-icons/lib/go/link';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import TiContacts from 'react-icons/lib/ti/contacts';
import TiDeleteOutline from 'react-icons/lib/ti/delete-outline';

interface RokiIconProps {
    width: number;
    height: number;
    menuStatus: boolean;
}

interface RokiIconState {
    isOpen?: boolean;
    isInited?: boolean;
    page?: string;
}

interface MenuElement {
    uri: string;
    icon: JSX.Element;
    event: () => void;
}

interface PageStatus {
    links: string;
    about: string;
    contact: string;
    default: string;
}

export default class RokiIcon extends React.Component<RokiIconProps, RokiIconState> {
    constructor(props: RokiIconProps) {
        super(props);
        this.state = { isOpen: this.props.menuStatus, isInited: false, page: this.pageStatus.default };
    }

    public render() {
        const isOpen = this.state.isOpen;
        const isInited = this.state.isInited;
	const page = this.state.page;
        let index = 0;

        return (
            <div style={{width: '100%', height: '100%'}}>
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
                            return !elm.uri.length ?
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={elm.event}
                                    className={['menu-item', 'item-' + index.toString(), isOpen ? 'menu-Opend' : 'menu-NotOpen'].join(' ')}>
                                    {elm.icon}
                                </div>
                                :
                                <a href={elm.uri} className={['menu-item', 'item-' + index.toString(), isOpen ? 'menu-Opend' : 'menu-NotOpen'].join(' ')}>
                                    {elm.icon}
                                </a>;
                        })
                    }
                </div>
                <figure style={{width: '100%', height: '100%'}}>
                    <figcaption
                        id={this.state.page == this.pageStatus.links || this.state.page == this.pageStatus.about || this.state.page == this.pageStatus.contact ? 'captionMain' : 'captionHide'}>
	    		<TiDeleteOutline id='del' onClick={ () => {this.setState({page: this.pageStatus.default})} } className='Cross' />
                        <InPageContents contents={page} contentsName={this.pageStatus} />
                    </figcaption>
                </figure>
            </div>
        );
    }

    private menuElement: MenuElement[] = [
        { uri: 'https://twitter.com/530506', icon: <TiSocialTwitter />, event: () => { } },
        { uri: 'https://github.com/falgon', icon: <GoMarkGithub />, event: () => { } },
        { uri: '', icon: <GoLink />, event: () => { this.setState({ page: this.pageStatus.links }) } },
        { uri: '', icon: <MdAccountCircle />, event: () => { this.setState({ page: this.pageStatus.about }) } },
        { uri: '', icon: <TiContacts />, event: () => { this.setState({ page: this.pageStatus.contact }) } },
        { uri: 'http://roki.hateblo.jp/', icon: <GoPencil />, event: () => { } }
    ];

    private pageStatus: PageStatus = {
        links: 'links',
        about: 'about',
        contact: 'contact',
	default: 'default'
    }
}

interface PageStatus {
    links: string;
    about: string;
    contact: string;
    default: string;
}

interface Pair {
    text: string | JSX.Element;
    icon: JSX.Element;
}

interface ContentsElement {
    text: JSX.Element;
    icon?: JSX.Element;
}

interface OSS {
    text: string;
    link: string;
    genre: string;
    date: string;
}

interface InPageContentsProps {
    contents: string | undefined;
    contentsName: PageStatus;
}

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
    ref: string;
    event: () => void;
}

interface PageStatus {
    links: string;
    about: string;
    contact: string;
    default: string;
}

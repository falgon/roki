import * as React from 'react';

interface MenuElement {
    color: string;
    icon: string;
    click? : () => void;
}

interface MenuProps {
    menuData: MenuElement[];
}

interface MenuState {
    isOpen: boolean;
}

export default class Menu extends React.Component<MenuProps, MenuState> {
    constructor(props: MenuProps) {
        super(props);
	this.state = { isOpen: false };
    }
    public componentWillMount() {
//	this.makeMenu(this.props.menuData);
    }
    public makeMenu(){}

    public render() {
        return (<p>a</p>);
    }
}

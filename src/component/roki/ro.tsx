import * as React from 'react';
import { isIE10orOlder } from '../detectIE';

export default class Ro extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    public render() {
        return (
            <div style={{ zIndenx: 0, position: 'absolute', top: 0, bottom: 0, right: '180px', left: 0, margin: 'auto', width: '80px' }} id='ro'><h1>Ro</h1></div>
        );
    }

    private updateWindowDimensions() {
        if (isIE10orOlder()) {
            var height = document.documentElement.clientHeight;
        } else {
            var height = window.innerHeight;
        }
        this.setState({ windowHeight: height });
    }
}

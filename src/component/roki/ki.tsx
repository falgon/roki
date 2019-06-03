import * as React from 'react';
import { coverHeight } from '../detectIE';

export default class Ki extends React.Component<{}, {}> {
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
            <div style={{ zIndex: 0, position: 'absolute', top: 0, bottom: 0, left: '240px', right: 0, margin: 'auto', width: '80px' }} id='ki'><h1>ki</h1></div>
        );
    }

    private updateWindowDimensions() {
        this.setState({ windowHeight: coverHeight() });
    }
}

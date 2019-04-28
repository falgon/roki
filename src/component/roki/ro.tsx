import * as React from 'react';
import { coverHeight } from '../detectIE';

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
            <div className='RoView' id='ro'><h1>Ro</h1></div>
        );
    }

    private updateWindowDimensions() {
        this.setState({ windowHeight: coverHeight() });
    }
}

import * as React from 'react';
import * as MediaQuery from 'react-responsive';

export default class Main extends React.Component<undefined, undefined> {
    constructor(props: undefined) {
        super(props);
    }
    public render() {
        return (
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <p>laptop</p>
                </MediaQuery>
                <MediaQuery query="(max-width: 1224px)">
                    <p>tablet</p>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <p>portrait</p>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                    <p>landscape</p>
                </MediaQuery>
                <MediaQuery query="(min-resolution: 2dppx)">
                    <p>retina</p>
                </MediaQuery>
            </div>
        );
    }
}

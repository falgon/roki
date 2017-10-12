import * as React from 'react';

interface TestProps {
    message: string;
}

interface TestState {
    message: string;
}

export default class Test extends React.Component<TestProps, TestState> {
    constructor(props: TestProps) {
	super(props);
    }
    public componentDidMount() {
    }
    public render() {
	return <div><p>{this.props.message}</p></div>;
    }
}

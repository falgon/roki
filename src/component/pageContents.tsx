import * as React from 'react';
import ContentsLayouter from './contents/Layouter';
import Links from './contents/Links';
import About from './contents/About';
import Contact from './contents/Contact';

export default class InPageContents extends React.Component<InPageContentsProps, {}> {
    constructor(props: InPageContentsProps) {
        super(props);
    }

    public render() : JSX.Element {
	switch(this.props.contents) {
	    case this.props.contentsName.links:{
		return <ContentsLayouter><Links /></ContentsLayouter>;
	    }
	    case this.props.contentsName.about:{
		return <ContentsLayouter><About /></ContentsLayouter>;
	    }
	    case this.props.contentsName.contact:{
		return <ContentsLayouter><Contact /></ContentsLayouter>;
	    }
	    case this.props.contentsName.default:{
		return <p>Hidiing :)</p>;
	    }
	    default:{
		return <p>Hiding :)</p>;
	    }
	}
    }
}

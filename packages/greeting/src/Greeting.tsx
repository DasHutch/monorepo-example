import * as React from 'react';

export default class Greeting extends React.Component<any, any> {
    constructor(props: any) {
        debugger;
        super(props);

        this.state = {
            name: this.props.name || 'World'
        };
    }

    public render() {
        return (
            <h1>Hello {this.state.name}</h1>
        );
    }
}

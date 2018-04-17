import React, { Component, PureComponent } from 'react';

class HelloWorldElement extends Component {
    render() {
        return React.createElement('div', null, 'Hello World');
    }
}

class HelloWorldComponent extends Component {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

class HelloWorldPureComponent extends PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <div>Hello World</div>
        );
    }
}

const HelloWorldFunctionalComponent = () => (
    <div>Hello World</div>
);

const App = () => (
    <div>
        <p>Hello World</p>
        <HelloWorldElement />
        <HelloWorldComponent />
        <HelloWorldPureComponent />
        <HelloWorldFunctionalComponent />
    </div>
);

export default App;
import React from 'react';

// ** lesson 15 - Compose React Component Behavior with Higher Order Components

const HOC = (InnerComponent) => class extends React.Component {
    constructor() {
        super();
        this.state = {count: 0}
    }
    update() {
        this.setState({count: this.state.count + 1})
    }
    componentWillMount() {
        console.log('HOC will mount...')
    }
    render() {
        return(
            <InnerComponent
                {...this.props}
                {...this.state}
                update={this.update.bind(this)} />
        )
    }
};

class App extends React.Component {
    render() {
        return(
            <div>
                <Button>click me</Button>
                <hr />
                <LabelHOC>label</LabelHOC>
                <hr />
                <Button2HOC>boogie!</Button2HOC>
            </div>
        )
    }
}

const Button = HOC((props) =>
    <button onClick={props.update}>{props.children} - {props.count}</button>);



class Button2 extends React.Component {
    render() {
        return(
            <button onClick={this.props.update}>
                {this.props.children} - {this.props.count}
            </button>
        )
    }
}

class Label extends React.Component {
    componentWillMount() {
        console.log('Label component will mount...')
    }
    render() {
        return(
            <label onMouseMove={this.props.update}>
                {this.props.children} - {this.props.count}
            </label>
        )
    }
}

const LabelHOC = HOC(Label);
const Button2HOC = HOC(Button2);


export default App


// ** lesson 14 - Use map to Create React Components from Arrays of Data

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {items: []}
//     }
//     componentWillMount() {
//         fetch('http://swapi.co/api/people/?format=json')
//             .then(response => response.json())
//             .then( ({results: items}) => this.setState({items}))
//     }
//     filter(e) {
//         this.setState({filter: e.target.value})
//     }
//     render() {
//         let items = this.state.items;
//         if(this.state.filter) {
//             items = items.filter(item =>
//                 item.name.toLowerCase()
//                 .includes(this.state.filter.toLowerCase() ))
//         }
//         return(
//             <div>
//                 <input type="text" onChange={this.filter.bind(this)} />
//                 {items.map(item =>
//                 <Person key={item.name} person={item} />)}
//             </div>
//         )
//     }
// }
//
// const Person = (props) => <h4>{props.person.name}</h4>
//
// export default App


// ** lesson 13 - Control React Component Updates When New Props Are Received
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {increasing: false}
//     }
//     update() {
//         ReactDOM.render(
//             <App val={this.props.val + 1} />, document.getElementById('root')
//         )
//     }
//     componentWillReceiveProps(nextProps) {
//         this.setState({increasing: nextProps.val > this.props.val})
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps.val % 5 === 0;
//     }
//
//     render() {
//         console.log(this.state.increasing);
//         return(
//             <button onClick={this.update.bind(this)}>
//                 {this.props.val}
//             </button>
//         )
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log(`prevProps: ${prevProps.val}`)
//     }
// }
//
// App.defaultProps = {val: 0}
//
// export default App


// ** Lesson 12 - Manage React Component State with Lifecycle Methods
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {val: 0};
//         this.update = this.update.bind(this);
//     }
//
//     update() {
//         this.setState({val: this.state.val + 1})
//     }
//
//     componentWillMount() {
//         console.log('componentWillMount');
//         this.setState({m: 2})
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount');
//         console.log(ReactDOM.findDOMNode(this))
//         this.inc = setInterval(this.update, 500)
//     }
//
//     render() {
//         console.log('render');
//         return <button onClick={this.update}>
//             {this.state.val * this.state.m}
//         </button>
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//         clearInterval(this.inc)
//     }
// }
//
// class Wrapper extends React.Component {
//     mount() {
//         ReactDOM.render(<App />, document.getElementById('a'))
//     }
//
//     unmount() {
//         ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.mount.bind(this)}>Mount</button>
//                 <button onClick={this.unmount.bind(this)}>UnMount</button>
//                 <div id="a"></div>
//             </div>
//         )
//     }
// }
//
// export default Wrapper



// ** lesson 11 - Understand the React Component Lifecycle Methods
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {val: 0};
//         this.update = this.update.bind(this);
//     }
//
//     update() {
//         this.setState({val: this.state.val + 1})
//     }
//
//     componentWillMount() {
//         console.log('componentWillMount');
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount');
//     }
//
//     render() {
//         console.log('render');
//         return <button onClick={this.update}>{this.state.val}</button>
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//     }
// }
//
// class Wrapper extends React.Component {
//     mount() {
//         ReactDOM.render(<App />, document.getElementById('a'))
//     }
//
//     unmount() {
//         ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.mount.bind(this)}>Mount</button>
//                 <button onClick={this.unmount.bind(this)}>UnMount</button>
//                 <div id="a"></div>
//             </div>
//         )
//     }
// }
//
// export default Wrapper



// ** lesson 10 - Use React ref to Get a Reference to Specific Components
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {a: ''}
//     }
//
//     update(e) {
//         this.setState({
//             a: ReactDOM.findDOMNode(this.a).value,
//             //z: this.a.refs.input.value,
//             b: this.refs.b.value
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <input
//                     //ref="a"
//                     ref={component => this.a = component}
//                     onChange={this.update.bind(this)}
//                 /> {this.state.a}
//                 <hr />
//                 <input
//                     ref="b"
//                     type="text"
//                     onChange={this.update.bind(this)}
//                 /> {this.state.b}
//             </div>
//         )
//     }
// }
//
// class Input extends React.Component {
//     render() {
//         return (
//             <div>
//             <input type="text" ref="input" onChange={this.props.update}/>
//             </div>
//         )
//     }
// }

// ** lesson 9 - Normalize Events with Reacts Synthetic Event System
//class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {currentEvent: '----'};
//         this.update = this.update.bind(this);
//     }
//     update(e) {
//         this.setState({currentEvent: e.type});
//     }
//     render() {
//         return(
//             <div>
//                 <textarea
//                     onKeyPress={this.update}
//                     onCopy={this.update}
//                     onCut={this.update}
//                     onPaste={this.update}
//                     onFocus={this.update}
//                     onBlur={this.update}
//                     onDoubleClick={this.update}
//                     onTouchStart={this.update}
//                     onTouchMove={this.update}
//                     onTouchEnd={this.update}
//                     rows="10" cols="30" />
//                 <h1>{this.state.currentEvent}</h1>
//             </div>
//         )
//     }
// }


// ** lesson 8

// class App extends React.Component {
//     render() {
//         return (
//             <Title text="Whassup" />
//         )
//     }
// }
//
// const Title = (props) => <h1>Title: {props.text}</h1>
//
// Title.propTypes = {
//     // text: React.PropTypes.string
//     text(props, propName, component) {
//         if(!(propName in props)) {
//             return new Error(`missing ${propName}`)
//         }
//         if(props[propName].length < 6) {
//             return new Error(`${propName} was too short`)
//         }
//     }
// };


// ** lesson 7
// class App extends React.Component {
//     render() {
//         return(
//             <Buttion>I <Heart /> React</Buttion>
//         )
//     }
// }
//
// const Buttion = (props) => <button>{props.children}</button>
//
// class Heart extends React.Component {
//     render() {
//         return (
//             <span>&hearts;</span>
//         )
//     }
// }


import React from 'react';

// ** lesson 21 - Debug React Components with Developer Tools in Chrome



// ** lesson 20 - Write More Reusable React Components with Composable APIs

// jsbin code doesn't work... moving on ...
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             red: 0
//         };
//         this.update = this.update.bind(this)
//     }
//
//     update(e) {
//         this.setState({
//             red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <NumInput
//                     ref="red"
//                     min={0}
//                     max={255}
//                     step={0.01}
//                     val={+this.state.red}
//                     type="number"
//                     label="Red"
//                     update={this.update}/>
//             </div>
//         );
//     }
// }
//
// class NumInput extends React.Component {
//     render() {
//         let label = this.props.label !== '' ?
//             <label>{this.props.label} - {this.props.val}</label> : ''
//         return (
//             <div>
//                 <input ref="inp"
//                        type={this.props.type}
//                        min={this.props.min}
//                        max={this.props.max}
//                        step={this.props.step}
//                        defaultValue={this.props.val}
//                        onChange={this.props.update}/>
//                 {label}
//             </div>
//         );
//     }
// }
//
// NumInput.propTypes = {
//     min: React.PropTypes.number,
//     max: React.PropTypes.number,
//     step: React.PropTypes.number,
//     val: React.PropTypes.number,
//     label: React.PropTypes.string,
//     update: React.PropTypes.func.isRequired,
//     type: React.PropTypes.oneOf(['number', 'range'])
// };
//
// NumInput.defaultProps = {
//     min: 0,
//     max: 0,
//     step: 1,
//     val: 0,
//     label: '',
//     type: 'range'
// };
//
//
// ReactDOM.render(<App />, document.getElementById('app'));




// ** lesson 19 - Use React.cloneElement to Extend Functionality of Children Components

// class App extends React.Component {
//     render() {
//         return(
//             <Buttons>
//                 <button value="A">A</button>
//                 <button value="B">B</button>
//                 <button value="C">C</button>
//             </Buttons>
//         )
//     }
// }
//
// class Buttons extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             selected: 'None',
//             btnColor: ''
//         }
//     }
//     selectItem(selected) {
//         this.setState({selected});
//         console.log(selected);
//
//     }
//     render() {
//         let fn = child =>
//             React.cloneElement(child, {
//                 onClick: this.selectItem.bind(this, child.props.value)
//             });
//         let items = React.Children.map(this.props.children, fn);
//         return(
//             <div>
//                 <h2>You have selected: {this.state.selected}</h2>
//                 {items}
//             </div>
//         )
//     }
// }
//
// export default App


// ** lesson 18 - Understand React.Children Utilities

// class App extends React.Component {
//     render() {
//         return(
//             <Parent>
//                 <div className="childA"></div>
//                 <div className="childB"></div>
//                 <div className="childC"></div>
//             </Parent>
//         )
//     }
// }
//
// class Parent extends React.Component {
//     render() {
//          let items = React.Children
//              .map(this.props.children, child => child);
//
//         //let items = React.Children.toArray(this.props.children);
//
//         // let items = React.Children.forEach(this.props.children, child =>
//         //     console.log(child.props.className));
//
//         // ** for a single child - fails on 2 or more kiddos
//         //let items = React.Children.only(this.props.children);
//
//         console.table(items);
//         return null
//     }
// }
//
// export default App


// ** lesson 17 - Understand JSX at a Deeper Level
// used app built in lesson 16 ... no coding outside of that editor.


// ** lesson 16 - Build a JSX Live Compiler as a React Component
// import './App.css';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             input: '',
//             output: '',
//             err: ''
//         }
//     }
//
//     update(e) {
//         let code = e.target.value;
//         try {
//             this.setState({
//                 output: window.Babel
//                     .transform(code, {presets: ['es2015', 'react']})
//                     .code,
//                 err: ''
//             })
//         } catch (err) {
//             this.setState({err: err.message})
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <header>{this.state.err}</header>
//                 <div className="container">
//                     <textarea onChange={this.update.bind(this)}
//                               defaultValue={this.state.input}
//                     placeholder="add your jsx here..."
//                     />
//                     <pre>
//                     {this.state.output}
//                 </pre>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default App


// ** lesson 15 - Compose React Component Behavior with Higher Order Components

// const HOC = (InnerComponent) => class extends React.Component {
//     constructor() {
//         super();
//         this.state = {count: 0}
//     }
//     update() {
//         this.setState({count: this.state.count + 1})
//     }
//     componentWillMount() {
//         console.log('HOC will mount...')
//     }
//     render() {
//         return(
//             <InnerComponent
//                 {...this.props}
//                 {...this.state}
//                 update={this.update.bind(this)} />
//         )
//     }
// };
//
// class App extends React.Component {
//     render() {
//         return(
//             <div>
//                 <Button>click me</Button>
//                 <hr />
//                 <LabelHOC>label</LabelHOC>
//                 <hr />
//                 <Button2HOC>boogie!</Button2HOC>
//                 <hr />
//                 <CheckBoxy />
//             </div>
//         )
//     }
// }
//
// const Button = HOC((props) =>
//     <button onClick={props.update}>
//         {props.children} - {props.count}
//     </button>);
//
// const CheckBoxy = HOC((props) =>
//     <input type="checkbox" value={props.count} onClick={props.update} />
//
// );
//
// class Button2 extends React.Component {
//     render() {
//         return(
//             <button onClick={this.props.update}>
//                 {this.props.children} - {this.props.count}
//             </button>
//         )
//     }
// }
//
// class Label extends React.Component {
//     componentWillMount() {
//         console.log('Label component will mount...')
//     }
//     render() {
//         return(
//             <label onMouseMove={this.props.update}>
//                 {this.props.children} - {this.props.count}
//             </label>
//         )
//     }
// }
//
// const LabelHOC = HOC(Label);
// const Button2HOC = HOC(Button2);
//
//
// export default App


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


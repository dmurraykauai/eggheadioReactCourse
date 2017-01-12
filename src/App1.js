import React from 'react';

// const App = () => <h1>Hey there</h1>

// ** class component (use for state)
class App extends React.Component {
    constructor() {
        super(); //gives `this` context within our App component
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }

    }
    update(e) {
        this.setState({txt: e.target.value})
    }
    btnClick(e) {
        this.setState({cat: e.target.value})
    }
    render() {
        return (
            <div>
                <h1>hi there</h1>
                <b>hello</b><br/>
                {this.props.txt}<br/>
                <input type="text"
                       onChange={this.update.bind(this)}/><br/>
                {this.state.txt} - {this.state.cat}<br/>
                <Widget update={this.update.bind(this)} />
                <Btn update={this.update.bind(this)} />
            </div>
        );
    }
}

// ** stateless function component (no state!)
const Widget = (props) =>
    <input type="text" onChange={props.update} />;

const Btn = (props) =>
    <button type="button" value={5} onClick={props.update}>click em</button>;


// Define property types
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: "this is the default txt",
    cat: 7
};

export default App;

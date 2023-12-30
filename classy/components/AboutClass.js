import React from 'react'

class AboutClass extends React.Component {
constructor(props) {
super(props);

this.state = {
    count: 0,
    count2:10
};
console.log("constructor called")
}

// like useEffect
componentDidMount(){
    console.log("componentDidMount")
}

    render() {
        console.log("render method")
        return (
          <div>
            <h1>Hello About</h1>
            <h1>{this.props.name}</h1>
            <h1>Class COunter: {this.state.count}</h1>
            <button onClick={()=>{this.setState({ count: this.state.count + 1 })}}>
              ClassBtnIncrement
            </button>
            <h1>Class COunter2: {this.state.count2}</h1>
            <button onClick={()=>{this.setState({ count2: this.state.count2 + 1,count:this.state.count+26 })}}>
              ClassBtnIncrement2
            </button>
          </div>
        );
    }
}

export default AboutClass
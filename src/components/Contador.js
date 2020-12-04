import {Component} from 'react';

class Contador extends Component{

    constructor(props){
        super(props);
        this.state={
           count: 0,
        }

        this.incrementar =this.incrementar.bind(this)
        this.decrementar =this.decrementar.bind(this)
    }

    incrementar(){
        this.setState({count: this.state.count +1});
    }
    decrementar(){
        this.setState({count: this.state.count -1});
    }




    render(){
        return(
            <main className="container">
            <p className="count">{this.state.count}</p>
            <section className="controles">
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decrementar}>Decrementar</button>
            </section>
            </main>
        )
        
    }
}

export default Contador;
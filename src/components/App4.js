import React from 'react';

class App4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ''};
    }

    changetxtName = (event)=>{
        this.setState({txtNome: event.target.value})
    }

    persistName = ()=>{
        this.setState({nome: this.state.txtNome})
    }

    render(){

        const renderForm = () => {
            return (
                <>
                    Nome: <input onChange={this.changetxtName} type="text" value={this.state.nome} placeholder="Digite seu primeiro nome"></input>
                    <button onClick={this.persistName}>Salvar</button>
                </>
            );
        }  
        

        const renderText = () => {
            return (
                <>
                    
                    <p>
                        Olá {this.state.nome}
                    </p>
                </>
            );
        }

        return !this.state.nome ? renderForm() : renderText();

    }
}

export default App4;

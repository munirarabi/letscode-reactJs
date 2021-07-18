import React from 'react';

class App5 extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: undefined, txtNome: ''}
    }

    changetxtName = (event)=>{
        this.setState({txtNome: event.target.value})
    }

    componentDidMount = () => {
        const nome = sessionStorage.getItem('nome')
        if (nome) this.setState({nome})
    }

    persistName = ()=>{
        this.setState({nome: this.state.txtNome});
        sessionStorage.setItem('nome', this.state.txtNome)
    }

    render(){

        const renderForm = () => {
            return (
                <>
                    Nome: <input onChange={this.changetxtName} type="text" value={this.state.nome}></input>
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

export default App5;

import React from 'react';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nome: '',
        linguagem: 'Javascript',
        tipo: 'Estudante',
        dedico: true,
        bio: '',
    }

    this.handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    this.changeName = (event) => {
      this.setState({nome: event.target.value})
    }

    this.changeSelect = (event) => {
      this.setState({linguagem: event.target.value})
    }

    this.changeTipo = (event) => {
      this.setState({tipo: event.target.value})
    }

    this.changeCheckbox = (event) => {
      this.setState({dedico: event.target.checked})
    }

    this.changeBio = (event) => {
      this.setState({bio: event.target.value})
    }

  }

  render(){
    return (
        <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome: <input type="text" value={this.state.nome} onChange={this.changeName} />
                </label>
                <br />
                <br />
                <label>
                  Linguagem favorita
                  <select value={this.state.linguagem} onChange={this.changeSelect}>
                    <option>Javascript</option>
                    <option>Python</option>
                    <option>C++</option>
                  </select>
                </label>
                <br />
                <br />
                <label>
                  Sou:
                  <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeTipo} value="programador" />Programador
                  <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeTipo} value="estudante" />Estudante
                </label>
                <br />
                <br />
                <label>
                  <input type="checkbox" checked={this.state.dedico} onChange={this.changeCheckbox} />Dedico 8h semanais aos estudos
                </label>
                <br />
                <br />
                <label>
                  Bio: 
                  <textarea cols="50" value={this.state.bio} onChange={this.changeBio} />
                </label>
                <br />
                <br />
                <input type="submit" value="Salvar" />
            </form>
        </>
    );
  }

}

export default Formulario;
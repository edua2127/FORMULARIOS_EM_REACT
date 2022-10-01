import React, { useState } from 'react'
import './PrimeiroFormulario.module.css'
const PrimeiroFormulario = ({user}) => {
  //gerenciamento dos dados - manipulacado dos valores
  //controled inputs
  const [nome, setNome] = useState(user ? user.nome : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [senha, setSenha] = useState(user ? user.senha : '')
  const [bio, setBio] = useState(user ? user.bio : '')
  const [habilitado, setHabilitado] = useState(user ? user.habilitado : '')
  const alterarValorNome = (event) => {
    setNome(event.target.value)
  }
  const alterarValorEmail = (event) => {
    setEmail(event.target.value)
  }
  
  const envioFormulario = (event) => {
    event.preventDefault()
    console.log(nome, email, senha, bio, habilitado)

    //limpeza do formulario
    setEmail('')
    setNome('')
    setSenha('')
    setBio('')
    setHabilitado('')
  }
  return (
    <div>
      {/* CRIACAO DE FORMULARIO */}
      {/* envio de formulario - onSubmit*/}
     <form onSubmit={envioFormulario}>
        <div>
          <label htmlFor='nomeUsuario'>Nome</label>
          <input type="text" name='nomeUsuario' value={nome} placeholder='digite o seu nome' onChange={alterarValorNome}/>
        </div>
        <label>
          <span>E-mail</span>
          <input type="email" name='email' value={email} placeholder='digite o seu email' onChange={alterarValorEmail}/>
        </label>
        <label>
          <span>Senha</span>
          {/* manipulacao de forma simplificada */}
          <input type={'text'} name="senha" value={senha} placeholder="digite sua senha" onChange={(event)=> {
            setSenha(event.target.value)
          }}/>
        </label>
        {/* textarea input */}
        <label>
          <span>Biografia do usuario</span>
          <textarea placeholder='digite a biografia do usuario' onChange={(event) => setBio(event.target.value)} value={bio} />
        </label>
        {/* select input exemplo */}
        <label>
          <span>Habilitado</span>
          <select value={habilitado} onChange={(event)=> setHabilitado(event.target.value)}>
            <option value={'sim'}>Sim</option>
            <option value={'estou fazendo'}>Estou fazendo</option>
            <option value={'não'}>Não</option>
          </select>
        </label>
       <input type={'submit'} value="Enviar"/>
     </form>
    </div>
  )
}

export default PrimeiroFormulario
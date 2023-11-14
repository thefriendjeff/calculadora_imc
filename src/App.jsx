import React,{useState} from 'react'

const tabelaIMC=()=>{
  return (
    <table border='1' style={{borderCollapse:'colapse'}}>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do peso</td>
          <td>Abaixo do 18.5</td>
        </tr>
        <tr>
          <td>Peso normal</td>
          <td>Entre 25,0 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade grau 1º</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade grau 2º</td>
          <td>Entre 35 e 39.9</td>
        </tr>
        <tr>
          <td>Obesidade grau 3º</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  )
}

// e = paramêtro de entrada
const peso=(peso, setPeso) =>{
  return(
    <div>
      <label>
        Peso
        <input type="text" value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>
      </label>
    </div>
  )
}

const altura=(altura, setAltura) =>{
  return(
    <div>
      <label>
        Altura
        <input type="text" value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>
      </label>
    </div>
  )
}

const calcular=(peso,altura,setResultado)=>{
    const calc=()=>{
      setResultado(peso/(altura*altura));
    }

    return(
      <div>
        <button onClick={calc}>Calcular</button>
      </div>
    )
}

const resultado=(r)=>{
  return(
    <div>
      <p>Resultado: {r.toFixed(2)}</p>
    </div>
  )
}

function App() {

  const [p,sp]=useState(0)
  const [a,sa]=useState(0)
  const [r,sr]=useState(0)

  return (
    <>
      {peso(p,sp)}
      {altura(a,sa)}
      {calcular(p,a,sr)}
      {resultado(r)}
      {tabelaIMC()}
    </>
  )
}

export default App




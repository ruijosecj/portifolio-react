import styled from 'styled-components'

const Botao = styled.button`
  background-color: ${(props) => (props.principal ? 'blue' : 'green')};
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>Cancelar</Botao>
    </>
  )
}
export default Teste

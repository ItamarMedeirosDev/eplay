import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#eee',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Roboto, sans-serif;
  list-style:none;
  }
  body{
    background-color:${cores.preto};
    color: ${cores.branco};
  }
`

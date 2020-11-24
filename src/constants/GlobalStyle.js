import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Courier, monospace;
    font-size: 20px;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
  }

  li {
    list-style-type: none;
  }
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

.icons {
  font-size: 1.4rem;
  color: #2F5EF7;
  transition: 0.3s ease;
  &:hover {
  color: #172232;
  }
}

.container {
background-color: #f8f9fa;
max-width: 80%;
}

`;

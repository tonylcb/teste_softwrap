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
  color: #00B7F8;
}

  @media (max-width: 700px) {
    font-size: 1.2rem;
  } ;
}

.container {
background-color: #f8f9fa;
max-width: 80%;
min-height: 100vh;
@media (max-width: 700px) {
 max-width: 90%;
  } ;
}


.animeRight {
  transform: translateX(100px);
  opacity: 0;
  animation: animeLeft 0.5s forwards;
}

@keyframes animeLeft {
  to {
    transform: initial;
    opacity: initial;
  }
}

.animeLeft {
  transform: translateX(-100px);
  opacity: 0;
  animation: animeLeft 0.5s forwards;
}

@keyframes animeLeft {
  to {
    transform: initial;
    opacity: initial;
  }
}

`;

import styled from 'styled-components';
import './App.css';
import Palette from './components/Palette';
import TileEditor from './components/TileEditor';


function App() {
  const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
  `;


  return (
      <Wrapper>
        <Palette/>
        <TileEditor/>  
      </Wrapper>
      
  );
}

export default App;
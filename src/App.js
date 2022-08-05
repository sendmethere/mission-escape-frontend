import styled from 'styled-components';
import './App.css';
import MapInfo from './components/MapInfo';
import Palette from './components/Palette';
import TileEditor from './components/TileEditor';
import Scripter from './components/Scripter';
import Footer from './components/Footer';


function App() {
  const Screen = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background: #fafbfe;
    padding: 1rem;
  `;
  const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  `;


  return (
      <Screen>
        <MapInfo></MapInfo>
        <Wrapper>
          <Palette/>
          <TileEditor/>  
          <Scripter/>
        </Wrapper>
        <Footer/>
      </Screen>
      
  );
}

export default App;
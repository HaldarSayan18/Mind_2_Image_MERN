import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePost from './pages/CreatePost.js';
import Navbar from './components/Navbar.js';

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  overflow-x:hidden;
  overflow-y:hidden;
  background:${({ theme }) => theme.bg};
  color:${({ theme }) => theme.text_primary};
`
const Wrapper = styled.div`
  height:100%;
  position:relative;
  display:flex;
  flex-direction:column;
  flex:3,
  justify-content:center;
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/post' element={<CreatePost />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;

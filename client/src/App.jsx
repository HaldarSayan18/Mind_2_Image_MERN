import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Navbar from './components/Navbar.jsx';
import Layout from './pages/Layout.jsx';

const Container = styled.div`
  width:98.9vw;
  height:100%;
  overflow-x:hidden;
  overflow-y:hidden;
  overflow: hidden;
  // background:${({ theme }) => theme.bg};
  // color:${({ theme }) => theme.text_primary};
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        {/* <Wrapper> */}
          <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
              {/* <Route path='/' element={<Layout />} /> */}
              <Route path='/' element={<HomePage />} />
              <Route path='/post' element={<CreatePost />} />
            </Routes>
          </BrowserRouter>
        {/* </Wrapper> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;

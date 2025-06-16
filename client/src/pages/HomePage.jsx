import React, { useEffect, useState } from 'react'
import '../styles/HomePage.css';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import ImgCard from '../components/ImgCard';
import Navbar from '../components/Navbar';
import CreatePost from './CreatePost';
import { useNavigate, useLocation } from "react-router-dom";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Wrapper = styled.div`
  display: grid;
  // flex-direction: column;
  // align-items: center;
  justify-content: space-evenly;
  width: 95%;
  max-width: 1400px;
  background-color: red;
  padding: 32px 10px;
  gap: 20px;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 640px) and (max-width: 1190px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
// const ImageCardWrap = styled.div`
//   display: grid;
//   gap: 20px;
//   @media (min-width: 1200px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
//   @media (min-width: 640px) and (max-width: 1190px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 630px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `

const HomePage = () => {
  const [view, setView] = useState('home'); // 'home' or 'createpost'
  const navigate = useNavigate();
  const location = useLocation();
  // Sync the state with url
  // useEffect(() => {
  //   if (location.pathname === "/post") {
  //     setView("post");
  //   } else {
  //     setView("home");
  //   }
  // }, [location.pathname]);

  // Redirect to "/" if page is refreshed on "/post"
  // useEffect(() => {
  //   if (location.pathname === "/post" && performance?.navigation?.type === 1) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <>
      <Navbar setView={setView} currentView={view} />
      {view === 'post' ? <CreatePost /> : (
        <div className='home-container'>
          <span className='home-header'>
            <h4 className='home-header-h4'>Explore our popular community posts</h4>
            <span className='home-header-span'> <AutoAwesomeIcon /> Generated with AI <AutoAwesomeIcon /></span>
          </span>
          <SearchBar />
          <Wrapper>
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
          </Wrapper>
        </div>
      )
      }
    </>
  )
}

export default HomePage

import React, { useEffect, useState } from 'react'
import '../styles/HomePage.css';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import ImgCard from '../components/ImgCard';
import Navbar from '../components/Navbar';
import CreatePost from './CreatePost';
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  background-color: red;
  padding: 32px 0px;
`
const ImageCardWrap = styled.div`
  display: grid;
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

const Layout = () => {
    const [view, setView] = useState('home'); // 'home' or 'createpost'
    const navigate = useNavigate();
    const location = useLocation();
    // Sync the state with url
    useEffect(() => {
        if (location.pathname === "/post") {
            setView("post");
        } else {
            setView("home");
        }
    }, [location.pathname]);

    // Redirect to "/" if page is refreshed on "/post"
    useEffect(() => {
        if (location.pathname === "/post" && performance?.navigation?.type === 1) {
            navigate("/");
        }
    }, []);
    return (
        <>
            <Navbar setView={setView} currentView={view} />
            <Outlet />
        </>
    )
}

export default Layout

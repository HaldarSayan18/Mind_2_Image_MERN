import React from "react";
import styled, { useTheme } from "styled-components";
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExploreIcon from '@mui/icons-material/Explore';

import '../styles/Navbar.css';
import { useLocation, useNavigate } from "react-router-dom";
// import { Bio } from "../data/constants";
// import { MenuRounded } from "@mui/icons-material";

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Container = styled.div`
    flex:1;
    width: 100%;
    align-items:flex-start;
    height: 6vh;
    position: relative;
    // margin-bottom:85vh;
    display: flex;
    justify-content:center;
    background:${({ theme }) => theme.bg};
    color:${({ theme }) => theme.text_primary};
    font-weight:bold;
    font-size:1.2rem;
    gap:65vw;
    padding:15px 10px;
    border: 1px solid red;
    box-shadow: 0 0 10px rgb(82 81 81);
    @media only screen and (max-width:600px) {
        padding: 10px 0px;
        gap:18vw;
    }
`

const Navbar = ({ setView, currentView }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return (
    <Container className="navbar-main-container">
      <span className="navbar-header-text">Mind-2-Img</span>
      {currentView === "post" ? (
        <Button type="secondary" variant="contained" style={{
          width: "auto",
          height: "6vh",
          borderRadius: "10px",
          gap: "5px",
          padding: "10px",
        }}
          // onClick={() => path === "/post" ? navigate("/") : navigate("/post")}
          onClick={() => setView("")}
        >
          <ExploreIcon />
          Explore Posts
        </Button>
      ) : (
        <Button variant="contained" style={{
          width: "auto",
          height: "6vh",
          borderRadius: "10px",
          gap: "5px",
          padding: "10px",
        }}
          // onClick={() => path === "/" ? navigate("/post") : navigate("/")}
          onClick={() => setView("post")}
        >
          <AddCircleOutlineOutlinedIcon />
          Create New Post
        </Button>
      )}
    </Container>

  );
};

export default Navbar;
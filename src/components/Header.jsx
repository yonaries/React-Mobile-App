import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/tmdb.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={logo} onClick={() => navigate("/")} />
      <SearchBar />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 35%;
    cursor: pointer;
    margin: 2rem 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      width: 70%;
      margin: 2rem 0;
    }
  }
`;

export default Header;

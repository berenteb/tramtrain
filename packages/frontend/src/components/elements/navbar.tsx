import styled from "styled-components";
import {Menu, MenuAltRight} from "@styled-icons/boxicons-regular"
import {boxShadows, colors, spacing} from "../../theme/theme";
import {ButtonKinds, LinkButton} from "./button";
import {Paths} from "../../utils/paths";
import {useState} from "react";
import {ReactComponent as TramLogo} from "../../assets/icons/tram-light.svg"
import {useNavigate} from "react-router";

export function Navbar(){
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    return <NavbarWrapper
        onClick={(evt) => {
            if ((evt.target as Element).closest(".navbutton")) setMenuOpen(false);
        }}
    >
    <NavbarContentWrapper>
        <NavbarMainGroup>
            <Logo/>
            <Title onClick={()=>{navigate("/",{replace: true})}}>Tram-train</Title>
            <MenuButton
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
                isOpen={menuOpen}
            />
        </NavbarMainGroup>
        <NavbarGroup $isMenuOpen={menuOpen} >
            <LinkButton className="navbutton" kind={ButtonKinds.PLAIN} to={Paths.MAIN}>Főoldal</LinkButton>
            <LinkButton className="navbutton" kind={ButtonKinds.PLAIN} to={Paths.STOPS}>Megállók</LinkButton>
        </NavbarGroup>
    </NavbarContentWrapper>
    </NavbarWrapper>
}

function MenuButton({onClick,isOpen}: {
    onClick: () => void;
    isOpen: boolean;
    $textColor?: string;
}) {
    return (
        <MenuButtonWrapper onClick={onClick}>
            {isOpen ? <Menu /> : <MenuAltRight />}
        </MenuButtonWrapper>
    );
}

const MenuButtonWrapper = styled.button`
  cursor: pointer;
  appearance: none;
  background: none;
  border: none;
  display: none;
  * {
    height: 3rem;
    color: white;
  }
  @media (max-width: 800px) {
    display: flex;
  }
`;

const NavbarContentWrapper = styled.nav`
  max-width: 900px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  color: white;
  position: -webkit-sticky;
  padding: 5px 10px;
`

const LogoWrapper = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 300px;
  margin: ${spacing.sm};
  overflow: hidden;
`

function Logo(){
    return <LogoWrapper>
        <TramLogo/>
    </LogoWrapper>
}

const Title = styled.h1`
  font-size: 50px;
  cursor: pointer;
`

const NavbarMainGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const NavbarGroup = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    text-align: center;
    width: 100%;
    display: ${({ $isMenuOpen }) => ($isMenuOpen ? "block" : "none")};
  }
`;

const NavbarWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${boxShadows.md};
  -webkit-box-shadow: ${boxShadows.md};
  -moz-box-shadow: ${boxShadows.md};
  background-color: ${colors.primary};
`;


import { HeaderContainer, Nav, NavLink } from './style'

function Header() {
    return(
        <>
            <HeaderContainer>
                <Nav>
                    <NavLink href="/" className='tag__nav'>Git Learn</NavLink>
                </Nav>
            </HeaderContainer>
        </>
    )
}

export default Header;
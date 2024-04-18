import NavBar from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
	Header,
	Container,
	HeaderContainer,
	LogoIcon,
	Logo,
} from './Layout.styled';
import sprite from '../../assets/icons/sprite.svg';
const Layout = () => {
	return (
		<>
			<Header>
				<HeaderContainer>
					<Logo>
						<LogoIcon>
							<use href={`${sprite}#logoIcon`}></use>
						</LogoIcon>
						CAMPER<span>ok</span>
					</Logo>
					<NavBar />
				</HeaderContainer>
			</Header>
			<main>
				<Suspense>
					<Container>
						<Outlet />
					</Container>
				</Suspense>
			</main>
		</>
	);
};

export default Layout;

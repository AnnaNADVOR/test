import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom/dist';

export const Nav = styled.nav`
	@media screen and (min-width: 768px) {
		margin-left: 50px;
	}
`;

export const NavList = styled.ul`
	display: flex;
`;

export const NavListItem = styled.li`
	&:not(:last-child) {
		margin-right: 20px;
	}

	@media screen and (min-width: 768px) {
		&:not(:last-child) {
			margin-right: 50px;
		}
	}
`;

export const Link = styled(NavLink)`
	display: block;
	position: relative;
	padding-top: 20px;
	padding-bottom: 20px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.2;
	color: ${({ theme }) => theme.colors.darkblue};

	&.active:after {
		position: absolute;
		top: 55px;
		display: block;
		content: '';
		width: 100%;
		height: 3px;
		background-color: ${({ theme }) => theme.colors.accentOrange};

		border-radius: 3px;
	}

	@media screen and (min-width: 768px) {
		padding-top: 30px;
		padding-bottom: 30px;

		&.active:after {
			top: 75px;
		}
	}

	svg {
		width: 20px;
		height: 20px;
		fill: none;
		stroke: #101828;
		position: absolute;
		bottom: 50%;
		left: 100%;
	}

	span {
		position: absolute;
		bottom: 50%;
		left: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		border: ${({ theme }) => theme.borders.accenLighttBorder};
		background-color: ${({ theme }) => theme.colors.accentOrange};
		color: ${({ theme }) => theme.colors.milky};
		border-radius: 50%;
		text-align: center;
		font-size: 12px;
	}
`;

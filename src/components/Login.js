import React from "react";
import styled from "styled-components";
import BgImage from "../Images/login-background.jpg";
import Logo1 from "../Images/cta-logo-one.png";
import Logo2 from "../Images/cta-logo-two.png";

const Login = () => {
	return (
		<Container>
			<Cover />
			<LogoContaqiner>
				<CTAlogoOne src={Logo1} />
				<Button>Get all there</Button>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Neque repellat laudantium veritatis nihil excepturi sed
					velit ut enim.
				</Text>
				<CTAlogoTwo src={Logo2} />
			</LogoContaqiner>
		</Container>
	);
};

export default Login;

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
`;

// const Content = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	height: 100%;
// 	width: 100%;
// 	padding: 40px 80px;
// 	background-color: aquamarine;
// `;

const Cover = styled.div`
	background-image: url(${BgImage});

	height: 100vh;
	width: 100vw;
	background-repeat: no-repeat;
	background-position: top;
	z-index: -10;
`;
const LogoContaqiner = styled.div`
	display: flex;
	align-items: center;
	width: 650px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	
`;

const CTAlogoOne = styled.img`
	width: 90%;
	margin-bottom: 10px;
`;

const Button = styled.button`
	color: white;
	text-transform: uppercase;
	width: 100%;
	padding: 20px 0px;
	letter-spacing: 2px;
	background-color: #1934d2;
	font-weight: bolder;
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	font-size: medium;
	word-spacing: 5px;
	margin-bottom: 5px;
	border: none;
	border-radius: 10px;
`;

const Text = styled.div`
	font-size: 12px;
	font-weight: bold;
	color: white;
	letter-spacing: 2px;
	margin: 2px 5px 20px 5px;
	width: 100%;
	opacity: 0.8;
`;

const CTAlogoTwo = styled.img`
	width: 90%;
	margin-bottom: 10px;
`;

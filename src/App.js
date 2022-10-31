import styled from "styled-components";
import "./App.css";
import Login from "./components/Login";

function App() {
	return (
		<Container>
			<Login />
		</Container>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Buttons from "../components/buttons/Buttons";
import Card from "../components/common/Card";
import { SearchYoutubeVideo } from "../Utilis/ApiCalls";

const Container = styled.div`
	margin-left: 30px;
	overflow-x: hidden;
`;
const Hold = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	padding: 30px;
`;
const Holder = styled.div`
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`;

const HomeScreen: React.FC = () => {
	const [SearchData, setSearchData] = useState([]);
	const FetchSearchData = async () => {
		await SearchYoutubeVideo().then((res) => {
			console.log(res.contents);
			setSearchData(res?.contents);
		});
	};

	useEffect(() => {
		FetchSearchData();
	}, []);

	return (
		<Container>
			<Hold>
				<Buttons text='All' />
				<Buttons text='Music' />
				<Buttons text='Gaming' />
				
				<Buttons text='Trailers' />
				<Buttons text='History' />
				<Buttons text='Jenifa' />
				<Buttons text='Podcasts' />
				<Buttons text=' Comedy' />
			</Hold>

			<Holder>
				{SearchData?.map((props) => (
					<Card props={props} bdd='' />
				))}
			</Holder>

			<h1>homepage</h1>
		</Container>
	);
};

export default HomeScreen;
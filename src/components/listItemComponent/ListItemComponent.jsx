import React from 'react';
import { useSelector } from 'react-redux';
import { selectRedditReturn } from '../reddit/RedditSlice';
import styled from 'styled-components';
import AwardsItemComponent from './AwardsItemComponent';

const TileDivContainer = styled.div`
	height: 22vh;
    background-color: white;
    margin: 10px;
	display: flex;
	max-width: 80vw;

`;

const ThumbnailDiv = styled.div`
	display: flex;
	color: black;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 160px;
`;

const ContentDiv = styled.div`
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 20px;
	max-width: 90%;
`;

const TitleDivContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;


	max-width: 90%;
	min-width: 90%
`;

const AuthorDivContainer = styled.div`
	color: black;
	display: flex;
	flex-direction: row;
	justify-content: row-start;
	margin-top: 0px;
`;

const Permalink = styled.div`

`;

const Footer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: left;
	justify-content: space-around;
	max-width: 100%;
	min-width: 70%;
`;

const Ups = styled.div`
	color: green;
	display: flex;
	align-items: flex-end;
`;

const AllAwardingsDiv = styled.div`

`;

const ListItemComponent = () => {
	const redditApiReturn = useSelector(selectRedditReturn);

	if(!redditApiReturn.data) {
		return <div>reddit is loading...</div>;
	} else 
		return (
			<div>

				{
					redditApiReturn.data.children.map((each, index) => {
						let iconUrlArray = [];
						if(each.data.all_awardings[0]){
							let allAwardings = each.data.all_awardings;

							allAwardings.map(awarding => {
								let iconUrl = awarding.resized_icons[2].url;
								iconUrlArray.push(iconUrl);
							});
						}

						const getDate = () => {
							const date = new Date(each.data.created_utc);
							return date;
						};

						const { 
							created,
							author,
							ups,
							title,
							thumbnail,
							permalink,

						} = each.data;

						let date = getDate(created).toUTCString();

						return (
							<div key={index}>
								<TileDivContainer>
									<ThumbnailDiv>
										<img src={thumbnail || 'gt86nurburgring.jpg'} alt={title} style={{maxHeight: '80%'}}/>
									</ThumbnailDiv>
									<ContentDiv>
										<TitleDivContainer>
											<div>{title}</div>
											<a href={permalink}>permalink</a>
										</TitleDivContainer>
										<AuthorDivContainer>
											created by: {author} on: {date || 'loading...'}
										</AuthorDivContainer>
										<Footer>
											<Ups>
												<div>ups: {ups}</div>
											</Ups>
											<AllAwardingsDiv>
												<div>awards</div>
												<AwardsItemComponent iconUrlArray={iconUrlArray}/>
											</AllAwardingsDiv>
										</Footer>
									</ContentDiv>
								</TileDivContainer>
							</div>
						);
					})
				}
			</div>
		);
};

export default ListItemComponent;

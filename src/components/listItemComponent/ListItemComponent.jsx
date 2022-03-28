import React from 'react';
import { useSelector } from 'react-redux';
import { selectRedditReturn } from '../reddit/RedditSlice';
import styled from 'styled-components';
import AwardsItemComponent from './AwardsItemComponent';
import defaultThumbnail from './gt86nurburgring.jpg';

const TileDivContainer = styled.div`
	height: 100px;
    background-color: white;
    margin: 10px 0px;
	display: flex;
	max-width: 1000px;
	min-width: 1000px;
	padding: 10px;
`;

const ThumbnailDiv = styled.div`
	display: flex;
	color: black;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 160px;
	min-width: 160px;
`;

const ContentDiv = styled.div`
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 840px;
	min-width: 840px
`;

const TitleDivContainer = styled.div`
	display: flex;

	justify-content: flex-start;
	max-width: 90%;
	min-width: 90%;
	font-size: 10px;
`;

const AuthorDivContainer = styled.div`
	color: grey;
	display: flex;
	flex-direction: row;
	justify-content: row-start;
	align-items: top;
	margin-top: 0px;
	font-size: 12px;
	max-width: 90%;
`;

const Footer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: left;
	justify-content: space-around;
	max-width: 90%;
	min-width: 90%;
`;

const Ups = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;

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
						const allAwardings = each.data?.all_awardings ?? [];
						const coinPrice = allAwardings?.coin_price;
						const iconUrlArray = allAwardings.map(awarding => awarding.resized_icons?.[0]?.url);
						const filteredIconUrlArray = iconUrlArray.filter(item => item.startsWith('https://www.redditstatic.com'));

						const getDate = () => {
							const date = new Date(each.data?.created_utc * 1000);
							return date;
						};

						const getTitle = () => {
							const title = each.data?.title;
							const titleArray = title.split('');
							let shortenedArray = [];
							let shortenedTitle = '';

							if(titleArray.length > 60){
								for(let i = 0; i < 60; i ++) {
									shortenedArray.push(titleArray[i]);
								}
								shortenedTitle = shortenedArray.toString().split(',');
								return <div>{shortenedTitle}<span>...</span></div>;
							} else return title;
						};

						const { 
							created,
							author,
							ups,
							thumbnail,
							permalink,
						} = each.data;

						const date = getDate(created).toUTCString();
						const title = getTitle();

						return (
							<div key={index}>
								<TileDivContainer>
									<ThumbnailDiv>
										<img src={thumbnail === 'self' ? defaultThumbnail : thumbnail} alt='alt text here' style={{maxHeight: '80%'}}/>
									</ThumbnailDiv>
									<ContentDiv>
										<TitleDivContainer>
											<div style={{fontSize: '18px', fontWeight: 'bold'}}>{title}</div>
											<a style={{fontSize: '12px'}} href={permalink} noopener="true" noreferrer="true" target='_blank'>Visit Thread</a>
										</TitleDivContainer>
										<AuthorDivContainer>
											{`created by: ${author} on: ${date}`}
										</AuthorDivContainer>
										<Footer>
											<Ups>
												<div style={{fonstSize: '10px', fontWeight: 'bold'}}>up votes </div>
												<div style={{color: 'green'}}>{ups}</div>
											</Ups>
											<div>
												<div style={{fontWeight: 'bold', fontSize: '12px'}}>Awards</div>
												<AwardsItemComponent filteredIconUrlArray={filteredIconUrlArray} coinPrice={coinPrice}/>
											</div>
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
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
`;

const TitleDivContainer = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 10px;
`;

const AuthorDivContainer = styled.div`
	color: grey;
	display: flex;
	justify-content: row-start;
	font-size: 12px;
`;

const Footer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`;

const Ups = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledTitle = styled.div`
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
	font-size: 18px;
	font-weight: bold;
	width: 600px;
	text-align: left;
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
						const iconUrlArray = allAwardings.map(awarding => ({url: awarding.resized_icons?.[0]?.url, coinPrice: awarding.coin_price}));
						const iconsAndCoinPrice = iconUrlArray.filter(item => item?.url?.startsWith('https://www.redditstatic.com'));

						const getDate = () => {
							const date = new Date(each.data?.created_utc * 1000);
							return date;
						};

						const title = each.data?.title;

						const { 
							created,
							author,
							ups,
							thumbnail,
							permalink,
						} = each.data;

						const date = getDate(created).toUTCString();

						return (
							<div key={index}>
								<TileDivContainer>
									<ThumbnailDiv>
										<img src={thumbnail === 'self' ? defaultThumbnail : thumbnail} alt='alt text here' style={{maxHeight: '80%'}}/>
									</ThumbnailDiv>
									<ContentDiv>
										<div>
											<TitleDivContainer>
												<StyledTitle title={title}>{title}</StyledTitle>
												<a style={{fontSize: '12px', marginLeft: '24px'}} href={`https://www.reddit.com/${permalink}`} noopener="true" noreferrer="true" target='_blank'>Visit Thread</a>
											</TitleDivContainer>
											<AuthorDivContainer>
												{`created by: ${author} on: ${date}`}
											</AuthorDivContainer>
										</div>
										<Footer>
											<Ups>
												<div style={{fontSize: '12px', fontWeight: 'bold'}}>Upvotes</div>
												<div style={{color: 'green', fontSize: '12px'}}>{ups}</div>
											</Ups>
											<div>
												<div style={{fontWeight: 'bold', fontSize: '12px'}}>Awards</div>
												<AwardsItemComponent iconsAndCoinPrice={iconsAndCoinPrice} />
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
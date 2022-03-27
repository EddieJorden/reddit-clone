import styled from 'styled-components';

const AwardTile = styled.div`
    color: black;
`;

const TileTitle = styled.div`
    color: orange;
`;

const IconDiv = styled.div`

`;

const CoinPrice = styled.div`

`;

const IconContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

const AwardsItemComponent = ({ iconUrlArray }) => {

	if(iconUrlArray.length >= 1) {
		return (
			<IconContainer>
				{iconUrlArray.map((url, i )=> {
					return (
						<IconDiv key={i}>
							<img src={url}/>
						</IconDiv>
					);
				})}
			</IconContainer>
		);
	} else return <p>loading</p>;
};

export default AwardsItemComponent;

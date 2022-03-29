import styled from 'styled-components';

const AwardTile = styled.div`
    color: black;
`;

const TileTitle = styled.div`
    color: orange;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: flex-end;
    max-width: 100%
`;

const AwardsItemComponent = ({ iconsAndCoinPrice }) => {
	if(iconsAndCoinPrice?.length) {
		return (
			<IconContainer>
				{iconsAndCoinPrice.map((item, i )=> {
					return (
						<div key={i} style={{margin: '0 3px'}}>
							<div>
								<img src={item.url}/>
							</div>
							<div style={{fontSize: '12px'}}>
								{item.coinPrice}
							</div>
						</div>
					);
				})}
			</IconContainer>
		);
	}
	return null;
};

export default AwardsItemComponent;
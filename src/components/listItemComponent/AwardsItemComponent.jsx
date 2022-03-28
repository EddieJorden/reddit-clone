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

const AwardsItemComponent = ({ filteredIconUrlArray, coinPrice }) => {
	if(filteredIconUrlArray?.length) {
		return (
			<IconContainer>
				{filteredIconUrlArray.map((url, i )=> {
					return (
						<div key={i}>
							<div>
								<img src={url}/>
							</div>
							<div style={{fontSize: '12px'}}>
								price {coinPrice}
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
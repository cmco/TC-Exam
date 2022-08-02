import styled from '@emotion/styled';
import { Badge as TablekitBadge } from '@tablecheck/tablekit-badge';
import { COLORS } from '@tablecheck/tablekit-theme';

interface CardImageProps {
  img: string;
}

export const Card = styled.div`
  width: 48%;
  max-width: 800px;
  min-height: 320px;
  height: auto;
  border-radius: 8px;
  margin-top: 32px;
  cursor: pointer;
  background: ${COLORS.PURPLE.L8};

  &: hover {
    background: linear-gradient(
      319deg,
      ${COLORS.PURPLE.L8},
      ${COLORS.PURPLE.L7}
    );
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 1080px) {
    min-height: 0;
    height: auto;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  min-height: 160px;
  border-radius: 8px 8px 0 0;
  background: ${(props: CardImageProps) =>
    `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.75) 100%), url(${
      props.img
        ? props.img
        : `${CONFIG.baseName}/static/img/defaultShopImage.jpg`
    })`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoContainer = styled.div`
  padding: 8px;
`;

export const ShopNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 160px;
  padding: 0 16px;
  color: ${COLORS.WHITE_TRANSLUCENT.L8};
`;

export const ShopName = styled.div`
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 8px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 0;
`;

export const TagsLabel = styled.div`
  margin-right: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.WHITE_TRANSLUCENT.L8};
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Badge = styled(TablekitBadge)`
  margin: 0 4px 4px 0;
  background: ${COLORS.WHITE_TRANSLUCENT.L8};
  color: ${COLORS.PURPLE.L9};
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
  padding: 0 16px;
`;

export const PriceRangeElement = styled.div`
  width: 50%;
`;

export const PriceRangeLabel = styled.div`
  font-weight: 400;
  margin-bottom: 4px;
  font-size: 1rem;
  color: ${COLORS.WHITE_TRANSLUCENT.L8};
`;

export const PriceRange = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  color: ${COLORS.WHITE_TRANSLUCENT.L8};
`;

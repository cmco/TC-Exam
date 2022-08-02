import styled from '@emotion/styled';
import { Badge as TablekitBadge } from '@tablecheck/tablekit-badge';
import { ModalDialog as TablekitModalDialog } from '@tablecheck/tablekit-modal-dialog';
import { COLORS } from '@tablecheck/tablekit-theme';

interface CardImageProps {
  img: string;
}

export const ModalDialog = styled(TablekitModalDialog)`
  background: white;
  border-radius: 8px;
  width: 50%;
  margin-top: 10%;

  > div {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 510px;
    margin-top: 50%;
    overflow: scroll;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  min-height: 180px;
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
  padding: 16px; ;
`;

export const ShopName = styled.div`
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 8px;
`;

export const ShopNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 160px;
  color: ${COLORS.WHITE_TRANSLUCENT.L8};
`;

export const TagsAndCuisinesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagsContainer = styled.div`
  width: 50%;
`;

export const CuisinesContainer = styled.div`
  width: 50%;
`;

export const TagsLabel = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Badge = styled(TablekitBadge)`
  margin: 0 4px 4px 0;
  background: ${COLORS.PURPLE.L8};
  color: ${COLORS.WHITE_TRANSLUCENT.L8};
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
  color: #000000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PriceRangeElement = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const PriceRangeLabel = styled.div`
  font-weight: 400;
  margin-bottom: 4px;
  font-size: 1rem;
`;

export const PriceRange = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.PURPLE.L9};
  margin-top: 48px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const ContentBodyPairs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 32px;
  color: #000000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentBodyLocale = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  width: 10%;
`;

export const ContentBodyText = styled.div`
  width: 90%;
`;

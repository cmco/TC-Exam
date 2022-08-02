import styled from '@emotion/styled';
import { Input as TablekitInput } from '@tablecheck/tablekit-input';
import { ItemGroup, Item } from '@tablecheck/tablekit-item';
import { Table as TablekitTable } from '@tablecheck/tablekit-table';

import { PageWrapper } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';

export const RestaurantSearchWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const Input = styled(TablekitInput)`
  width: 50%;
  margin: 16px auto -16px;
  flex: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LocationsWrapper = styled(ItemGroup)`
  width: 20%;
  margin: 0 auto;
  flex: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LocationItem = styled(Item)`
  margin: 0;
`;

export const TableWrapper = styled.div`
  width: 50%;
  background: red;
  margin: 0 auto;
`;

export const Table = styled(TablekitTable)`
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

import { BadgeType } from '@tablecheck/tablekit-badge';
import * as React from 'react';

import { renderPriceRange } from 'utils/helpers';

import { RestaurantModal } from '../RestaurantModal/index';

import {
  Card,
  Badge,
  CardImage,
  TagsContainer,
  TagsLabel,
  Tags,
  PriceRangeContainer,
  ShopNameContainer,
  ShopName,
  PriceRangeLabel,
  PriceRangeElement,
  InfoContainer,
  PriceRange
} from './style';

interface Shop {
  location_kana_name: string;
  budget_lunch_max: string;
  service_modes: string[];
  search_image: string;
  locale: string;
  location_name_translations: {
    translation: string;
    locale: string;
  }[];
  tags: string[];
  cuisines: string[];
  budget_dinner_min: string;
  booking_page_mode: string;
  is_smartpay: boolean;
  name_translations: {
    translation: string;
    locale: string;
  }[];
  name: string[];
  content_body_translations: {
    translation: string;
    locale: string;
  }[];
  geocode: {
    lon: number;
    lat: number;
  };
  currency: string;
  tagline_translations: {
    translation: string;
    locale: string;
  }[];
  content_title_translations: {
    translation: string;
    locale: string;
  }[];
  slug: string;
  budget_lunch_min: string;
  budget_dinner_max: string;
  distance: number;
  _id: string;
  availability: [];
}

interface IProps {
  shop: Shop;
}

export function RestaurantCard({ shop }: IProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <Card onClick={() => setIsModalOpen(true)}>
        <CardImage img={shop.search_image}>
          <ShopNameContainer>
            <ShopName>{shop.name[1]}</ShopName>
            {shop.name[0] !== shop.name[1] && (
              <ShopName>{shop.name[0]}</ShopName>
            )}
          </ShopNameContainer>
        </CardImage>
        <InfoContainer>
          {shop.tags.length !== 0 && (
            <TagsContainer>
              <TagsLabel>Tags</TagsLabel>
              <Tags>
                {shop.tags.map((tag: string) => (
                  <Badge isFlexible type={BadgeType.Solid} key={tag}>
                    <p>{tag}</p>
                  </Badge>
                ))}
              </Tags>
            </TagsContainer>
          )}

          {shop.cuisines.length !== 0 && (
            <TagsContainer>
              <TagsLabel>Cuisines</TagsLabel>
              <Tags>
                {shop.cuisines.map((cuisine: string) => (
                  <Badge isFlexible type={BadgeType.Solid} key={cuisine}>
                    <p>{cuisine}</p>
                  </Badge>
                ))}
              </Tags>
            </TagsContainer>
          )}

          <PriceRangeContainer>
            <PriceRangeElement>
              <PriceRangeLabel>Lunch Price Range</PriceRangeLabel>
              <PriceRange>
                {renderPriceRange(shop.budget_lunch_min, shop.budget_lunch_max)}
              </PriceRange>
            </PriceRangeElement>
            <PriceRangeElement>
              <PriceRangeLabel>Dinner Price Range</PriceRangeLabel>
              <PriceRange>
                {renderPriceRange(
                  shop.budget_dinner_min,
                  shop.budget_dinner_max
                )}
              </PriceRange>
            </PriceRangeElement>
          </PriceRangeContainer>
        </InfoContainer>
      </Card>

      <RestaurantModal
        shop={shop}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

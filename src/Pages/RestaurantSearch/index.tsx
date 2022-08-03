import { InputShape, InputSize } from '@tablecheck/tablekit-input';
import { Size } from '@tablecheck/tablekit-theme';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import { RestaurantCard } from 'Components/RestaurantCard';

import {
  Input,
  LocationsWrapper,
  LocationItem,
  RestaurantSearchWrapper,
  CardContainer,
  InputWrapper
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

interface LocationData {
  text: string;
  type: string;
  payload: {
    location_type: string;
    term: string;
    area: string;
    geo: {
      lat: number;
      lon: number;
    };
  };
}

export function RestaurantSearch(): JSX.Element {
  const { id } = useParams<string>();
  const [searchQuery, setSearchQuery] = React.useState<string>(id || '');
  const [locationsData, setLocationsData] = React.useState<
    LocationData[] | undefined
  >(undefined);
  const [shops, setShops] = React.useState<Shop[]>([]);

  const fetchShops = (coordinates: { lat: number; lon: number }) => {
    fetch(
      `https://staging-snap.tablecheck.com/v2/shop_search?cuisines[]=kaiseki&geo_latitude=${coordinates.lat}&geo_longitude=${coordinates.lon}&shop_universe_id=57e0b91744aea12988000001&locale=en&per_page=50`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setShops(result.shops);
        },
        (error) => {
          alert(`Error!${error}`);
        }
      );
  };

  const runAutocomplete = (queryText: string) => {
    if (queryText !== '') {
      fetch(
        `https://staging-snap.tablecheck.com/v2/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${queryText}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setLocationsData(result.locations);
          },
          (error) => {
            alert(`Error!${error}`);
          }
        );
    }
  };

  React.useEffect(() => {
    if (id) {
      fetch(
        `https://staging-snap.tablecheck.com/v2/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${id}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.locations) {
              fetchShops(result.locations[0].payload.geo);
              setSearchQuery(result.locations[0].text);
            } else {
              setSearchQuery(id);
            }
          },
          (error) => {
            alert(`Error!${error}`);
          }
        );
    }
  }, [id]);

  const handleSearchOnChange = (query: string) => {
    setSearchQuery(query);
    runAutocomplete(query);
  };

  const handleLocationClick = (location: LocationData) => {
    fetchShops(location.payload.geo);
    setSearchQuery(location.text);
    setLocationsData([]);
  };

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <RestaurantSearchWrapper>
      <InputWrapper>
        <Input
          label="Search for a location"
          type="search"
          shape={InputShape.Circular}
          size={InputSize.Regular2}
          width={Size.XLarge}
          value={searchQuery}
          onChange={(event) => handleSearchOnChange(event.target.value)}
        />

        <LocationsWrapper>
          {locationsData !== undefined &&
            locationsData !== undefined &&
            locationsData.map((location: LocationData) => (
              <LocationItem
                key={`${location.text} ${location.payload.area}`}
                onClick={() => handleLocationClick(location)}
              >
                {location.text} ({capitalize(location.payload.location_type)})
              </LocationItem>
            ))}
        </LocationsWrapper>
      </InputWrapper>

      <CardContainer>
        {shops.length !== 0 &&
          shops.map((shop: Shop) => (
            <RestaurantCard shop={shop} key={shop._id} />
          ))}
      </CardContainer>
    </RestaurantSearchWrapper>
  );
}

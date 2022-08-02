## Features

- Restaurant Search accessed through the root URL
  - Autocomplete done through search query, returning first search result
  - Autocomplete shows type of location (i.e. city, prefecture, station, town)
- Card listing of all shops in a given area
  - Display some details about the shop along with the given image of the shop
    - If no image exists, a default one is rendered
  - Detailed modal view of shops upon clicking a Card
- Fully responsive app (mobile, tablet, desktop)

## Challenges

### Search Query in URL Path
An intial plan was to automatically push to the route the search query upon submit. This was done as to match the functionality of typing the query into the URL which would result in showing the first matching location for that query.

The challenge in making this function as intended is that the autocomplete function of typing in the query in the URL will always select the first possible location. For locations that are similarly named (such as Tokyo, which can either be a city or a prefecture), the first result will always get selected.

This is because this approach would basically call the query whenever the URL pathname changes, and as such, will always select the first location from the resulting query.

A possible solution to this problem would be to pass in the location name along with the index of the search result to the URL as a route param. This would allow the query to know which of the locations to show shops for. This solution was put on hold in lieu of development for other parts of the app.

### Duplicate Locations
Some results from the autocomplete endpoint are redundant. For example, Yokohama appears twice, both as cities.

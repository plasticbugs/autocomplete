This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Autocomplete Challenge

## Running this application:
1. Install application dependencies by running: `yarn`
2. Run the development server with: `yarn start`
3. Visit `http://localhost:3000/` to view the application

You can create a production build of this application by running: `yarn build`

## Solution:
I chose to use Redux to store the application data. The cities and books data initialize on app load. The application adds matching search results to the store as `queries`.

A SearchPage container provides the data store and dispatched query actions to the SearchPage view which passes the appropriate data and actions to the individual Search components as props.

Inside the Search component, I tried to keep things as DRY as possible while allowing for searching and displaying results from both arrays of strings (cities) and arrays of objects (books).

## Interface decisions:
- The application presents a prompt to enter 3 or more characters if the user types fewer than three characters.
- If the input loses focus, both the error state prompt and the search results disappear. If the the input regains focus, the results/input prompt reappear.
- If no item matches the search string, the search result shows: `No items found`.
- The stored queries in the app state are removed when:
  - no results are found
  - the input field is empty
  - fewer than three characters have been input 

## Additional technology used:

I added `lodash` to safely get some nested data from the app store and to clone objects from the search results.

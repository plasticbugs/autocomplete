This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Autocomplete Challenge

## Running this application:
1. Clone this repository
2. Navigate to the project directory
3. Install application dependencies by running: `yarn`
4. Run the development server with: `yarn start`
5. Visit `http://localhost:3000/` to view the application

You can create a production build of this application by running: `yarn build`

To observe changes to the application store while this application is running, install the Redux DevTools extension by following the instructions here:
https://github.com/zalmoxisus/redux-devtools-extension

## Problem description:
Build a React application that captures key presses from a text input and uses the current value to match items from a data store.
Matching items should be output underneath the input field.
The final solution should have two search inputs that search different data sets. One is a set of strings, the other, a set of objects.
If there are no results, the application should let the user know.
The application must make use of one or more data stores to store both data sets and the autocomplete results.

## Solution:
I chose to use Redux to store the application data. The cities and books data initialize when the search page loads. The application adds matching search results to the store as `queries`.

A SearchPage container provides the data store and dispatched query actions to the SearchPage view which passes the appropriate data and actions to the individual Search components as props.

Inside the Search component, I tried to keep things DRY while allowing for searching and displaying results from both arrays of strings (cities) and arrays of objects (books).

## Interface decisions:
- The application presents a prompt to enter 3 or more characters if the user types fewer than three characters.
- If the input loses focus, both the error state prompt and the search results are removed from the view. If the the input regains focus, the autocomplete results/input prompt reappear.
- If no item matches the search string, the search result shows: `No items found`.
- The stored queries in the app state are removed when:
  - no results are found from the current search string
  - the input field is empty
  - fewer than three characters have been input 

## Technical choices
I decided to nest the query results for both books and cities in a queries object, while keeping the initial data stores separate/flat.

If I were to spend additional time on this project, I would implement a click handler on the results to autofill the input field, which would reduce the query results to the selected item and would then remove the results from the view.

## Additional technology used:
I added `lodash` to safely get some nested data from the app store and to clone objects from the search results.

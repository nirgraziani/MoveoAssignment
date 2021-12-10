# MoveoAssignment
Moveo Assignment - Random users app
Random users app using ReactJS [Random Users API](https://randomuser.me/api/)

SEE IT IN ACTION! 

https://moveo-assignment-71b89.web.app


Using the following libraries:

Styling: MUI

Structuring: MUI

Routing: React-Router

Data Source Communication: Axios

Maps: Google Maps API

This project uses ReactJS mainly for the reason that it is the framework I'm most comfortable with.
I took your advice and used MUI and I found it to be easy to use.
As you can see I chose not to use a Redux state management pattern because in my opinion that would be an overkill for this type of project, instead I decided to implement a Context/Provider (first time trying this).
Routing & Data Source Communication were done with React-Router & Axios again, because these are libraries I'm familiar with.

The project contains the following components:

`TablePage` component - Main page

`Header` component - Displays the page title

`UserRow` component - Displays information of the user in a row format

`UserDetails` component - Single user page, Displays information of the user

`GoogleMaps` component - Displays user geo-location

The home page displays a table with 10 users fetched from the [Pagination API](https://randomuser.me/api/?page=3&results=10&seed=abc) using the `onPaginationChange` event that is responsible for sending the current page number back to my context provider and changing the "page" section in the API call accordingly.

on clicking the row you will be redirected to "User Details" and additionally an object with the selected user will be sent back to the Context/Provider and will give me access to the selected user data in every component in the project.

In the "User Details" page you'll find the same information about the selected (clicked) user in addition to a map (Google Maps API) with a marker pointing the coordinates from the selected user object.

Known issues:

1. User Details page lose selected user data on refresh (no way to fetch a specific user through an API call)
2. Not entirely responsive

Prerequisites:
Node.js

How to run:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

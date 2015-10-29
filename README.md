# Welcome to Shine, an Angular.JS and Ruby on Rails internal-facing customer service portal.
This Git repo is to chronicle my first attempt at integrating an Angular.JS frontend, Ruby on Rails backend and PostgreSQL data store to produce a responsive and rich UI experience for an imaginary internal-facing customer service portal. I will be using this [tutorial](https://pragprog.com/book/dcbang/rails-angular-postgres-and-bootstrap) and signups will be limited to users with an example.com domain email address.
## Quickstart
1. Visit the site hosted at heroku [here](https://secure-gorge-7073.herokuapp.com) and sign up with any example.com domain email address. E.g.: abc123@example.com.
2. Once logged in, follow the link to the customers dashboard.
3. Begin typing a regular name such as Bob; typeahead search is triggered after 3 characters. Each subsequent character will renew the search results below.
4. Click the View Details... button. This information is drawn from a postgres materialized view. Try to amend the fields to interact with dynamic error messages. Saving information here updates the relevant tables.

### Frontend 
Angular.JS    1.4

Bootstrap     3

### Backend
Ruby          2.2

Rails         4.2.4

Devise        3.5

### Data Store
PostgreSQL    9.4

### Testing
RSpec (latest)

Teaspoon, Jasmin (latest)

Capybara, Poltergeist, PhantomJS (latest)


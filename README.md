# Challenges Coding Exercise Backend

We have provided you with Pokemon data in a json file. Your mission is to create a Postgres database and expose the database to a small Graphql API. Basically, you need to:

- Design the database to store information for the Pokemon data
- Load the database with the data
- Implement the API Interface withe the following features:

  - Query pokemons with the options:
    - Pagination
    - Search by name
    - Filter by pokemon type
    - Filter by favorite
  - Query a pokemon by id
  - Query a pokemon by name
  - Query list of pokemon types
  - Mutation to mark/unmark pokemon as favorite

- **Tests** are important and if time allows it, we'd like to see _some_ test coverage.

### Technology

Our technology stack is:

- Typescript
- Apollo GraphQL
- Typeorm

But you can use any technology

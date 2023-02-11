This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### How to run

To install dependencies, run `pip3 install -r requirements.txt` and `npm install`.

To run:
`flask --app api run`
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Summary of project

This project has a React frontend, which I bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and a Flask backend. When thinking about the design of this project, I considered the following:

- Where will the actual game logic be handled?
  - I considered keeping it in the backend so that all of the “business logic” would be handled in the backend and the frontend would only handle rendering, but the logic for rock-paper-scissors is fairly trivial and constant, so it makes more sense to keep it in the front end. Requiring an API request to determine, for instance, who won a round introduces the possibility of network latency interfering with the core gameplay mechanic.
  - If for some reason one of the appeals of this product was a rock paper scissor API that people could script against for their own rock paper scissors applications then maybe we would want the logic to live in the backend
- How do saves work?
  - The simplest thing to start with is a cookie that contains player names and scores. Downsides are that you could only access your saved game from the same browser, that you could easily lose it without realizing (i.e., if you cleared all your cookies), and that you can only have one save per browser.
  - If this were a game that people installed and played locally, we could have more robust saves by creating save files on the user’s machine. This way players could have multiple saves too. Since it’s a browser-based game though, this probably isn’t the case.
  - If this game were an online service, it would make sense to have a login flow and keep player accounts/saves in a database. Then players could access their saves from any browser and not be at risk for accidentally deleting it from their browser.

### Notes on thought process and next steps

My approach was as follows:

1. Create a React app and display player scores with hardcoded player names and buttons that increment each score
2. Add saving functionality by adding a Flask server with a `/game` API endpoint that saves the game state in a cookie
3. Fill as much of the actual game mechanics as possible with the remaining time

I chose to go with this approach because I felt that the saving mechanism was the riskiest part of the design and I wanted proof-of-concept of saving via cookie first. Once that worked, filling out game functionality was a matter of building on the existing parts.

#### What's done:

- Each player can play a turn by choosing rock, paper, or scissors
- Once both players have chosen, the game will notify who has won and increment the scores
- The user can save the game

#### What's not done:

- **Allowing players to enter their names:** this would consist of some text boxes at the beginning of a new game so players could enter names. It would also change the GameState to include player names as well as scores.
- **Player vs. computer:** I'd have the computer player randomly choose rock, paper, or scissors
- **Players selecting "one at a time":** while this is technically true, we could probably use some visual elements enforcing it and not showing each player's choice on the screen

#### What else I'd do:

- More comprehensive testing— there are some unit tests in here but ideally I'd want some integration and end-to-end tests to verify that the game works as expected (e.g., clicking the save button causes an API request to the /game endpoint, the game notifies players when both have made a choice). Toward the end of my time I also prioritized hooking everything up to have a working vertical slice so there's some test coverage to backfill.
- When loading a game, there's a brief moment when you see "0" instead of the actual player scores because the component initializes the scores to 0, then fetches. It's probably better to initialize to undefined instead.
- Fit and finish— if this were a real game, I'd want it to look more appealing than plain black text on a white background. And I wouldn't want to use alert to notify who won. The point of games is to be fun.

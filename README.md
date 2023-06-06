# Virtual Gameboy App

This app was built with React.js, Redux and SCSS.
The project initially started as a way to test my Frontend / UX design skills but eventually grew into an app I wanted to develop further and add more user interactions.

The app has keyboard functionality with the keys stated in the Legend component. The user can turn the console on with `Q` and then interact with the screen with `J` and `K`; navigation is handled with `W, A, S, and D`. The only game the user can play currently is Snake. The player must collect food that appears on the screen, making the snake longer and increasing their score. The game ends when the snake runs into a wall or runs into itself.

You can try out the app yourself! https://virtual-gameboy.netlify.app/

### Futrue plans: 
- Add a global leaderboard that any user can see and add their own scores to.
- Add more simple games: space invader or pong.
- Add more user interactions: more colors, more buttons, different screens.

### Known bugs:
- The user can sometimes start the game before turning on the console.
- The script for the button animations does not load on deployed site.
- Sometimes the food will spawn under the snake as its moving.
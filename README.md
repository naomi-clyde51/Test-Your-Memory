# Pre-work - _Memory Game_

"Test Your Memory!" is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Naomi Clyde

Time spent: 3 hours spent in total

Link to project: https://glitch.com/~test-your-memory

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [ ] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Buttons have a hold time other than the ones in the tutorial

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Winning a game](https://cdn.glitch.com/e405b16c-7af6-4ed7-af89-7ec29f8bd2e6%2Fnaomiclyde_pre-workassignment_win.gif?v=1616634375220)
![Losing a game](https://cdn.glitch.com/e405b16c-7af6-4ed7-af89-7ec29f8bd2e6%2Fnaomiclyde_pre-workassignment_lose.gif?v=1616634375701)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

Web development courses @ LaGuardia Community College, w3schools.org

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

A challenge for me occurred because of a error in the way I wrote my code. This issue came up during the JavaScript aspect of this submission. The console gave me an error code that said the classLists for "lit" on Lines 105 and 114 were null. This confused me because the "lit" classes were there for the buttons in the CSS file, so the function should have been able to refer to them. I placed semi-colons after function lines 105 and 114, with still no luck. After scanning the code for any other mishaps, I recalled the way I numbered the buttons. Instead of just putting, "1, 2, 3, 4", I put "01, 02, 03, 04" when numbering them. After I removed the buttons, the script was able to communicate with the "lit" classes in the CSS file. I don't understand why the difference in how I labeled the buttons fixed the issue, but I was reminded how systematic and straight-forward coding had to be to function properly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

Question 1: Will there be more opportunities to create complex JavaScript functions such as the ones we uses to implement audio to this project?
Question 2: On average, how long does it take a web developer to familiarize themselves with the features HTML5, CSS3, and JavaScript ES6+ libraries have to offer? The available options seem overwhelming at the moment.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had more time to work on this project, I would focus on increasing the difficulty of the game. A way to do that would be to add rounds to the game that increase in difficulty per round. After round 1, an extra button of a different color would be incremented and the player would have to repeat a more complex pattern. In addition, the clue pause time would also decrease with each round.

## License

    Copyright Naomi Clyde

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

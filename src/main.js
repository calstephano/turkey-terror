/**
 * Group: Randy Le, Andrew Cho, Calvin Stephano, and Adam Fuhrman
 * Game: Turkey Terror
 * Completed: 5/2/2022
 * 
 * 
 * Creative Process:
 * - Programming:   * Randy: Since I was working with sprites that had drastically differing sizes and the size of 
 *                  the runner was important, I learned how to make edits to json files (Aseprite doesn't play nice
 *                  with different frame sizes) as well as making changes to the body. This was necessary so the
 *                  turkey would properly fly over the player, but also to prevent the player from falling through
 *                  the ground when attempting to slide. I also added a custom typeface to the game!
 *                  * Calvin: I assisted with minor additions, like implementation of the audio, artwork,
 *                  and user interface. 
 *                      * Update 2024 - I went back to refine some code and comments for presentability. I cleaned
 *                      the Github history as well, which I actually never done before. It was a bit tricky to
 *                      navigate at first, but I feel a lot more comfortable with Github now.
 * - Art:   * Calvin: We felt that pixel art best fit the gameplay of an arcade-styled project that is of a small 
 *          scope. The artists of the team divided the work amongst ourselves. Andrew did the turkey and its 
 *          animations, as well as the title screen's artwork. Adam did the player and its animations. I made the
 *          environment art and music. 
 *          This project provided valuable insights on teammwork when collaborating with other artists. An overall
 *          challenge we encountered was ensuring consistency both in art style and scaling across different artists.
 *          We made the dimensions of one “pixel” 3x3 rather than a true 1x1, so that the artwork pops out and feels
 *          proportional to an HD screen. Some of the information either got miscommunicated or misunderstood and
 *          we had to backtrack on work at times. However, moments like this served as an opportunity for members to
 *          learn technical and/or communication skills. Overall, we are quite pleased with the result, though there
 *          are aspects that have room for refinement.
 */
let config = {
    type: Phaser.CANVAS,
    width: 1366,
    height: 768,
    autoCenter: true,
    scene: [ Menu, Play ],
    fps: {
        target: 60,
        forceSetTimeOut: true
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 2500 },
            debug: false
        }
    }
}

let game = new Phaser.Game(config);
// Reserve key names
let keyUP, keyDOWN, keyLEFT, keyRIGHT;
let groundSize = 99;
let highScore = 0;

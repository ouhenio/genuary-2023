const HSL_COLORS = ["#FF0000", "#00FF00", "#0000FF"];
const WIDTH = 1024;
const HEIGHT = 1024;
const R = WIDTH / 4;

// Motion blur stuff
let t; //init time
const T = 1; //loop period
const NUM_FRAMES = 120; //period frame number
const NUM_SUBSAMPLES = 120; // sub-sampled sketches to take between the current and next frame
const SHUTTER_ANGLE = 4; // 1 will capture all the distance to the next frame
const CHROM_ANGLE = 2; // 1 will shift the different color channels (rgb)
const CHROM_DT = (CHROM_ANGLE * T) / NUM_FRAMES / 2;
// --------------------------------------------------------------------------

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  blendMode(BLEND);
  background(0);

  blendMode(ADD); // RGB channels overlapping sum to white
  for (let i = 0; i < NUM_SUBSAMPLES; i++) {
    push();
    t =
      map(
        frameCount - 1 + (i * SHUTTER_ANGLE) / NUM_SUBSAMPLES,
        0,
        NUM_FRAMES,
        0,
        T
      ) % T; // sub-sampled time
    fill(255);
    translate(WIDTH / 2, HEIGHT / 2);
    for (let c = 0; c < 3; c++) {
      const tc = t - CHROM_DT * c; // for chromatic aberration, offset time for each color
      const currentColor = color(HSL_COLORS[c]);
      currentColor.setAlpha(255 / NUM_SUBSAMPLES); // adjust transparency for num of sub-samples
      fill(currentColor);

      push();

      // eight figure in parametric equations
      const theta = (TWO_PI * tc) / T;
      const x = R * cos(theta);
      const y = R * sin(5 * theta) * cos(5 * theta);

      translate(x, y);
      ellipse(0, 0, 100);
      pop();
    }
    pop();
  }
}

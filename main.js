const runners = {
  "Ambrus": { pace: "5:50" },
  "FLaci": { pace: "6:00" },
  "Gabi": { pace: "6:40" },
  "Sasa": { pace: "5:30" },
  "PP": { pace: "5:00" },
  "Dávid": { pace: "5:40" },
  "PLaci": { pace: "5:00" },
  "Máté": { pace: "6:00" },
  "Zsófi": { pace: "5:50" },
  "Szabi": { pace: "5:00" }
}

const sections = {
  "Rajt": { distance: 7, runner: "Ambrus" },
  "Aszófő": { distance: 4.6, runner: "Ambrus" },
  "Fövenyes": { distance: 4.5, runner: "FLaci" },
  "Balatonakali": { distance: 3.3, runner: "FLaci" },
  "Zánka Erzsébet-tábor": { distance: 2.9, runner: "Gabi" },
  "Zánka": { distance: 3.7, runner: "Gabi" },
  "Balatonszepezd": { distance: 3.2, runner: "Sasa" },
  "Révfülöp kelet": { distance: 1.9, runner: "Sasa" },
  "Révfülöp nyugat": { distance: 5.2, runner: "Sasa" },
  "Ábrahámhegy ": { distance: 3.2, runner: "PP" },
  "Badacsonyörs Varga pincészet": { distance: 5.1, runner: "PP" },
  "Badacsony": { distance: 4.3, runner: "PP" },
  "Badacsonytördemic": { distance: 2.9, runner: "Dávid" },
  "Szigliget": { distance: 5, runner: "Dávid" },
  "Balatonederics": { distance: 2.6, runner: "PLaci" },
  "Balatongyörök kelet": { distance: 2.8, runner: "PLaci" },
  "Balatongyörök nyugat": { distance: 3.4, runner: "PLaci" },
  "Vonyarcvashegy kelet": { distance: 2.6, runner: "PLaci" },
  "Gyenesdiás": { distance: 1.7, runner: "PLaci" },
  "Keszthely kelet": { distance: 3.1, runner: "PLaci" },
  "Keszthely nyugat": { distance: 4.8, runner: "PLaci" },
  "Fenékpuszta": { distance: 4.3, runner: "Sasa" },
  "Balatonberény nyugat": { distance: 2.9, runner: "Sasa" },
  "Balatonberény focipálya": { distance: 4, runner: "Sasa" },
  "Balatonmáriafürdő nyugat": { distance: 5.2, runner: "Máté" },
  "Balatonmáriafürdő kelet": { distance: 1.7, runner: "Máté" },
  "Balatonfenyves nyugat": { distance: 1.8, runner: "Máté" },
  "Balatonfenyves kelet": { distance: 4.6, runner: "Máté" },
  "Alsóbélatelep": { distance: 3.3, runner: "Máté" },
  "Fonyód": { distance: 3.2, runner: "Zsófi" },
  "Fonyódliget": { distance: 5.3, runner: "Zsófi" },
  "Balatonboglár nyugat": { distance: 0.9, runner: "Zsófi" },
  "Balatonboglár kelet": { distance: 3.2, runner: "FLaci" },
  "Balatonlelle nyugat": { distance: 2, runner: "FLaci" },
  "Balatonlelle kelet": { distance: 5.2, runner: "FLaci" },
  "Balatonszemes": { distance: 2.1, runner: "Szabi" },
  "Balatonőszöd": { distance: 2.9, runner: "Szabi" },
  "Balatonszárszó": { distance: 3.5, runner: "Szabi" },
  "Balatonföldvár nyugat": { distance: 2.1, runner: "Szabi" },
  "Balatonföldvár kelet": { distance: 2.2, runner: "Szabi" },
  "Szántód": { distance: 2.9, runner: "Szabi" },
  "Zamárdi": { distance: 5.3, runner: "Szabi" },
  "Balatonszéplak": { distance: 2.2, runner: "Szabi" },
  "Siófok nyugat": { distance: 3.3, runner: "Szabi" },
  "Siófok kampusz": { distance: 2.8, runner: "Gabi" },
  "Siófok kelet": { distance: 4.5, runner: "Gabi" },
  "Siófok-Sóstó": { distance: 2.6, runner: "Ambrus" },
  "Balatonvilágos nyugat": { distance: 2.9, runner: "Ambrus" },
  "Balatonvilágos kelet": { distance: 5, runner: "Ambrus" },
  "Balatonakarattya": { distance: 6, runner: "Dávid" },
  "Balatonkenese": { distance: 5.5, runner: "Dávid" },
  "Balatonfűzfő": { distance: 3.4, runner: "Dávid" },
  "Tobruk ": { distance: 3, runner: "Dávid" },
  "Balatonalmádi kelet": { distance: 3, runner: "Zsófi" },
  "Balatonalmádi nyugat": { distance: 5.9, runner: "Sasa" },
  "Alsóörs": { distance: 4.8, runner: "PP" },
  "Csopak": { distance: 4.2, runner: "PP" },
  "Balatonfüred kelet": { distance: 3.5, runner: "PP" },
  "Cél": { distance: 0, runner: "" }
}


function paceToSec(pace) {
  s = pace.split(":");
  return 60 * Number(s[0]) + Number(s[1]);
}

// Calculate sum of distance between section s1 and s2 by adding distances from s1 (inclusive) till s2 (exclusive).
function getDistance(s1, s2) {
  const sectionKeys = Object.keys(sections);
  const idx1 = sectionKeys.indexOf(s1);
  const idx2 = sectionKeys.indexOf(s2);

  let sum = 0;
  for (let i = idx1; i < idx2; i++) {
    sum += sections[sectionKeys[i]].distance;
  }
  return sum;
}

// Create leg
// - m: means ("run", "carFL", "carKD", "carPL", "carSS", "train")
// - s1: section start name
// - s2: section end name
// - t1: start time
// - p: pace, eg "5:10"
function createLeg(m, s1, s2, t1, p) {
  const distance = getDistance(s1, s2);
  const paceInSeconds = paceToSec(p);
  const t2 = new Date(t1);
  t2.setSeconds(t2.getSeconds() + distance * paceInSeconds);

  return {
    means: m,
    sectionStart: s1,
    sectionEnd: s2,
    timeStart: t1,
    timeEnd: t2,
    pace: p,
    distance: distance
  };
}

function createRunLeg(legs, runnerName, section1, section2, time1) {
  if (runnerName in runners) {
    let leg = createLeg(runnerName, section1, section2, time1, runners[runnerName].pace);
    legs[runnerName].push(leg);
    return leg;
  }
  else {
    console.log("No such runner: " + runnerName);
    return null;
  }
}

function createCarLegs(legs, means, section1, section2, travelers) {
  for (let t of travelers) {
    legs[t].push(createLeg(means, section1, section2, sections[section1].timeStart, "1:00"));
  }
}

// Create runner legs first runner starting at t0
function createAllRunLegs(legs, t0) {
  let t = new Date(t0);
  let sectionKeys = Object.keys(sections);

  let s0 = 0;
  while (s0 < sectionKeys.length - 1) {
    // Check sections run by the same runner
    let runnerName = sections[sectionKeys[s0]].runner;
    let s1 = s0 + 1;
    while ((s1 < sectionKeys.length - 1) && (sections[sectionKeys[s1]].runner == runnerName)) {
      s1++;
    }

    // Run leg from s0 to s1
    let leg = createRunLeg(legs, runnerName, sectionKeys[s0], sectionKeys[s1], t);
    if (leg) {
      t = leg.timeEnd;
      // side effect...
      sections[sectionKeys[s0]].timeStart = leg.timeStart;
      sections[sectionKeys[s1]].timeEnd = leg.timeEnd;
    }

    s0 = s1;
  }
}

function createAllCarLegs(legs) {
  createCarLegs(legs, "carFL", "Rajt", "Fövenyes", ["FLaci", "Gabi"]);
  createCarLegs(legs, "carFL", "Fövenyes", "Zánka Erzsébet-tábor", ["Ambrus", "Gabi"]);
  createCarLegs(legs, "carFL", "Zánka Erzsébet-tábor", "Balatonszepezd", ["FLaci", "Ambrus"]);
}

// For each key sort legs[key] by timeStart
function sortLegs(legs) {
  for (let key of Object.keys(legs)) {
    legs[key].sort((a, b) => a.timeStart - b.timeStart);
  }
}

function positionSectionObjects() {
  const content = document.querySelector('.content');
  const sectionKeys = Object.keys(sections);
  const count = sectionKeys.length;
  const contentHeight = content.offsetHeight;
  const topMargin = 40;
  const bottomMargin = 10;
  const availableHeight = contentHeight - topMargin - bottomMargin;
  const divHeight = availableHeight / count;

  for (let i = 0; i < count; i++) {
    const div = document.getElementById(sectionKeys[i]);
    div.style.left = '1em';
    div.style.top = `${topMargin + i * divHeight}px`;
    // div.style.height = `${divHeight}px`;
  }
}

function createSectionObjects() {
  const content = document.querySelector('.content');
  const sectionKeys = Object.keys(sections);

  for (let i = 0; i < sectionKeys.length; i++) {
    const div = document.createElement('div');
    div.id = sectionKeys[i];
    div.className = 'ubobject';
    div.textContent = sectionKeys[i];
    content.appendChild(div);
  }
  positionSectionObjects();
}

function createRunnerObjects() {
  const content = document.querySelector('.content');
  const runnerKeys = Object.keys(runners);

  for (let i = 0; i < runnerKeys.length; i++) {
    const div = document.createElement('div');
    div.id = runnerKeys[i];
    div.className = 'ubobject';
    div.style.top = '1em';
    div.textContent = runnerKeys[i];
    content.appendChild(div);
  }
  positionRunnerObjects();
}

function positionRunnerObjects() {
  const content = document.querySelector('.content');
  const runnerKeys = Object.keys(runners);
  const count = runnerKeys.length;
  const contentWidth = content.offsetWidth;
  const leftMargin = 300;
  const rightMargin = 10;
  const availableWidth = contentWidth - leftMargin - rightMargin;
  const divWidth = availableWidth / count;

  for (let i = 0; i < count; i++) {
    const div = document.getElementById(runnerKeys[i]);
    div.style.left = `${leftMargin + i * divWidth}px`;
  }
}

function initializeLegs() {
  let legs = {};
  for (let r of Object.keys(runners)) {
    legs[r] = [];
  }
  return legs;
}

let ubt0 = new Date("2026-04-25T21:55:00"); // start of ub (start time of first runner)
let ubt1 = new Date(ubt0); // end of ub (finish time of last runnner)
let t = new Date(ubt0);
let legs = initializeLegs();

function initialize() {
  createAllRunLegs(legs, ubt0);
  createAllCarLegs(legs);
  sortLegs(legs);
  ubt1 = new Date(sections["Cél"].timeEnd);
  setupTrackSlider();
  updateTimeDisplay();
  createSectionObjects();
  createRunnerObjects();
}

function setupTrackSlider() {
  const slider = document.getElementById('track-slider');
  const totalMinutes = (ubt1 - ubt0) / (1000 * 60);
  slider.min = 0;
  slider.max = totalMinutes;
  slider.step = 1;
  slider.value = 0;
  slider.addEventListener('input', function () {
    t = new Date(ubt0.getTime() + this.value * 60 * 1000);
    updateTimeDisplay();
  });
}

function formatTime24(date) {
  const h = String(date.getHours()).padStart(1, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

function updateTimeDisplay() {
  document.getElementById('time-input').value = formatTime24(t);
}

// console.log(t0);
// console.log(legs);

window.addEventListener('DOMContentLoaded', initialize);
window.addEventListener('resize', () => {
  positionSectionObjects();
  positionRunnerObjects();
});

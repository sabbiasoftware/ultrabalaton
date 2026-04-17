const runners = {
  "Ambrus": { pace: "5:50" },
  "FLaci": { pace: "6:00" },
  "Gabi": { pace: "7:00" },
  "Sasa": { pace: "5:30" },
  "PP": { pace: "5:00" },
  "Dávid": { pace: "5:40" },
  "PLaci": { pace: "5:30" },
  "Máté": { pace: "6:00" },
  "Zsófi": { pace: "5:50" },
  "Szabi": { pace: "5:00" }
}

const sections = {
  "HQ1": { distance: 2, runner: "" },
  "Rajt": { distance: 7, runner: "Ambrus" },
  "Aszófő": { distance: 4.6, runner: "Ambrus" },
  "Fövenyes": { distance: 4.5, runner: "FLaci" },
  "Balatonakali": { distance: 3.3, runner: "FLaci" },
  "Zánka Erzsébet-tábor": { distance: 2.9, runner: "Gabi" },
  "Zánka": { distance: 3.7, runner: "Gabi" },
  "Balatonszepezd": { distance: 3.2, runner: "Sasa" },
  "Révfülöp kelet": { distance: 1.9, runner: "Sasa" },
  "Révfülöp nyugat": { distance: 5.2, runner: "Sasa" },
  "Ábrahámhegy": { distance: 3.2, runner: "PP" },
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
  "Cél": { distance: 2, runner: "" },
  "HQ2": { distance: 0, runner: "" }
}


function paceToSec(pace) {
  s = pace.split(":");
  return 60 * Number(s[0]) + Number(s[1]);
}

// Calculate sum of distance between section s1 and s2 by adding distances from s1 (inclusive) till s2 (exclusive).
// Return negative value if s1 is a later section than s2.
function getDistance(s1, s2) {
  const sectionKeys = Object.keys(sections);
  let i1 = sectionKeys.indexOf(s1);
  let i2 = sectionKeys.indexOf(s2);
  let d = 1;
  if (i2 < i1) {
    d = -1;
    let t = i1;
    i1 = i2;
    i2 = t;
  }

  let sum = 0;
  for (let i = i1; i < i2; i++) {
    sum += sections[sectionKeys[i]].distance;
  }
  return d * sum;
}

// Leg
// - m: means ("run", "carFL", "carKD", "carPL", "carSS", "train")
// - s1: section start name
// - s2: section end name
// - t1: start time
// - p: pace, eg "5:10"

// Create leg by start time and pace
function createLegByStartAndPace(m, s1, s2, t1, p) {
  const distance = getDistance(s1, s2);
  const paceInSeconds = paceToSec(p);
  const t2 = new Date(t1);
  t2.setSeconds(t2.getSeconds() + Math.abs(distance) * paceInSeconds);

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

// Create leg by end time and pace
function createLegByEndAndPace(m, s1, s2, t2, p) {
  const distance = getDistance(s1, s2);
  const paceInSeconds = paceToSec(p);
  const t1 = new Date(t2);
  t1.setSeconds(t1.getSeconds() - Math.abs(distance) * paceInSeconds);

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

function checkSections(section1, section2) {
  if (section1 in sections === false) {
    console.log("No such section as " + section1);
    return false;
  }

  if (section2 in sections === false) {
    console.log("No such section as " + section2);
    return false;
  }

  return true;
}

function createRunLeg(runnerName, section1, section2, time1) {
  if (runnerName in runners === false) {
    console.log("No such runner: " + runnerName);
    return null;
  }

  if (!checkSections(section1, section2)) return null;

  return createLegByStartAndPace("run", section1, section2, time1, runners[runnerName].pace);
}

// Depart from section1 when run starts at section1
function createCarLegsByStart(legs, means, section1, section2, travelers) {
  if (!checkSections(section1, section2)) return null;

  if ("timeStart" in sections[section1] === false) {
    console.log("TimeStart not set at " + section1);
    return;
  }

  for (let t of travelers) {
    if (t in runners === false) {
      console.log("No such runner as " + t);
      return;
    }
    legs[t].push(createLegByStartAndPace(means, section1, section2, sections[section1].timeStart, "1:00"));
  }
}

// Arrive to section2 by the time run starts at section2
function createCarLegsByEnd(legs, means, section1, section2, travelers) {
  if (!checkSections(section1, section2)) return null;

  if ("timeStart" in sections[section2] === false) {
    console.log("TimeStart not set at " + section2);
    return;
  }

  for (let t of travelers) {
    if (t in runners === false) {
      console.log("No such runner as " + t);
      return;
    }
    legs[t].push(createLegByEndAndPace(means, section1, section2, sections[section2].timeStart, "1:00"));
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
    if (runnerName != "") {
      let leg = createRunLeg(runnerName, sectionKeys[s0], sectionKeys[s1], t);
      if (leg) {
        legs[runnerName].push(leg);
        t = leg.timeEnd;
        // side effect...
        sections[sectionKeys[s0]].timeStart = leg.timeStart;
        sections[sectionKeys[s1]].timeEnd = leg.timeEnd;
      }
    }

    s0 = s1;
  }

  sections["Cél"].timeStart = t;

  // first car departs HQ 10 minutes before start
  // let t00 = new Date(sections[sectionKeys[1]].timeStart);
  // t00.setMinutes(t00.getMinutes() - 10);
  // sections[sectionKeys[0]].timeStart = t00;
}

function createAllCarLegs(legs) {
  createCarLegsByEnd(legs, "carFL", "HQ1", "Rajt", ["FLaci", "Ambrus", "Gabi"]);
  createCarLegsByStart(legs, "carFL", "Rajt", "Fövenyes", ["FLaci", "Gabi"]);
  createCarLegsByStart(legs, "carFL", "Fövenyes", "Zánka Erzsébet-tábor", ["Ambrus", "Gabi"]);
  createCarLegsByStart(legs, "carFL", "Zánka Erzsébet-tábor", "Balatonszepezd", ["FLaci", "Ambrus"]);
  createCarLegsByStart(legs, "carFL", "Balatonszepezd", "HQ1", ["FLaci", "Ambrus", "Gabi"]);
  // TODO: FLaci from HQ to Balatonboglár ASAP
  createCarLegsByEnd(legs, "carFL", "HQ1", "Balatonboglár kelet", ["FLaci"]);
  createCarLegsByEnd(legs, "carFL", "Balatonszemes", "Cél", ["FLaci"]);

  createCarLegsByEnd(legs, "carKD", "HQ1", "Balatonszepezd", ["Dávid", "PP", "Sasa"]);
  createCarLegsByStart(legs, "carKD", "Balatonszepezd", "Ábrahámhegy", ["Dávid", "PP"]);
  createCarLegsByStart(legs, "carKD", "Ábrahámhegy", "Badacsonytördemic", ["Dávid", "Sasa"]);
  createCarLegsByStart(legs, "carKD", "Badacsonytördemic", "Balatonederics", ["PP", "Sasa"]);
  createCarLegsByStart(legs, "carKD", "Balatonederics", "Fenékpuszta", ["Dávid", "PP", "Sasa"]);
  createCarLegsByStart(legs, "carKD", "Fenékpuszta", "Balatonmáriafürdő nyugat", ["Dávid", "PP"]);
  createCarLegsByStart(legs, "carKD", "Balatonmáriafürdő nyugat", "HQ1", ["Dávid", "PP", "Sasa"]);

  createCarLegsByEnd(legs, "carPL", "HQ1", "Balatonederics", ["PLaci", "Zsófi", "Máté"]);
  createCarLegsByStart(legs, "carPL", "Balatonederics", "Fenékpuszta", ["Zsófi", "Máté"]);
  createCarLegsByStart(legs, "carPL", "Fenékpuszta", "Balatonmáriafürdő nyugat", ["PLaci", "Zsófi", "Máté"]);
  createCarLegsByStart(legs, "carPL", "Balatonmáriafürdő nyugat", "Fonyód", ["PLaci", "Zsófi"]);
  createCarLegsByStart(legs, "carPL", "Fonyód", "Balatonboglár kelet", ["PLaci", "Máté"]);
  createCarLegsByStart(legs, "carPL", "Balatonboglár kelet", "HQ2", ["PLaci", "Zsófi", "Máté"]);
  createCarLegsByEnd(legs, "carPL", "HQ2", "Cél", ["PLaci", "Máté"]);

  createCarLegsByEnd(legs, "train", "Siófok kampusz", "Balatonszemes", ["Szabi"]);

  createCarLegsByEnd(legs, "carKD", "HQ2", "Siófok kampusz", ["Dávid", "Ambrus", "Gabi"]);
  createCarLegsByStart(legs, "carKD", "Siófok kampusz", "Siófok-Sóstó", ["Dávid", "Ambrus"]);
  createCarLegsByStart(legs, "carKD", "Siófok-Sóstó", "Balatonakarattya", ["Dávid", "Gabi"]);
  createCarLegsByStart(legs, "carKD", "Balatonakarattya", "Balatonalmádi kelet", ["Ambrus", "Gabi"]);
  createCarLegsByStart(legs, "carKD", "Balatonalmádi kelet", "Cél", ["Dávid", "Ambrus", "Gabi"]);

  createCarLegsByStart(legs, "carSS", "Siófok kampusz", "HQ2", ["Szabi"]);
  createCarLegsByEnd(legs, "carSS", "HQ2", "Balatonalmádi kelet", ["Szabi", "Zsófi", "PP", "Sasa"]);
  createCarLegsByStart(legs, "carSS", "Balatonalmádi kelet", "Balatonalmádi nyugat", ["Szabi", "PP", "Sasa"]);
  createCarLegsByStart(legs, "carSS", "Balatonalmádi nyugat", "Alsóörs", ["Szabi", "Zsófi", "PP"]);
  createCarLegsByStart(legs, "carSS", "Alsóörs", "Cél", ["Szabi", "Zsófi", "Sasa"]);

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
    var sectionText = sectionKeys[i] + " [" + sections[sectionKeys[i]].runner + "]";
    if 'timeStart' in sectionKeys[i] {
      sectionText = sectionText + " [" + formatTime24(sectionKeys[i].timeStart) + "]";
    }
    div.textContent = sectionText;
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

function getSectionTop(sectionName) {
  return document.getElementById(sectionName).offsetTop;
}

const leftMargin = 300;
const rightMargin = 10;
const topMargin = 40;
const bottomMargin = 10;

function positionRunnerObjects() {
  const runnerKeys = Object.keys(runners);
  const sectionKeys = Object.keys(sections);

  const content = document.querySelector('.content');
  const availableWidth = content.offsetWidth - leftMargin - rightMargin;
  const divWidth = availableWidth / runnerKeys.length;
  const availableHeight = content.offsetHeight - topMargin - bottomMargin;
  const divHeight = availableHeight / sectionKeys.length;

  for (let i = runnerKeys.length - 1; i >= 0; i--) {
    const runnerName = runnerKeys[i];
    const runnerLegs = legs[runnerName];
    let runnerTop;
    let runnerClass = "";

    // (1) no legs, should not happen
    // (2) we are before the earliest leg (t < first leg's timeStart)
    // (3) we are after the latest leg (t > last leg's timeEnd)
    // (4) we are within a leg (leg's timeStart <= t and t <= leg's timeEnd)
    // (5) we are between two legs (leg's timeEnd < t and t < next leg's timeStart)

    if (runnerLegs.length === 0) {
      // case (1)
      runnerTop = topMargin;
    }
    else {
      if (t < runnerLegs[0].timeStart) {
        // case (2)
        runnerTop = getSectionTop(runnerLegs[0].sectionStart);
      }
      else if (t > runnerLegs[runnerLegs.length - 1].timeEnd) {
        // case (3)
        runnerTop = getSectionTop(runnerLegs[runnerLegs.length - 1].sectionEnd);
      }
      else {
        for (let i = 0; i < runnerLegs.length; i++) {
          if (t < runnerLegs[i].timeStart) {
            // case (5), also could cover case (2)
            runnerTop = getSectionTop(runnerLegs[i].sectionStart);
            break;
          }
          else if (t <= runnerLegs[i].timeEnd) {
            // case (4)
            let leg = runnerLegs[i];
            let top1 = getSectionTop(leg.sectionStart);
            let top2 = getSectionTop(leg.sectionEnd);
            let progress = (t - leg.timeStart) / (leg.timeEnd - leg.timeStart);
            runnerTop = top1 + progress * (top2 - top1);
            runnerClass = leg.means;
            break;
          }
        }
      }
    }

    const div = document.getElementById(runnerName);
    div.className = 'ubobject ' + runnerClass;
    div.style.left = `${leftMargin + i * divWidth}px`;
    div.style.top = `${runnerTop}px`;
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
let isPlaying = false;
let playInterval = null;

function initialize() {
  createAllRunLegs(legs, ubt0);
  createAllCarLegs(legs);
  sortLegs(legs);
  ubt1 = new Date(sections["Cél"].timeEnd);
  console.log(legs);
  setupTrackSlider();
  updateTimeDisplay();
  createSectionObjects();
  createRunnerObjects();
}

function setupTrackSlider() {
  const slider = document.getElementById('track-slider');

  // let ranget0 = legs["FLaci"][0].timeStart;
  let ranget0 = new Date(ubt0);
  ranget0.setMinutes(ranget0.getMinutes() - 3);
  let ranget1 = new Date(ubt1);
  ranget1.setMinutes(ranget1.getMinutes() + 3);
  t = new Date(ranget0);

  const totalMinutes = (ranget1 - ranget0) / (1000 * 60);
  slider.min = 0;
  slider.max = totalMinutes;
  slider.step = 1;
  slider.value = 0;
  slider.addEventListener('input', function () {
    pause();
    t = new Date(ranget0.getTime() + this.value * 60 * 1000);
    updateTimeDisplay();
    positionRunnerObjects();
  });

  const playPauseBtn = document.getElementById('play-pause-btn');
  playPauseBtn.addEventListener('click', togglePlayPause);
}

function togglePlayPause() {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
}

function play() {
  if (isPlaying) return;
  isPlaying = true;
  document.getElementById('play-pause-btn').textContent = '⏸';
  playInterval = setInterval(() => {
    const slider = document.getElementById('track-slider');
    if (parseFloat(slider.value) >= parseFloat(slider.max)) {
      pause();
      return;
    }
    slider.value = parseFloat(slider.value) + 1;
    const ranget0 = new Date(ubt0);
    ranget0.setMinutes(ranget0.getMinutes() - 3);
    t = new Date(ranget0.getTime() + slider.value * 60 * 1000);
    updateTimeDisplay();
    positionRunnerObjects();
  }, 50);
}

function pause() {
  if (!isPlaying) return;
  isPlaying = false;
  document.getElementById('play-pause-btn').textContent = '▶';
  clearInterval(playInterval);
  playInterval = null;
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

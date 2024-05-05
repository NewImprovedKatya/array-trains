:root {
  --heading-font: "Raleway", sans-serif;
}
/* Global Colors */
:root {
  --background-color: #c6e5f7;
  --secondary-background-color: #e3f2fb;
  --default-color: #212529;
  --heading-color: #1076be;
  --accent-color: linear-gradient(#f28e1f, #ed6a24);
  --button-accent: #692a17;
  --success: #82b740;
}

body {
  background-color: var(--background-color);
  color: var(--default-color);
}
/* Splash Page */
.h1 {
  color: #ed6a24;
  -webkit-text-stroke: 0.2rem var(--button-accent);
  font-size: 6rem;
  font-weight: 700;
  font-family: var(--heading-font);
}
.hero {
  width: 100%;
  min-height: 70vh;
  position: relative;
  padding: 7rem 0 3rem 0;
  display: flex;
  align-items: center;
}

.button {
  background: var(--accent-color);
  border: 0.2rem solid var(--button-accent);
  color: var(--button-accent);
}
.play {
  display: none;
}
code {
  height: 3rem;
}
.card {
  background-color: var(--secondary-background-color);
  border: 0.2rem solid white;
  border-radius: 1rem;
}
.card > p {
  min-height: 6rem;
}
.card > h4 {
  min-height: 3rem;
}
.input {
  border-radius: 1rem;
  border: 0.2rem solid var(--heading-color);
  border-right: 0px;
}
h2,
h3,
h4,
h5,
h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
}
#level-display {
  background-color: var(--accent-color);
  flex-grow: 1;
  height: 100%;
  border-width: 0.2rem 0px;
}
#submit {
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  cursor: pointer;
}
.next {
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  filter: grayscale(30%);
}
.prev {
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  filter: grayscale(30%);
}
.sky {
  z-index: 1;
  border: 0.2rem solid white;
  border-radius: 1rem;
  background-color: #75b8e3;

  z-index: 100;
}
#train-yard {
  background-color: #82b740;
  border-radius: 1rem;
  min-height: 40%;
  z-index: 1;
}
#train-area {
  background-color: #82b740;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  position: relative;
}
img {
  width: 100%;
  margin: 0px;
}
.train {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1%;
  position: absolute;
  top: 0;
}
.train img {
  z-index: 5;
}
.tracks {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}
#train-background {
  width: 100;
  min-height: 40%;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  z-index: -1;
}
.track {
  vertical-align: top;
  margin-top: -1%;
  z-index: 3;
}
.slot {
  width: 100;
}
#hint-button {
  display: none;
  cursor: arrow;
}
#hint-div {
  height: 3rem;
}

/* Section */
section,
.section {
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 60px 0;
  scroll-margin-top: 90px;
  overflow: clip;
}

@media (max-width: 1199px) {
  section,
  .section {
    scroll-margin-top: 66px;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 3rem;
    line-height: 2.5rem;
    -webkit-text-stroke: 0.1rem var(--button-accent);
  }

  .hero p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2.5rem;
  }

  .hero btn-play {
    font-size: 13px;
  }
}

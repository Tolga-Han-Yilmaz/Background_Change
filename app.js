// parent element
const divRow = document.querySelector(".row");
// hex button
const hexText = document.querySelector(".hex-text");
// rgb button
const rgbText = document.querySelector(".rgb-text");
// hsl button
const hslText = document.querySelector(".hsl-text");

// hex color list
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// common event
divRow.addEventListener("click", (event) => {
  // hex event
  if (event.target.classList.contains("hex-btn")) {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      let rand = Math.floor(Math.random() * list.length);
      hex += list[rand];
    }
    divRow.firstElementChild.style.backgroundColor = hex;
    hexText.innerHTML = hex;
  }
  // rgb event
  else if (event.target.classList.contains("rgb-btn")) {
    let rgb = "";
    let rgbList = [];
    for (let i = 0; i < 3; i++) {
      let rand = Math.floor(Math.random() * 256);
      rgbList.push(rand);
      rgb = `rgb(${rgbList[0]},${rgbList[1]},${rgbList[2]})`;
    }
    divRow.firstElementChild.nextElementSibling.style.backgroundColor = rgb;
    rgbText.innerHTML = rgb;
  }
  // hsl event
  else if (event.target.classList.contains("hsl-btn")) {
    let hsl = "";

    let randHue = Math.floor(Math.random() * 360);
    let randSat = Math.floor(Math.random() * 100);
    let randLight = Math.floor(Math.random() * 100);
    hsl = `hsl(${randHue},${randSat}%,${randLight}%)`;

    divRow.lastElementChild.style.backgroundColor = hsl;
    hslText.innerHTML = hsl;
  }
});

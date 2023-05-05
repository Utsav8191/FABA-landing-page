// For Canvas on story section

const canvas = document.querySelector('#story-section canvas');

canvas.width = 1252;
canvas.height = 400;

let c = canvas.getContext('2d');

// First dot
c.beginPath();
c.arc(30, 60, 8, 0, 2 * Math.PI);
c.fillStyle = "#ffff";
c.fill();

// Text beside first dot
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("Founded in- 2004", 50, 68);

c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("Tie - up with", 50, 110);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("government and", 50, 134);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("institutes In", 50, 160);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("Malaysia, Pakistan,", 50, 184);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("India and Iran", 50, 208);
   
// Second dot
c.beginPath();
c.arc(350, 350, 8, 0, 2 * Math.PI);
c.fillStyle = "#ffff";
c.fill();

// Text beside Second dot
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("FABA Academy - 2019", 375, 360);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("Bio Asia Events", 375, 385);

c.setLineDash([15, 10]);
c.beginPath();
c.moveTo(350, 350);
c.lineTo(210, 210);
c.strokeStyle = "rgba(255, 255, 255, 0.4)";
c.stroke();

c.beginPath();
c.moveTo(350, 350);
c.lineTo(750, 60);
c.strokeStyle = "rgba(255, 255, 255, 0.4)";
c.stroke();

// Third dot
c.beginPath();
c.arc(750, 60, 8, 0, 2 * Math.PI);
c.fillStyle = "#ffff";
c.fill();
// Text beside Third dot
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("FABA Bangladesh", 765, 65);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("Chapter - 2020", 765, 92);

// Fourth dot
c.beginPath();
c.arc(1000, 220, 8, 0, 2 * Math.PI);
c.fillStyle = "#ffff";
c.fill();
// Text beside Third dot
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("FABA", 1020, 225);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("Entrepreneurship", 1020, 250);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("- 2022", 1020, 275);
c.font = "20px Open Sans";
c.fillStyle = "white";
c.fillText("Nigeria Chapter", 1020, 320);

c.beginPath();
c.moveTo(1000, 220);
c.lineTo(840, 110);
c.strokeStyle = "rgba(255, 255, 255, 0.4)";
c.stroke();

// Infinite Carousel --->

function autoSlider() {
  let carouselWrapper = document.querySelector(".member-carousel-wrapper")
  let carouselList = document.querySelector(".members-list-ul")
  let ListItem = document.querySelectorAll(".member-item");
  console.log(carouselList);
  let list2;

  const speed = 1;
  const width = carouselList.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = carouselList.cloneNode(true);
    carouselWrapper.appendChild(list2);
    list2.style.left = `${width}px`;
  }
  function moveFirst() {
    x -= speed;
    if(width>= Math.abs(x)){
      carouselList.style.left = `${x}px`;
    } else {
      x = width;
    }
  }
  function moveSecond() {
    x2 -= speed;
    if (list2.offsetWidth >= Math.abs(x2)){
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
  clone();
}

autoSlider();
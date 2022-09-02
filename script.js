const floordiv = document.querySelector(".floors");
for (let n = 20; n >= 0; n--) {
  const floor = document.createElement("div");
  floor.setAttribute("class", "floor");
  floor.setAttribute("data-floor",n);
  floordiv.appendChild(floor);
  floor.innerText = n;
}
const lift1 = document.querySelector("#elevator1");
const lift2 = document.querySelector("#elevator2");
const lift3 = document.querySelector("#elevator3");
const random = Math.floor(Math.random() * 20) + 1;
const random1 = Math.floor(Math.random() * 20) + 1;
const random2 = Math.floor(Math.random() * 20) + 1;
lift1.style.marginTop = 80 * -1 * random - 80 + "px";
lift2.style.marginTop = 80 * -1 * random1 - 80 + "px";
lift3.style.marginTop = 80 * -1 * random2 - 80 + "px";
lift1.setAttribute("data-elevator", random);
lift2.setAttribute("data-elevator", random1);
lift3.setAttribute("data-elevator", random2);
let floors = document.getElementsByClassName("floor");
let floorHeight = 80;
(function () {
  let elevators = Array.prototype.filter.call(
    document.getElementsByClassName("elevator"),
    function (el) {
      return el;
    }
  );

  for (let i = 0; i < floors.length; i++) {
    floors[i].onclick = function (event) {
      if (elevators.length === 0) {
        alert("Try again");
      } else {
        let floor = event.target;
        let floorNumber = parseInt(floor.dataset.floor);

        const el = elevators.sort(function (a, b) {
          return (
            Math.abs(floorNumber - a.dataset.elevator) -
            Math.abs(floorNumber - b.dataset.elevator)
          );
        });

        elevators[0].style.marginTop =
          floorHeight * -1 * floorNumber - floorHeight + "px";
        elevators[0].dataset.elevator = floorNumber;
        elevators.shift();
      }
    };
  }
})();

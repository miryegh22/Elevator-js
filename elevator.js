let FloorNum = 20;
let Elevators = document.querySelector(".elevators");
let Floors = document.querySelector(".floors");
let ContainerLift = [];
let movableLifts = [];

function Elevator() {
    for (let i = 0; i < 3; i++) {
        let Lift = `<div class = "lift" id = "lift-${i}"><div class = "lift-box" id = "lift-box-${i}">  </div></div>`;
        Elevators.insertAdjacentHTML("afterbegin", Lift);
        ContainerLift.push({
            LiftId: `lift-${i}`,
            Checked: false,
            LiftPosition: 0,
            isMoving: false,
            LiftNumber: `${i}`,
            LiftCompartment: `${i}`,
        });
    }

    for (let i = 0; i < FloorNum; i++) {
        let Floor = `<button class = "floor" id = "floor-${i}" onclick = "Move(id)" >  ${i+1}</button>`;
        Floors.insertAdjacentHTML("afterbegin", Floor);
    }

    let lifts = document.querySelectorAll(".lift");
    for (let lift of lifts) {
        lift.style.height = `${3 * FloorNum}em`;
    }

}
Elevator();


function Move(id) {
    let movableLifts = ContainerLift.filter(lift => lift.Checked == false);
    if (movableLifts.length == 0) {
        console.log(` All the Lifts are first floor`);
    } else {
        let distanceLiftmin = [];
        let index = id.split("-");
        let distance = movableLifts.filter(lift => lift = lift.isMoving == false).map(lift => Math.abs(index[1] - lift.LiftPosition));
        let MinDistance = Math.min(...distance);
        movableLifts.forEach(lift => {
            if (Math.abs(index[1] - lift.LiftPosition) == MinDistance) {
                distanceLiftmin.push(lift);
            }
        });

        let contLift = distanceLiftmin[Math.floor(Math.random() * distanceLiftmin.length)];
        let count = contLift.LiftNumber;
        document.querySelector(`#lift-box-${count}`).style.bottom = `${index[1] * 3}em`;
        
        ContainerLift[count].isMoving = true;
        document.getElementById(`floor-${index[1]}`).disabled = true;
        ContainerLift[count].LiftPosition = `${index[1]}`;
        setTimeout(function () {
            ContainerLift[count].isMoving = false;
            document.getElementById(`floor-${index[1]}`).disabled = false;
        }, 1000);
    }
}


let speed = 740 // speed of plane in km/h

let planes = [
    { name: 'plane-1', distance: 500, fuel: 1500 },
    { name: 'plane-2', distance: 400, fuel: 1800 },
    { name: 'plane-3', distance: 390, fuel: 1100 },
    { name: 'plane-4', distance: 100, fuel: 1200 },
    { name: 'plane-5', distance: 700, fuel: 1600 },
    { name: 'plane-6', distance: 450, fuel: 1200 }
]

let i = 0
let ps = document.querySelectorAll('.plane p')
ps.forEach(e => { Array.from(e.innerText = "Name : " + planes[i]['name'] + ", Distance : " + planes[i]['distance'] + ", Fuel : " + planes[i++]['fuel']) })

function run() {
    const element = document.getElementsByClassName("plane");
    setInterval(frame, 0.51);
    let width = 0;
    function frame() {
        // if (i < 6) {
            if (width > 685) {
                i++
                width = 0
            }
            else {
                width++;
                element[i % 6].style.left = (width / 10) + '%';
            }
        // }
        // else
        //     clearInterval(frame)
    }
}
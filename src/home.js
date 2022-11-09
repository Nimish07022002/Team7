let planes = []
let capacity = 5;


let ps = document.querySelectorAll('.plane p')
ps.forEach((e, i) => { Array.from(e.innerText = "Name : " + planes[i]['name'] + ", Distance : " + planes[i]['distance'] + ", Fuel : " + planes[i++]['fuel']) })

const CreatePlane = (param) => {
    let plane_no = param[0];
    let plane_type = param[1];
    let fuel = param[2];
    let emergency = param[3];

    if (plane_type == "fighterjet") average = 100;
    else if (plane_type == "passenger") average = 80;
    else average = 78;

    return {
        plane_no,
        plane_type,
        fuel,
        emergency,
        average,
        priority: undefined,
    };
}

const Createrunway = () => {
    return {}
}

const Setpriority = () => {

}

function submit() {
    n = document.getElementById('name').value
    f = document.getElementById('fuel').value
    t = document.getElementById('type').value
    e = document.getElementById('emergency').checked

    planes.push(CreatePlane([n, f, t, e]))
}

function run() {
    const element = document.getElementsByClassName("plane");
    const interval = setInterval(frame, 0.5);
    let i = 0
    let width = 0;
    function frame() {
        console.log(`${i} plane is changing`)
        if (i < 6) {
            if (width > 685) {
                i++
                width = 0
            }
            else {
                width += 5;
                element[i % 6].style.left = (width / 10) + '%';
            }
        }
        else {
            clearInterval(interval)
            console.log('Width function stoped')
        }
    }
}





const showHome = () => {
    document.getElementById('home').style.display = 'block'
    document.getElementById('simulate').style.display = 'none'
    document.getElementById('lowerSection').style.display = 'none'
    // document.getElementById('manual').style.display = 'none'
    document.getElementById('automatic').style.display = 'none'
}
const showManual = () => {
    document.getElementById('home').style.display = 'none'
    document.getElementById('simulate').style.display = 'block'
    document.getElementById('lowerSection').style.display = 'block'
    document.getElementById('manual').style.display = 'block'
    document.getElementById('automatic').style.display = 'none'
}
const showAutomatic = () => {
    document.getElementById('home').style.display = 'none'
    document.getElementById('simulate').style.display = 'block'
    document.getElementById('lowerSection').style.display = 'block'
    document.getElementById('manual').style.display = 'none'
    document.getElementById('automatic').style.display = 'block'
}






const holding = (param) => {
    return param.length < capacity;
};

let plane1 = CreatePlane(["BOE112", "fighterjet", 5000, true]);
let plane2 = CreatePlane(["BOE113", "passenger", 5000, true]);
let plane3 = CreatePlane(["BOE112", "cargo", 5000, true]);

planes.push(plane1);
planes.push(plane2);
planes.push(plane3);

console.log(arr_planes);
console.log(holding(arr_planes));

const priority = (param) => {
    param.map((e) => {

    });
};
priority(arr_planes);
console.log(arr_planes);



// 2->technical emergency, fuel emergency
// 1->Medical emergency 

let interval = setInterval(() => { }, Math.ceil(Math.random() * 3))

// wait()
//runway()
//go_to_land()
//success
//crash
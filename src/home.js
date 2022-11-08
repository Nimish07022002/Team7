let planes = []


let ps = document.querySelectorAll('.plane p')
ps.forEach((e,i) => { Array.from(e.innerText = "Name : " + planes[i]['name'] + ", Distance : " + planes[i]['distance'] + ", Fuel : " + planes[i++]['fuel']) })

const CreatePlane=(param)=>{
    return {'name':param[0],'fuel':param[1],'type':param[2],'emergency':param[3],'priority':undefined}
}

const Createrunway=()=>{
    return {}
}

const Setpriority=()=>{
    
}

function submit(){
    n=document.getElementById('name').value
    f=document.getElementById('fuel').value
    t=document.getElementById('type').value
    e=document.getElementById('emergency').checked

    planes.push(CreatePlane([n,f,t,e]))
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
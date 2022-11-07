const CreatePlane=(param)=>{
    return {'name':param[0],'fuel':param[1],'type':param[2],'emergency':param[3],'priority':undefined}
}

const Createrunway=()=>{
    return {}
}

const Setpriority=()=>{
    
}

planes=[]
runways=[]

function submit(){
    n=document.getElementById('name').value
    f=document.getElementById('fuel').value
    t=document.getElementById('type').value
    e=document.getElementById('emergency').checked

    planes.push(CreatePlane([n,f,t,e]))
}
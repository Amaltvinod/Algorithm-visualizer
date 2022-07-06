window.onload=function(){
    loader();
    generate();

}


//  loader class
async function loader(){
document.getElementById("wizard").style.display="block";
if(document.getElementById("wizard").style.display=="block"){
    await sleep(2000);
        document.getElementById("wizard").style.display="none";
    }
}
    
const arr=[];
function generateRandom(id){
     element=document.getElementById(id);
     num=Math.floor(Math.random()*(100-1)+1);
     element.textContent=num.toString();
     return num;
}
function generate(){
    for(let i=0;i<6;i++){
        let temp=i+1;
        arr[i]=generateRandom(temp.toString());
    }
}

// just toggle of side window
function visibility(){
    document.getElementById("toggle").classList.toggle("visibility")
    document.getElementById("btn-toggle").classList.toggle("visible")


}
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
// linear search logic
async function linearsearch(){
    let key=document.getElementById("textbox").value;
    key=parseInt(key);
    document.getElementById("textbox").value=key;

    for(let i=0;i<6;i++){
        let temp=i+1;
        ele=document.getElementById(temp.toString());
        ele.style.animation= "animate 3s linear 0s infinite normal forwards";
        
        await sleep(2500);
        if(arr[i]==key){
            ele.style.animation= "me 2s linear 0s infinite normal forwards";
            
            // ele.style.backgroundColor="green";
            break;
        }else{
            ele.style.animation= "newani 4s ease 0s 1 normal forwards";

            await sleep(1500);

        }
    }
   
}
function notNeeded(low,mid){
    while(low<=mid){
        let temp=low+1;
        const element=document.getElementById(temp.toString());
        element.style.backgroundColor="red";
        low++;
    }
}

async function binarysearch(){
    let key=document.getElementById("textbox").value;
    key=parseInt(key);
    console.log(key);
    let low=0;
    let high=5;
    document.getElementById("textbox").value="";
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        console.log(mid);
        let temp=mid+1;
        let element=document.getElementById(temp.toString());
        console.log(element);
        element.style.backgroundColor="cyan";
        await sleep(2000);
        if(key==arr[mid]){
            temp=mid+1;
            element=document.getElementById(temp.toString());
            element.style.backgroundColor="green";
            await sleep(2000)
            break;     
            }else{
                if(key>arr[mid]){
                    low=mid+1;
                    notNeeded(low,mid);
                    await sleep(2000)  ;
                }else{
                    high=mid-1;
                    notNeeded(mid,high);
                    await sleep(2000)  ;
                    }
            }
        }
}

// selection sort javscript
async function selectionsort(){
    for(let i=0;i<5;i++){
        let temp=i+1;
        const element=document.getElementById(temp.toString());
        for(let j=i+1;j<6;j++){
            let temp1=j+1;
            const secondelement=document.getElementById(temp1.toString());
            element.style.backgroundColor="yellow"
            secondelement.style.backgroundColor="yellow";
            await sleep(2000);
            if(arr[i]>arr[j]){
                element.style.backgroundColor="red"
                secondelement.style.backgroundColor="red";
                await sleep(2000);
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                element.textContent=arr[i].toString();
                secondelement.textContent=arr[j].toString();
                element.style.backgroundColor="green"
                secondelement.style.backgroundColor="green";
                await sleep(1500);
                element.style.backgroundColor="#140A56"
                secondelement.style.backgroundColor="#140A56";
                await sleep(2000);
            }else{
                element.style.backgroundColor="green"
                secondelement.style.backgroundColor="green";
                await sleep(1500);
                element.style.backgroundColor="#140A56"
                secondelement.style.backgroundColor="#140A56";
                await sleep(2000);

            }
        }
    }

}
   




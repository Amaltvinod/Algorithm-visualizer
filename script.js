window.onload=function(){
    generate();

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
async function linearsearch(){
    let key=document.getElementById("textbox").value;
    key=parseInt(key);
    document.getElementById("textbox").value="";
    for(let i=0;i<6;i++){
        let temp=i+1;
        ele=document.getElementById(temp.toString());
        ele.style.backgroundColor="yellow";
        await sleep(1500);
        if(arr[i]==key){
            ele.style.backgroundColor="green";
            break;
        }else{
            ele.style.backgroundColor="red";
            await sleep(1500);

        }
    }
   
}
function notNeeded(low,mid){
    while(low<=mid){
        let temp=low+1;
        element.getElementById(temp.toString());
        element.style.backgroundColor="red";
        low++;
    }
}

async function binarysearch(){
    let key=document.getElementById("textbox").value;
    key=parseInt(key);
    let low=0;
    let high=6;
    document.getElementById("textbox").value="";
    while(low<=high){
        let mid=low+(high-low)/2;
        let temp=mid+1;
        element.getElementById(temp.toString());
        element.style.backgroundColor="cyan";
        await sleep(2000);
            if(key==arr[mid]){
                temp=mid+1;
                element.getElementById(temp.toString());
                element.style.backgroundColor="green";
                break;
                await sleep(2000)     
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
   







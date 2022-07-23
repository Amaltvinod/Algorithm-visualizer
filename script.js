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
//-------------------------SWAP FUNCTION-----------------------------------------------------//
//---------------------------------------------------------------------------------------------//
// const childe = document.querySelector(".array");
// const parent = childe.childNodes;
// console.log(parent[1])
// parent[1].style.
// parent[1].style.backgroundColor="red";
//---------------------------------------------------------------------------------------------//
//------------------
    
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
    document.getElementById("textbox").value=key;

    for(let i=0;i<6;i++){
        let temp=i+1;
        ele=document.getElementById(temp.toString());
        ele.style.animation= "animate 3s linear 0s infinite normal forwards";
        await sleep(1500);
        if(arr[i]==key){
            ele.style.animation= "gone 2s linear 0s infinite normal forwards";
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
        console.log(temp.toString());
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
//insertion sort javascript
async function insertionsort(){
    
    for (let i = 1; i < 6; ++i) {
        let key = arr[i];
        let temp=i+1;
        const element=document.getElementById(temp.toString());
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            
            let temp1=j+1;
            const secondelement=document.getElementById(temp1.toString());
            element.style.backgroundColor="yellow"
            secondelement.style.backgroundColor="yellow";
            await sleep(2000);
            element.style.backgroundColor="red";
            secondelement.style.backgroundColor="red";
            await sleep(2000);
            element.style.backgroundColor="white";
            let temp2=j+2;
            const third=document.getElementById(temp2.toString());
            third.style.backgroundColor="yellow";
            secondelement.style.backgroundColor="yellow";
            await sleep(2000);
            arr[j + 1] = arr[j];
            third.textContent=arr[j+1].toString();
            third.style.backgroundColor="green";
            await sleep(2000);
            third.style.backgroundColor="white";
            secondelement.style.backgroundColor="white";
            await sleep(2000);
            j = j - 1;
            
        }
        temp=j+2;
        secondelement=document.getElementById(temp.toString());
        arr[j + 1] = key;
        secondelement.textContent=arr[j+1].toString();
        await sleep(1000);
    }
}
   
// -----------------------------------------------------------------------------------------------
//---------------------------------heap sort------------------------------------------------------
// -----------------------------------------------------------------------------------------------

async function heapify(n,i)
{
    let temp=i+1;
    let element=document.getElementById(temp.toString());
    let largest = i; 
    let l = 2 * i + 1; 
    let temp1=l+1;
    let element1=document.getElementById(temp1.toString());
    let flag=false;
   
    let r = 2 * i + 2; 
    let temp2=r+1;
    let element2=document.getElementById(temp2.toString());
    if (l < n && arr[l] > arr[largest]){
        largest = l;
    }
    if (r < n && arr[r] > arr[largest]){
        largest = r;
        flag=true;
    }
    if (largest != i) {
        let temp=arr[i];
        arr[i]=arr[largest];
        arr[largest]=arr[i];;
        if(flag){

            element.style.color="yellow";
            element1.style.color="yellow";
            await sleep(2000);
            element.style.color="green";
            element1.style.color="green";
            element.textContent=arr[i].toString();
            element1.textContent=arr[largest].toString();
            await sleep(2000);
            element.style.color="black";
            element1.style.color="black";
            await sleep(2000);
            
        }else{
            element.style.color="yellow";
            element2.style.color="yellow";
            await sleep(2000);
            element.style.color="green";
            element2.style.color="green";
            element.textContent=arr[i].toString();
            element2.textContent=arr[largest].toString();
            await sleep(2000);
            element.style.color="black";
            element2.style.color="black";
            
        }
        await sleep(2000);
        heapify(n,largest);
    }
}
  
let n=6;
async function heapSort()
{

    console.log(arr);
    for (let i =n/2-1; i >= 0; i--){
        await sleep(2000)
        heapify(n,i);
    }
    for (let i = 5; i > 0; i--) {
        let temp1=1;
        let temp=arr[0];
        arr[0]=arr[i];
        arr[i]=temp;
        let element=document.getElementById(temp1.toString());
        let temp2=i+1;
        let element1=document.getElementById(temp2.toString());
        element.style.color="yellow";
        element1.style.color="yellow";
        await sleep(2000);
        element.style.color="green";
        element1.style.color="green";
        element.textContent=arr[0].toString();
        element1.textContent=arr[i].toString();
        await sleep(2000);
        element.style.color="black";
        element1.style.color="black";
        await sleep(2000);
        heapify(i,0);
    }
}
 


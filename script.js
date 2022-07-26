window.onload=function(){
    loader();
    generate();
    if (window.location.href.match('binarysearch.html') != null){
           generate();
            generateSortedArray();
    }else{
      generate();
    }
    

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
function generateSortedArray(){
    arr.sort();
    for(let i=0;i<6;i++){
       let temp=i+1;
       element=document.getElementById(temp);
       element.textContent=arr[i].toString();
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
        let element =document.getElementById("col1");
        element.style.backgroundColor="#A30015";
        element.style.width="100%";
        let element1=document.getElementById("col2");
        element1.style.backgroundColor="#A30015";
        element1.style.width="100%";
        await sleep(1500);
        element1.style.backgroundColor="#140A56"
        ele=document.getElementById(temp.toString());
        ele.style.animation= "animate 3s linear 0s infinite normal forwards";
        await sleep(1500);
        
        if(arr[i]==key){
            ele.style.animation= "gone 2s linear 0s infinite normal forwards";
            element1.style.backgroundColor="#140A56"
            element1=document.getElementById("col3")
            element1.style.backgroundColor="#A30015";
            element1.style.width="100%"
            break;
        }else{
            element1.style.backgroundColor="#140A56"
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
        element.style.animation= "newani 4s ease 0s 1 normal forwards";
        low++;
    }
}

async function binarysearch(){
    // const root = document.querySelector(":root"); 
    // root.style.setProperty("--gradient-shadow", 'white');
    let key=document.getElementById("textbox").value;
    key=parseInt(key);
    document.getElementById("textbox").value=key;
    let low=0;
    let high=5;
    let e1=document.getElementById("col1");
    e1.style.backgroundColor="#A30015";
    e1.style.width="100%";
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        var e2=document.getElementById("col2");
        e2.style.backgroundColor="#A30015";
        e2.style.width="120%";
        let temp=mid+1;
        let element=document.getElementById(temp.toString());
        element.style.color="cyan";
        await sleep(2000);
        e2.style.backgroundColor="#140A56"
        var e3=document.getElementById("col3");
        e3.style.backgroundColor="#A30015";
        e3.style.width="200%";
        await sleep(2000);
        if(key==arr[mid]){   
            temp=mid+1;
            var e4=document.getElementById("col4");
            e4.style.backgroundColor="#A30015";
            e4.style.width="100%";
            element=document.getElementById(temp.toString());
            element.style.color="green";
            await sleep(2000)
            break;   
        }
        else{
            var e5=document.getElementById("col5");
            e5.style.backgroundColor="#A30015";
            e5.style.width="200%";
            await sleep(500);
            e5.style.backgroundColor="#140A56";
            if(key>arr[mid]){
                var e3=document.getElementById("col6");
                e3.style.backgroundColor="#A30015";
                e3.style.width="200%";
                await sleep(1500);
                e3.style.backgroundColor="#140A56";
                var e3=document.getElementById("col7");
                e3.style.backgroundColor="#A30015";
                e3.style.width="100%";
                let temp1=low;
                low=mid+1;
                element.style.color="white"
                notNeeded(temp1,mid);
                await sleep(2000)  ;
                e3.style.backgroundColor="#140A56";
                }else{
                    var e3=document.getElementById("col8");
                    e3.style.backgroundColor="#A30015";
                    e3.style.width="100%";
                    await sleep(2000);
                    e3.style.backgroundColor="#140A56";
                    var e3=document.getElementById("col9");
                    e3.style.backgroundColor="#A30015";
                    e3.style.width="100%";
                    await sleep(1500);
                    e3.style.backgroundColor="#140A56";
                    let temp1=high
                    high=mid-1;
                    element.style.color="white";
                    notNeeded(mid,temp1);
                    await sleep(2000)  ;
                    }
            }
        }
}

// selection sort javscript
async function selectionsort(){
    let el=document.getElementById("col1");
    el.style.backgroundColor="#A30015";
    el.style.width="100%";
    for(let i=0;i<5;i++){
        let temp=i+1;
        const element=document.getElementById(temp.toString());
        let el1=document.getElementById("col2");
        el1.style.backgroundColor="#A30015";
        el1.style.width="100%";
        await sleep(200);
        for(let j=i+1;j<6;j++){
            let temp1=j+1;
            const secondelement=document.getElementById(temp1.toString());
            element.style.transform="translate(0px,100px)"
            // secondelement.style.transform="translate(0px,100px)" 
            element.style.color="yellow"
            secondelement.style.color="yellow";
            let el2=document.getElementById("col3");
            el2.style.backgroundColor="#A30015";
            el2.style.width="100%";
            await sleep(1000);
            el2.style.backgroundColor="#140A56";
            if(arr[i]>arr[j]){
                element.style.color="red"
                secondelement.style.color="red";
                await sleep(1000);
                el2=document.getElementById("col4");
                el2.style.backgroundColor="#A30015";
                el2.style.width="100%";
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                element.textContent=arr[i].toString();
                secondelement.textContent=arr[j].toString();
                element.style.color="green"
                secondelement.style.color="green";
                await sleep(1500);
                el2.style.backgroundColor="#140A56";
                element.style.color="#140A56"
                secondelement.style.color="#140A56";
                await sleep(1000);
            }else{
                element.style.color="green"
                secondelement.style.color="green";
                await sleep(1500);
                element.style.color="#140A56"
                secondelement.style.color="#140A56";
                await sleep(1000);

            }
        }
        el1.style.backgroundColor="140A56";

    }
    el.style.backgroundColor="140A56";
    document.getElementById(6).style.transform="translate(0px,100px)"

    const root = document.querySelector(":root"); //grabbing the root element
    root.style.setProperty("--gradient-shadow", 'white');
    // root.style.backgroundSize="400%";
    // root.style.width="cal(100% + 4px)";
    // root.style.height="cal(100% + 4px)";
    // root.style.zIndex="-1";
    // root.style.animation="animate 5s linear infinite";





    // document.getElementById(1).style.backgroundColor="white"
    // document.getElementById(2).style.backgroundColor="white"
    // document.getElementById(3).style.backgroundColor="white"
    // document.getElementById(4).style.backgroundColor="white"
    // document.getElementById(5).style.backgroundColor="white"
    // document.getElementById(6).style.backgroundColor="white"
   
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
            element.style.color="yellow"
            secondelement.style.color="yellow";
            await sleep(2000);
            element.style.color="red";
            secondelement.style.color="red";
            await sleep(2000);
            let temp2=j+2;
            const third=document.getElementById(temp2.toString());
            third.style.color="green";
            secondelement.style.color="green";
            await sleep(2000);
            arr[j + 1] = arr[j];
            third.textContent=arr[j+1].toString();
            await sleep(2000);
            third.style.color="black";
            secondelement.style.color="black";
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
 


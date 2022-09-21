window.onload=()=>{
    loader();
    generate();
    if (window.location.href.match('binarysearch.html') != null){
           generate();
            generateSortedArray();
    }else{
      generate();
    }
    

}
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
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
    arr.sort(function (a,b){
        return a-b;
    });
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
        e3.style.backgroundColor="#140A56"
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
   let pelement=document.getElementById("col1");
   pelement.style.backgroundColor="#A30015";
   pelement.style.width="100%"
    for (let i = 1; i < 6; i++) {
        let key = arr[i];
        let index=i;
        let pelement1=document.getElementById("col2");
        pelement1.style.backgroundColor="#A30015"
        pelement1.style.width="100%";
        await sleep(800);
        pelement1.style.backgroundColor="#140A56"
        pelement1=document.getElementById("col3")
        pelement1.style.backgroundColor="#A30015"
        pelement1.style.width="100%";
        await  sleep(800);
        pelement1.style.backgroundColor="#140A56";
        pelement1=document.getElementById("col4");
        pelement1.style.width="150%";
        pelement1.style.backgroundColor="#A30015";
        let temp=i+1;
        let element=document.getElementById(temp.toString());
        element.style.color="black";
        element.style.backgroundColor="black";
        let j = index - 1;
        let secondelement;
        while (j >= 0 && arr[j] > key) {
            // await sleep(1000);
            let pelement2=document.getElementById("col5");
            pelement2.style.width="100%";
            pelement2.style.backgroundColor="#A30015";
            let temp1=j+1;
            secondelement=document.getElementById(temp1.toString());
            secondelement.style.color="black";
            secondelement.style.backgroundColor="white";

            // secondelement.style.color="black";
            // secondelement.style.backgroundColor="black";
            arr[index]=arr[j]
            // element.style.color="yellow"
            // secondelement.style.color="yellow";
            // pelement2.style.transform="translate(0px,100px)";
            // element.style.transform="translate(0px,100px)";
            // secondelement.style.transform="translate(0px,100px)";
            await sleep(2000);
            element.textContent=arr[index].toString();
            element.style.color="white";
            element.style.color="#140A56";
            element.style.color="black";
            element.style.backgroundColor="white"
            secondelement.style.color="black";
            secondelement.style.backgroundColor="black";
            pelement2.style.backgroundColor="#140A56";
            // element.style.color="red";
            // secondelement.style.color="red";
            // await sleep(2000);
            // pelement2.style.transform="translate(0px,0px)";
            // element.style.transform="translate(0px,0px)";
            // secondelement.style.transform="translate(0px,0px)";
            // await sleep(2000);
            pelement2=document.getElementById("col6");
            pelement2.style.backgroundColor="#A30015";
            pelement2.style.width="100%";
            await sleep(2000);
            pelement2.style.backgroundColor="#140A56";
            index=j;
            element=secondelement;
            j = j - 1;
            
        }
       console.log(j);
        temp=j+2;
        arr[j+1] = key;
        secondelement=document.getElementById(temp.toString());
        secondelement.textContent=arr[j+1].toString();
        secondelement.style.color="black";
        secondelement.style.backgroundColor="white";
        let pelement2=document.getElementById("col7");
        pelement2.style.backgroundColor="#A30015";
        pelement2.style.width="100%";
        await sleep(1000);
        pelement2.style.backgroundColor="#140A56";
        pelement1.style.backgroundColor="#140A56";
        await sleep(700);
        
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

//============================================================================================================================================================
//quicksort.html
function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// function partition(low, high) {
  
//     // pivot
//     let pivot = arr[high];
//     let temp=high+1;
//     let element1=document.getElementById(temp.toString())
//     let elementp=document.getElementById("pivot-val");
//     let recpivot=element1.getBoundingClientRect();
//     elementp.style.display="block";
//     let lenp = recpivot.y.toString()+ "px";
//     elementp.style.transform = "translate(0px,$lenp))";

  
//     // Index of smaller element and
//     // indicates the right position
//     // of pivot found so far
//     let i = (low - 1);
//     let temp1=i+2;
//     let element2=document.getElementById(temp1.toString());
//     console.log(element2)
//     let elementi=document.getElementById("i-val");
//     elementi.style.display="block";
//     let reci=element2.getBoundingClientRect();
//     let leni=reci.y.toString() + "px";
//     elementi.style.transform="translate(0px,$leni)";

//     for (let j = low; j <= high - 1; j++) {
//         let temp2=j+1;
//         let element3=document.getElementById(temp2.toString());
//         let elementj=document.getElementById("j-val");
//         elementj.style.display="block";
//         let recj=element3.getBoundingClientRect();
//         let lenj=recj.y.toString()+"px";
//         element3.style.transform="translate(0px,$lenj)"
//         // If current element is smaller 
//         // than the pivot
//         if (arr[j] < pivot) {
//             element1.style.color="yellow";
//             element3.style.color="yellow";
//             // Increment index of 
//             // smaller element
//             i++;
//             temp1=i+1;
//             element2=document.getElementById(temp1.toString());
//             reci=element2.getBoundingClientRect();
//             leni=reci.y.toString()+ "px";
//             elementi.style.transform="translate(0px,$leni)";
//             swap(i, j);
            
//             element2.textContent=arr[i].toString();
//             element3.textContent=arr[j].toString();
//         }
//         element1.style.color="black";
//         element3.style.color="black";
//     }
//     swap( i + 1, high);
//     let temp4=i+1;
//     let element4=document.getElementById(temp4.toString());
//     console.log(temp4);
//     console.log(element4);
//     element4.textContent=arr[high].toString();
//     element1.textContent=arr[i+1].toString();
//     return (i + 1);
// }

//============================================================================================================================
// async function partition(low,high)
// {
//     let i = low;
//     let j = high;
//     let pivot = arr[j];
//     let temp1=i+1;
//     let temp2=j+1;
//     // console.log(pivot);
//     // let element=document.createElement("p");
//     // let text=document.createTextNode("(Pivot)");
//     // element.appendChild(text);
//     // var newele = document.getElementById((j+1).toString());
//     // newele.appendChild(element);

//     // let va=document.getElementsByClassName("i-val");
//     // va.style.display="block";
//     let element1=document.getElementById(temp2.toString())
//     let element=document.getElementById("pivot-val");
//     let recpivot=element1.getBoundingClientRect();
//     // console.log(typeof(rec));
//     element.style.display="block";
//     await sleep(2000);
    // let lenp = recpivot.y.toString()+ "px";
    // element.style.transform="translate(0px,lenp))";
    
//     // element1.style.left=(rec.x+"px");
//     console.log(i,j)
//     while (i < j)
//     {
//         let temp=i+1;
//         let temp1=j+1;

//         let elementi=document.getElementById("i-val")
//         let elementj=document.getElementById("j-val")
//         elementi.style.display="block"
//         elementj.style.display="block"
//         let element2=document.getElementById(temp.toString());
//         let element3=document.getElementById(temp1.toString());
//         let reci=element2.getBoundingClientRect();
//         let recj=element3.getBoundingClientRect();
//         let leni=reci.y.toString()+"px";
//         let lenj=recj.y.toString()+"px";
//         elementi.style.transform="translate(0px,leni))";
//         elementj.style.transform="translate(0px,lenj))";

        

//         while (pivot >arr[i]){
        
//             i++;
//             temp++;
//             element2=document.getElementById(temp.toString());
//             console.log(element2);
//             reci=element2.getBoundingClientRect();
//             leni=reci.y.toString()+"px";
//             elementi.style.transform="translate(0px,leni))";
//         }   
//         while (pivot < arr[j]){
//             j--;
//             temp1--;
//             element3=document.getElementById(temp1.toString());
//             recj=element3.getBoundingClientRect();
//             lenj=recj.y.toString()+"px";
//             elementj.style.transform="translate(0px,lenj))";
//         }
//         if (i < j){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//             element2.textContent=arr[i].toString();
//             element3.textContent=arr[j].toString();

        
//         }
            
//      temp=arr[low];
//     arr[low]=arr[j];
//     arr[j]=temp;
//     element2.textContent=arr[i].toString();
//     element3.textContent=arr[j].toString();
    
//     }
//     return j;
// }
  
async function quickSort(low,high)
{
    if (low < high)
    {
        let pivot = partition(low, high);

        quickSort(low, pivot - 1);
        quickSort(pivot + 1, high);
    }
}
async function quicksort(){
    quickSort(0,5);
    console.log(arr);
}

// let element=document.getElementById("1");
// let rec=element.getBoundingClientRect();
// console.log(rec.x+" "+rec.y);
//  let element1=document.getElementById("2");
//  let rec1=element1.getBoundingClientRect();
//  console.log(rec1.x+" "+rec1.y);
//  let element2=document.getElementById("3");
//  let rec2=element2.getBoundingClientRect();
//  console.log(rec2.x+" "+rec2.y);
 
//============================================BUBBLE SORT==================================================
async function bubbleSort(){

    let i=0, j=0,len = 6;
    let el=document.getElementById("col1");
    el.style.backgroundColor="#A30015";
    el.style.width="100%";
    for (i=0; i < len; i++){
        await sleep(200);
        for (j=0; j < (len-i-1); j++){
            let t= j+1;
            let t1 = t+1;
            await sleep(1000);
 
            let ele = document.getElementById(t.toString());
            let ele1 = document.getElementById(t1.toString());
            let ele2 = document.getElementById("des");

            ele.style.transform="translate(0px,100px)";
            ele1.style.transform="translate(0px,100px)";

            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                ele2.style.color="Green";
                ele2.innerHTML="Swapping since "+arr[j+1].toString()+" > "+arr[j].toString();
                await sleep(1000);
                ele.textContent=arr[j].toString();
                ele1.textContent=arr[j+1].toString();
                await sleep(1000);
                ele2.innerHTML="";
            }
            else{
                ele2.style.color="red";
                ele2.innerHTML="No swapping since "+arr[j+1].toString()+" > "+arr[j].toString();
                await sleep(1000);
                ele.style.transform="translate(0px,0px)";
                ele1.style.transform="translate(0px,0px)";
                await sleep(1000);
                ele2.innerHTML="";
            }
            await sleep(1000);
            ele.style.transform="translate(0px,0px)";
            ele1.style.transform="translate(0px,0px)";
  
        }
    }
}

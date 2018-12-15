
let api="61af38d30bac4bb78f8b30dd9f393801";
let drop_val=document.getElementById("drop_val");
let mainDiv=document.getElementById("mainDiv");



window.addEventListener("load", async ()=>
{
     await lister();
     await updatenews(drop_val[0].id)
     drop_val.addEventListener("change",async ()=>
{
//    alert(drop_val[drop_val.selectedIndex].id)
await updatenews(drop_val[drop_val.selectedIndex].id)

})
});

async function lister()
{
    const web=await fetch("https://newsapi.org/v1/sources");
    const json=await web.json();
    console.log(json)
    for(let i=0;i<12;i++)
    {
 drop_val.innerHTML+=`<option id="${json.sources[i].id}"> ${json.sources[i].name} </option>`;
    }


}

async function  updatenews(n)
{
    let full_api= await fetch(`https://newsapi.org/v1/articles?source=${n}&apikey=${api}`);
    let data=await full_api.json();
    
    mainDiv.innerHTML=data.articles.map((i)=>
    { return `<div class="col-lg-6  col-md-6  col-sm-6  col-xs-12 ">
    <div class="a">
    <h2 class="h">${i.title}</h2>
    <img src="${i.urlToImage}" class="img" class="img-responsive">
    <h5 class="desc">${i.description}</h5>
    </div>
</div>`;
     
    }).join('\n');
    console.log(data)
    

    
}


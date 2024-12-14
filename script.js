let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchdata =async()=>{
    let data = await fetch(`https://dummyjson.com/quotes/random`)
    let finaldata= await data.json()
    let divone=document.getElementById("one")
    divone.innerHTML=``
    divone.innerHTML+=`<p class="para"><i>${finaldata.quote} </i></p><br>`
    divone.innerHTML+=`<i><p><span class="paraspan">By ${finaldata.author}</span></p></i>`
}
fetchdata()
})
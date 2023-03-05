let accordionBtn=document.querySelectorAll(".accordion-button");
// let undnone;
accordionBtn.forEach(accord=>accord.addEventListener("click",function() {
    // undnone?undnone.classList.add="d-none":undnone.classList.remove="d-none"
    // alert("accordion-button")
    let r=accord.parentNode.parentNode.lastElementChild.firstElementChild
    // console.log(r);
    r.classList.remove("d-none")
    // undnone=r
    // r.classList.add("d-none")
    
}))
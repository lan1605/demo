
const menuToggle =  document.querySelector(".header-top-toggle");
const menuHeader = document.querySelector(".header-menu");
menuToggle.addEventListener("click", function(){
    menuHeader.classList.add("is-expand");
});
//nhấn ra ngoài thu gọn navbar
window.addEventListener("click",function (e) {
    if (!menuHeader.contains(e.target) && !e.target.matches(".header-top-toggle"))
    {
        menuHeader.classList.remove("is-expand");
    }
});

const dropdownToggle = document.querySelector(".dropdown-toggle"); 

dropdownToggle.addEventListener("click", () => { 
  console.log("Dropdown toggle clicked");
  event.preventDefault();

  const dropdownMenu = document.querySelector("#dropdown > .menu"); 
  dropdownMenu.classList.toggle("open"); 
  dropdownToggle.classList.toggle("open"); 
}); 
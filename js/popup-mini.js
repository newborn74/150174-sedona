var popup=document.querySelector(".modal-search"),searching=document.querySelector(".open-form"),searchButton=popup.querySelector(".search-button"),close=popup.querySelector(".modal-close"),arrivalDate=popup.querySelector(".arrival-date"),departureDate=popup.querySelector(".departure-date"),adultsNumber=popup.querySelector(".adults-number"),kidsNumber=popup.querySelector(".kids-number"),storageA=localStorage.getItem("adultsNumber"),storageK=localStorage.getItem("kidsNumber");searching.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("modal-close"),arrivalDate.focus(),popup.classList.contains("modal-close")?popup.classList.remove("modal-show"):popup.classList.add("modal-show"),storageA&&(adultsNumber.value=storageA),storageK&&(kidsNumber.value=storageK)}),searchButton.addEventListener("click",function(e){arrivalDate.value&&departureDate.value?(popup.classList.remove("modal-error"),localStorage.setItem("adultsNumber",adultsNumber.value),localStorage.setItem("kidsNumber",kidsNumber.value)):(e.preventDefault(),popup.classList.add("modal-error"),console.log("Введите даты въезда/выезда"))});
// select all the needed tag 
let tourRoute = document.getElementById("location");
let busTiming = document.getElementById("BusAndTime");
let ticketUserName = document.getElementById("name");
let countryCode = document.getElementById("cCode");
let mobileNo = document.getElementById("mobileNo");
let submitButton = document.getElementById("submit");
let form = document.getElementById("form")
let parentDivForShowingTicket = document.getElementById("forAppenchild")



let ticketArray = [];

console.log(ticketArray);


//  function for creating random ticket id 
function generateTicketId(name, route){
 // name → first 3 letters
  let namePart = name.trim().substring(0, 3).toUpperCase();

  // route → remove "-" and uppercase
  let routePart = route.toUpperCase();

  // date 
  let dateNow = Date.now();

  return `TKT-${namePart}-${routePart}-${dateNow}`;
}
submitButton.addEventListener("click", (e)=>{
    e.preventDefault()

  if (
    tourRoute.value === "select" ||
    busTiming.value === "select" ||
    ticketUserName.value.trim() === "" ||
    countryCode.value === "select" ||
    mobileNo.value.trim() === ""
  ) {
    alert("Please fill all fields");
  } else {


    let ticketsBookedByTraveler={
    TicketId:generateTicketId(ticketUserName.value, tourRoute.value),
    Route:tourRoute.value,
    BusTiming:busTiming.value,
    BookedFor:ticketUserName.value,
    MobileCountryCode:countryCode.options[countryCode.selectedIndex].text,
    mobileNumber:mobileNo.value,
}

ticketArray.push(ticketsBookedByTraveler);
let newDiv = document.createElement("div");
newDiv.innerHTML=`<h1 class="text-2xl font-bold text-center font-[Poppins] capitalize bg-linear-to-r from-indigo-500 to-purple-600 text-yellow-100 py-2 rounded-[5px]">ZengiRide Ticket Booking Confirmation</h1>
<br><p class="text-center font-[Poppins] uppercase text-white">Ticket Number: ${ticketsBookedByTraveler.TicketId}</p>
<br><p class="text-center font-[Poppins] uppercase text-white">NAME: ${ticketsBookedByTraveler.BookedFor}</p>
<br><p class="text-center font-[Poppins] uppercase text-white">COUNTRY: ${ticketsBookedByTraveler.MobileCountryCode}</p>
<br><p class="text-center font-[Poppins] uppercase text-white"> MOBILE NO: ${ticketsBookedByTraveler.mobileNumber}</p>
<br><p class="text-center font-[Poppins] uppercase text-white">ROUTE: ${ticketsBookedByTraveler.Route}</p>
<br><p class="text-center font-[Poppins] uppercase text-white">TIME: ${ticketsBookedByTraveler.BusTiming}</p>



<div class="flex justify-center mt-4" id="buttonDiv">
  <button onclick="window.print()" 
    class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
    Print Ticket
  </button>
</div>
`

parentDivForShowingTicket.appendChild(newDiv);
newDiv.classList.add("showTicket");

let printBtn = newDiv.querySelector("button");

printBtn.addEventListener("click", (e)=>{
  e.stopPropagation(); // 🔥 important
});

newDiv.addEventListener("click", ()=>{
    newDiv.remove();
    form.reset()
})



}

})
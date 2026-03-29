// select all the needed tag 
let issueUserName = document.getElementById("name");
let issuerEmail = document.getElementById("email");
let selectIssueID = document.getElementById("selectIssue");
let textarea = document.getElementById("textarea");
let submitButton = document.getElementById("submitBTN");
let form = document.getElementById("form")
let parentDivForShowingTicket = document.getElementById("forAppenchild");



let allIssueList = [];
console.log(allIssueList);


//  function for creating random ticket id 
function generateReferenceNumber(name, issueType){
 // name → first 3 letters
  let namePart = name.trim().substring(0, 3).toUpperCase();

  // route → remove "-" and uppercase
 let issueTypePart = issueType
  .replaceAll(" ", "")
  .replaceAll("-", "")
  .replaceAll("/", "");

  // date 
  let dateNow = Date.now();

  return `REF-${namePart}-${issueTypePart}-${dateNow}`;
}
submitButton.addEventListener("click", (e)=>{
    e.preventDefault()

  if (
    selectIssueID.value === "select" ||
   
    issuerEmail.value.trim() === "" ||
   
    issueUserName.value.trim() === "" ||
    textarea.value.trim() === "" 
  ) {
    alert("Please fill all fields");
  } else {


    let issueRaisedByUser={
    issueReferenceId:generateReferenceNumber(issueUserName.value, selectIssueID.value),
    issue:selectIssueID.options[selectIssueID.selectedIndex].text,
    name: issueUserName.value,
    email:issuerEmail.value,
    description:textarea.value,
   
}

allIssueList.push(issueRaisedByUser);
let newDiv = document.createElement("div");
newDiv.innerHTML=`<p class="text-2xl font-bold text-center font-[Poppins] capitalize bg-linear-to-r from-indigo-500 to-purple-600 text-yellow-100 py-2 rounded-[5px]">Thank You for Reaching to Us</p>
<p>Take Note of reference No: ${issueRaisedByUser.issueReferenceId}</p>
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


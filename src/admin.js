let showTicket=document.getElementById("showTicketInCount")
let showIssue=document.getElementById("showIssueRaisedInCount")
let showResolved=document.getElementById("showIssueResolvedInCount")
let ticketListContainerMainDiv=document.getElementById("ticketListContainer");
let issueListContainerMainDiv=document.getElementById("issueListContainer");
let resolvedListContainerMainDiv=document.getElementById("resolvedListContainer");

let ticketDetails=[];
let issueDetails=[];
let issueResolved=[];

showTicket.innerHTML=`${ticketDetails.length}`;
showIssue.innerHTML=`${issueDetails.length}`;
showResolved.innerHTML=`${issueResolved.length}`;



// ===== SHOW TICKET LIST =====
ticketDetails.forEach((t) => {
  let p = document.createElement("p");
  p.innerText = t;
  p.classList.add("border", "m-2", "p-1");
  ticketListContainerMainDiv.append(p);
});


// ===== SHOW ISSUE LIST =====
issueDetails.forEach((i) => {
  let p = document.createElement("p");
  p.innerText = i;
  p.classList.add("border", "m-2", "p-1");
  issueListContainerMainDiv.append(p);
});


// ===== SHOW RESOLVED LIST =====
issueResolved.forEach((r) => {
  let p = document.createElement("p");
  p.innerText = r;
  p.classList.add("border", "m-2", "p-1");
  resolvedListContainerMainDiv.append(p);
});
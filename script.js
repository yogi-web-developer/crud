// AOS Animation Code 
AOS.init();

function updateClock() {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();

    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = `${date} | ${time}`;
}

// Call the updateClock function initially
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);


// Calling the ID's one by one.
let fname = document.querySelector("#fnameInput");
let lname = document.querySelector("#lnameInput");
let mobile = document.querySelector("#mobileInput");
let mail = document.querySelector("#mailInput");
let selectElement = document.querySelector("#courseInput");
let courseId = document.querySelector("#idInput");
let button = document.querySelector("#button");
let formDisplay = document.querySelector("#formDisplay");
let registeredHeading = document.querySelector(".registeredHeading");
let formSection = document.querySelector("#formSection");


button.addEventListener("click", (event) => {
    event.preventDefault();
    if (
        fname.value.trim() === "" ||
        lname.value.trim() === "" ||
        mobile.value.trim() === "" ||
        mail.value.trim() === "" ||
        selectElement.value === "" ||
        courseId.value.trim() === ""
    ) {
        alert("Please fill in all the details.");
        return; // Prevent further execution if any field is empty
    }
    registeredHeading.classList.add("registerheading");
    let newDiv = document.createElement("div");
    formDisplay.appendChild(newDiv);
    // First Name Input
    let fnameInput = document.createElement("input");
    fnameInput.classList.add("fName");
    fnameInput.value = fname.value;
    fnameInput.setAttribute("readonly", "readonly");
    newDiv.appendChild(fnameInput);
    // Last Name Input
    let lnameInput = document.createElement("input");
    lnameInput.classList.add("lName");
    lnameInput.value = lname.value;
    lnameInput.setAttribute("readonly", "readonly");
    newDiv.appendChild(lnameInput);
    //Mobile Number Input
    let mobileInput = document.createElement("input");
    mobileInput.classList.add("mobileInput");
    mobileInput.value = mobile.value;
    mobileInput.setAttribute("readonly","readonly");
    newDiv.appendChild(mobileInput);
    // Mail Input
    let mailInput = document.createElement("input");
    mailInput.classList.add("mailInput");
    mailInput.value = mail.value;
    mailInput.setAttribute("readonly","readonly");
    newDiv.appendChild(mailInput);
    // Course Selection 
    let courseInput = document.createElement("input");
    courseInput.classList.add("courseInput");
    courseInput.value = selectElement.value;
    courseInput.setAttribute("readonly","readonly");
    newDiv.appendChild(courseInput);
    // course id input
    let courseID = document.createElement("input");
    courseID.classList.add("courseIDInput");
    courseID.value = courseId.value;
    courseID.setAttribute("readonly","readonly");
    newDiv.appendChild(courseID);
    // Edit Button 
    let editbutton = document.createElement("button");
    editbutton.classList.add("editBtn");
    editbutton.innerText = "Edit";
    newDiv.appendChild(editbutton);
    editbutton.addEventListener("click",()=>{
        fnameInput.removeAttribute("readonly", "readonly");
        lnameInput.removeAttribute("readonly", "readonly");
        mobileInput.removeAttribute("readonly", "readonly");
        mailInput.removeAttribute("readonly", "readonly");
        courseInput.removeAttribute("readonly", "readonly");
        courseID.removeAttribute("readonly", "readonly");
    });
    // Save Button 
    let savebutton = document.createElement("button");
    savebutton.classList.add("saveBtn");
    savebutton.innerText = "Save";
    newDiv.appendChild(savebutton);
    savebutton.addEventListener("click",()=>{
        fnameInput.setAttribute("readonly", "readonly");
        lnameInput.setAttribute("readonly", "readonly");
        mobileInput.setAttribute("readonly", "readonly");
        mailInput.setAttribute("readonly", "readonly");
        courseInput.setAttribute("readonly", "readonly");
        courseID.setAttribute("readonly", "readonly");
    });
    // Delete Button 
    let delbtn = document.createElement("button");
    delbtn.classList.add("delbtn");
    delbtn.innerText = "Delete";
    newDiv.appendChild(delbtn);
    delbtn.addEventListener("click",()=> {
        newDiv.style.display = "none";
    });

})
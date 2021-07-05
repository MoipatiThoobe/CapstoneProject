//For help with my comment section I used Stack Over Flow
//Here is a link to the website: https://stackoverflow.com/questions/38269091/how-to-post-comment-below-the-text-box-after-clicking-submit-button
//For help with the like/dislike I used W3schools
//Here is a link to the website: https://www.w3schools.com/howto/howto_js_toggle_like.asp
//For help with the contact me page I used code brainer
//Here is a link to the website: https://www.codebrainer.com/blog/contact-form-in-javascript
//For help with my drop down menu I used Code Pen
//Here is a link to the website: https://codepen.io/g13nn/pen/eHGEF
//For help with the hide/show functions I used Rose India
//Here is a link to the website: https://www.roseindia.net/javascript/javascriptexamples/javascript-show-hide-table.shtml
//For help with creating a table of objects I used Fwait
//Here is a link to the website: https://www.fwait.com/how-to-create-table-from-an-array-of-objects-in-javascript/
//For help with saving images in Local storage I used Code Pen
//Here is a link to the website: https://codepen.io/thbwd/pen/nKwcx
//I also got some help from my mentor Dayle Klinkhamer

//Empty Array of objects
let saved = [];

//function for user to leave a comment
function leaveComment(){
    let div = document.getElementById("comments");
    div.innerHTML = div.innerHTML + "<br>" + document.getElementById("comment").value;
}

//function to like/dislike a post
function likeDislike(x) {
    x.classList.toggle("fa-thumbs-down");
}


//Declaring fields for the contact me page
let fields = {};
 document.addEventListener("DOMContentLoaded", function(){
     fields.fname = document.getElementById("fname");
     fields.lname = document.getElementById("lname");
     fields.email = document.getElementById("email");
     fields.subject = document.getElementById("subject");
 })

 //Function to test if there is no empty field in the contact me page
 function isNotEmpty(value){
     if (value == null || typeof value == "undefined") return false;
    return (value.length > 0);
 }

 //function to test if the value in the field is valid
 function fieldValidation(field, validationFunction){
     if (field == null) return false;

     let isFieldValid = validationFunction(field.value)
     if (!isFieldValid){
         field.className = 'placeholderRed';
     } else{
         field.className = '';
     }
     return isFieldValid;
 }

 //function to to check if the user input is valid
 function isValid(){
     let valid = true;

     valid &= fieldValidation(fields.fname, isNotEmpty);
     valid &= fieldValidation(fields.lname, isNotEmpty);
     valid &= fieldValidation(fields.email, isNotEmpty);
     valid &= fieldValidation(fields.subject, isNotEmpty);

     return valid;
     
 }

//creating a User object
 class User{
     constructor(fname, lname, email, subject){
         this.fname = fname;
         this.lname = lname;
         this.email = email;
         this.subject = subject;
     }
 }

 //Function to save the input the user has entered on the contact me page
 function contactMe(){
     if (isValid()){
         let usr = new User(fname.value, lname.value, email.value, subject.value);

         alert(`${usr.fname} your message has been sent`);
     }
     else{
         alert("There was an error");
     }
 }

 
//function to save the image in Local storage
function saveImage(imgId){
    let image = document.getElementById(imgId).src;
    saved.push(image);
    localStorage.setItem("myImage", JSON.stringify(saved));
    displayNumberOfObjects();
}
//function to load the image from local storage
function loadFromLocalStorage(){
    let images = JSON.parse(localStorage.getItem("myImage"));
  
    if(images && images.length > 0){
      saved = images;
      
      images.forEach(displayImgData);
    }
    displayTable();
  }

//function to display the image stored in local storage
function displayImgData(){
    var images = JSON.parse(localStorage.getItem("myImage"));
    let span = document.createElement('span');
    span.innerHTML = '<img class="thumb" src="' + images + '"/>';
    document.getElementById('list').insertBefore(span, null);
  }


//function to save the table data in Local storage
function saveTable(){
    let tableObj = document.getElementById("recordTable");
    let allTRs = tableObj.getElementsByTagName("tr");
    
    for(let trCounter = 0; trCounter < allTRs.length; trCounter++){
        let tempArray = [];
        let allTDsInTR = allTRs[trCounter].getElementsByTagName("td");
        for (let tdCounter = 0; tdCounter < allTDsInTR.length; tdCounter++){
            tempArray.push(allTDsInTR[tdCounter].innerHTML);
        }
        saved.push(tempArray);
        
    }
    localStorage.setItem("tableData", JSON.stringify(saved));
}




//Functiion to display the table stored in Local Storage
function displayTable(){
    let myTable = document.querySelector("#table");
    let headers = ['Artist', 'Album'];
    let dataset = JSON.parse(localStorage.getItem('tableData'));
    console.log(dataset);
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    dataset.forEach(data => {
        let row = document.createElement('tr');

        Object.values(data).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);

        })
        table.appendChild(row);

    });
    myTable.appendChild(table);
}







   



//function to count the number of objects saved in local storage

function displayNumberOfObjects(){
    if(saved.length > 0){
       alert(saved.length +
        " Item" + ((saved.length > 1)? "s" : "") + " stored in your browser");
    }
}

//functiom to hide the table
function hideTable(){
    document.querySelector("table").style.visibility = "hidden";
}

//function to show the table
function showTable(){
    document.querySelector("table").style.visibility = "visible";
}

//function for the drop down menu
$(document).ready(function(){
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function(){
        $(".menu").slideToggle("slow", function(){
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function(){
        $(".menu").slideToggle("slow", function(){
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    
});






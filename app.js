
// adding buttons
let friendsAdd = document.getElementById("friends");


// saving buttons
let saveChanges = document.getElementById("saveChanges");

// link holder sections
const friendsList = document.getElementById("friendsList"); 

// makes a div to go inside friendsList where 'Action' items (inputs, adding button) go
let friendsAction = document.createElement('div');
friendsAction.setAttribute('id', 'friendsAction');

// makes a div to go inside friendsList where saved information goes
let friendsDiv = document.createElement('div');
friendsDiv.setAttribute('id', 'friendsDiv');

//append friendsAction and friendsDiv to friendsList
friendsList.appendChild(friendsAction);
friendsList.appendChild(friendsDiv);


//adding button click event listeners
friendsAdd.addEventListener('click', () => {
   let friendsInputCount = friendsList.getElementsByTagName('input').length;

   if (friendsInputCount < 3) {

   // create inputs
   let linkName = document.createElement('input');
   let linkString = document.createElement('input');
   let linkDescription = document.createElement('input');
   let meetingPassCode = document.createElement('input');

   // sets attributes for inputs (placeholder text and class reference for css)
   linkName.setAttribute('placeholder', 'Name of Zoom?');
   linkString.setAttribute('placeholder', 'URL for Zoom?');
   linkString.setAttribute('class', 'zoom-link');
   linkDescription.setAttribute('placeholder', "Describe o'er here");
   meetingPassCode.setAttribute('placeholder', "passcode (if applies)");

   // add the inputs to the freinds List div
   friendsAction.appendChild(linkName)
   friendsAction.appendChild(linkString);
   friendsAction.appendChild(linkDescription);
   friendsAction.appendChild(meetingPassCode);
   
   }

   else {

      let inputList = friendsAction.getElementsByTagName('input');

      while (inputList.length > 0) {
         friendsAction.removeChild(inputList[0]);
      }

   }
});







// save changes button event  listener
saveChanges.addEventListener('click', () => {
   //console log information

   //get friend related information
   const inputFriends = friendsList.getElementsByTagName('input');

   let linkInfo = document.createElement('div');
   

   var friendName = document.createTextNode(inputFriends[0].value);
   var friendLink = document.createTextNode(inputFriends[1].value);

   var zoomLinkName = inputFriends[1].value; 

   var friendDescription = document.createTextNode(inputFriends[2].value);
   var friendPasscode = document.createTextNode(inputFriends[3].value);

   linkInfo.setAttribute('id', zoomLinkName);

   // id of the paragraph tag is the zoom link
   linkInfo.appendChild(document.createTextNode("Name: "));
   linkInfo.appendChild(friendName);
   linkInfo.appendChild(document.createElement('br'));
   linkInfo.appendChild(document.createTextNode("Link: "));
   linkInfo.appendChild(friendLink);
   linkInfo.appendChild(document.createElement('br'));
   linkInfo.appendChild(document.createTextNode("Description: "));
   linkInfo.appendChild(friendDescription);
   linkInfo.appendChild(document.createElement('br'));
   linkInfo.appendChild(document.createTextNode("Passcode: "));
   linkInfo.appendChild(friendPasscode);
   
   friendsDiv.appendChild(linkInfo);


   let inputList = friendsAction.getElementsByTagName('input');

   while (inputList.length > 0) {
      friendsAction.removeChild(inputList[0]);
   }

   // edit button lets user change any of the info related to the zoom (name, url, description, passcode) 
   let editButton = document.createElement('button');
   editButton.textContent = 'Edit Info';

   editButton.onclick = function editInfo() {

      console.log(friendsList);

   }

   linkInfo.appendChild(document.createElement('br'));
   linkInfo.appendChild(editButton);
   
   // delete button lets user get rid of this zoom link
   let deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete Info';

   deleteButton.onclick = function(event) {
      friendsDiv.removeChild(event.target.parentNode); 
   }

   linkInfo.appendChild(document.createElement('br'));
   linkInfo.appendChild(deleteButton);

   linkInfo.appendChild(document.createElement('br'));
   
});
// end of save changes function


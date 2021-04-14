

let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');



let jsonDatabase = [
  {
      "title" : "NEVER GONNA DANCE AGAIN: ACT 1",
      // "picture_url" : "https://static.wikia.nocookie.net/kpop/images/3/3b/Taemin_Never_Gonna_Dance_Again_-_Act_1_digital_album_cover.png/revision/latest?cb=20200907180213",
      "picture_url" : "ngda1.png",
      "bg_color" : "#7e7e7e",
      "songs" : ["Criminal", "Strangers", "Famous-Korean Version", "Just Me and You", "2 KIDS", "Black Rose", "Waiting For", "Clockwork", "Nemo"]
    },
    {
      "title" : "MOVE",
      "picture_url" : "https://blog.onehallyu.com/wp-content/uploads/2017/11/b3d1f71fd747f393f099186b32482146.1000x1000x1.jpg",
      "bg_color" : "#d69999",
      "songs" : ["Day and Night", "MOVE", "Love", "Snow Flower", "Crazy 4 U", "Heart Stop", "Rise", "I'm Crying-Korean Version", "Thirsty", "Stone Heart", "Back to You", "Hypnosis-Rearranged Version", "Flame of Love-Korean Version"]
    },
    {
      "title" : "PRESS IT",
      "picture_url" : "https://images-na.ssl-images-amazon.com/images/I/81yZ%2BlPU2pL._SL1500_.jpg",
      "bg_color" : "#b29e8e",
      "songs" : ["Drip Drop", "Soldier", "Guess Who", "Mystery Lover", "Until Today", "Press Your Number", "Already", "One By One", "Sexuality", "Hypnosis"]

    }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {

  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['bg_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>Song List:</h4><ul class=\"songsList\">";

  for (var i = 0; i < incomingJSON['songs'].length; i++) {
    var petString = "<li>" + incomingJSON['songs'][i] + "</li>";
    incompleteHTML += songsString;
  }

  incompleteHTML += "</ul></div>";
  contentGridElement.innerHTML = incompleteHTML;
  console.log(incompleteHTML);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['bg_color'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];

  newContentElement.appendChild(newContentHeading);



  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Song List:";
  newContentElement.appendChild(newContentSubhead);


  let newContentSongsList = document.createElement("UL");
  newContentElement.appendChild(newContentSongsList);

  for (var i = 0; i < incomingJSON['songs'].length; i++) {
    var currentSongsString = incomingJSON['songs'][i];
    var newSongsItem = document.createElement("LI");
    newSongsItem.innerText = currentSongsString;
    newContentSongsList.appendChild(newSongsItem);
  }


  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);

}

AOS.init();

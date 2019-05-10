let activeDog = 0;
let dogs = [{
  name: "Mr. Kibbles",
  moods: ["Sad", "Tail Up", "Playful", 'Happy'],
  pets: 0,
  walks: 0,
  feeds: 0,
  moodIndex: 0,
  satisfaction: 6,
  images: ["/assets/saddog.jpg", "/assets/tailup.jpg", "/assets/playful.jpg", "/assets/happydog.jpg"]

}, {
  name: "Cat Napper",
  moods: ["Sad", "Tail Up", "Playful", 'Happy'],
  pets: 0,
  walks: 0,
  feeds: 0,
  moodIndex: 0,
  satisfaction: 5,
  images: ["/assets/catnapper.jpg", "/assets/tailup.jpg", "/assets/playful.jpg", "/assets/happydog.jpg"]

}, {
  name: "Mr. Bean",
  moods: ["Sad", "Tail Up", "Playful", 'Happy'],
  pets: 0,
  walks: 0,
  feeds: 0,
  moodIndex: 0,
  satisfaction: 8,
  images: ["/assets/mrbean.jpg", "/assets/tailup.jpg", "/assets/playful.jpg", "/assets/happydog.jpg"]

}, {
  name: "Puddles",
  moods: ["Sad", "Tail Up", "Playful", 'Happy'],
  pets: 0,
  walks: 0,
  feeds: 0,
  moodIndex: 0,
  satisfaction: 4,
  images: ["/assets/puddles.jpg", "/assets/tailup.jpg", "/assets/playful.jpg", "/assets/happydog.jpg"]

}
]
// function pet() {
//   dogs[activeDog].pets++
//   dogs[activeDog].walks++
//   dogs[activeDog].feeds++
//   if (dogs[activeDog].pets % dogs[activeDog].satisfaction == 0) {
//     dogs[activeDog].moodIndex++;
//   } else if (dogs[activeDog].walks % dogs[activeDog].satisfaction == 0) {
//     dogs[activeDog].moodIndex++;
//   } else if (dogs[activeDog].feeds % dogs[activeDog].satisfaction == 0) {
//     dogs[activeDog].moodIndex++;
//   }
// }
// drawDog()
function pet() {
  dogs[activeDog].pets++

  if (dogs[activeDog].pets + dogs[activeDog].walks + dogs[activeDog].feeds % dogs[activeDog].satisfaction == 0) {
    dogs[activeDog].moodIndex++;
  }
}
drawDog()

function walk() {
  dogs[activeDog].walks++

  if (dogs[activeDog].pets + dogs[activeDog].walks + dogs[activeDog].feeds % dogs[activeDog].satisfaction == 0) {
    dogs[activeDog].moodIndex++;
  }
}
drawDog()
function feed() {
  dogs[activeDog].feeds++

  if (dogs[activeDog].pets + dogs[activeDog].walks + dogs[activeDog].feeds % dogs[activeDog].satisfaction == 0) {
    dogs[activeDog].moodIndex++;
  }
}
drawDog()
// }
// function walk() {
//   dogs[activeDog].walks++
//   if (dogs[activeDog].walks % dogs[activeDog].satisfaction == 0) {
//     dogs[activeDog].moodIndex++;
//   }
//   drawDog()
// }
// function feed() {
//   dogs[activeDog].feeds++
//   if (dogs[activeDog].feeds % dogs[activeDog].satisfaction == 0) {
//     dogs[activeDog].moodIndex++;
//   }
//   drawDog()
// }

function drawDog() {
  document.getElementById("pets").innerText = dogs[activeDog].pets.toString()
  document.getElementById("walks").innerText = dogs[activeDog].walks.toString()
  document.getElementById("feeds").innerText = dogs[activeDog].feeds.toString()
  document.getElementById('dog-image').setAttribute("src", dogs[activeDog].images[dogs[activeDog].moodIndex])
  document.getElementById("mood").innerText = dogs[activeDog].moods[dogs[activeDog].moodIndex]
  if (dogs[activeDog].moodIndex == dogs[activeDog].moods.length - 1) {
    // @ts-ignore
    document.getElementById('pet-button').disabled = true //disabled = true
  }

}

function napTime() {
  dogs[activeDog].moodIndex = 0
  dogs[activeDog].pets = 0
  // @ts-ignore
  document.getElementById('pet-button').disabled = false
  drawDog()
}
function setActiveDogs(index) {
  activeDog = index
  drawDog()
}

function drawButtons() {
  let template = ''
  for (let i = 0; i < dogs.length; i++) {
    template += `
      <button class="btn btn-info" onclick="setActiveDogs(${i})">${dogs[i].name}</button>
      `
  }
  document.getElementById('dog-buttons').innerHTML = template
}
drawButtons()
let dog = {
  name: "Mr. Kibbles",
  moods: ["sad", "tail up", "playful", 'happy'],
  pets: 0,
  moodIndex: 0,
  satisfaction: 5,
  images: ["/assets/saddog.jpg", "/assets/tailup.jpg", "/assets/playful.jpg", "/assets/happydog.jpg"]

}

function pet() {
  dog.pets++
  if (dog.pets % dog.satisfaction == 0) {
    dog.moodIndex++;
  }
  drawDog()
}

function drawDog() {
  document.getElementById("pets").innerText = dog.pets.toString()
  document.getElementById('dog-image').setAttribute("scr", dog.images[dog.moodIndex])
  document.getElementById("mood").innerText = dog.moods[dog.moodIndex]
  if (dog.moodIndex == dog.moods.length - 1) {
    document.getElementById('pet-button').setAttribute('disabled', 'true') //disabled = true
  } else {
    document.getElementById('pet-button').setAttribute("disabled", 'false')
  }
}

function napTime() {
  dog.moodIndex = 0
  dog.pets = 0
  drawDog()
}
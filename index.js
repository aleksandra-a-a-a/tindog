import dogsData from './data.js'
import Dog from './Dog.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

document.getElementById('cross-btn').addEventListener('click', no)
document.getElementById('love-btn').addEventListener('click', yes)
document.getElementById('profile-icon').addEventListener('click', renderProfile)
document.getElementById('logo').addEventListener('click', render)


function nextDog() {
    if (currentDogIndex === dogsData.length - 1) {
        noMoreMatches()
        
    } else {
        currentDogIndex+=1
        currentDog = new Dog(dogsData[currentDogIndex])
        render()
    }
}

function render() {
    document.getElementById('dog-data').innerHTML = currentDog.getDogHtml()
    document.getElementById('my-profile').innerHTML = ""
    document.getElementById('reaction-icons').style.display = "flex"
}

function noMoreMatches() {
    document.getElementById('dog-data').innerHTML = getNoMoreMatchesHtml()
    document.getElementById('cross-btn').style.display = 'none'
    document.getElementById('love-btn').style.display = 'none'
    
    
}
function getNoMoreMatchesHtml() {
    return `<h3>That's it! You don't have anymore matches :(</h3>`
}


function yes() {
    document.getElementById('like').style.display = 'flex'
    setTimeout(function() {
    document.getElementById('like').style.display = 'none';
    nextDog();
  }, 1500);
}

function no() {
    document.getElementById('nope').style.display = 'flex'
    setTimeout(function() {
    document.getElementById('nope').style.display = 'none';
    nextDog();
  }, 1500);
}


function getProfileHtml(){
    return `
                <img class='profile-pic' src='/images/profile-pic.jpeg'>
                <h1>Lola, 21</h2>
                <h5>I like to squeeze balls... Hope you got some 🤪 </h5>
                <div class='settings-bar'>
                    <div class='settings'>
                        <img id='settings-icon' src='/images/settings.png'>
                        <h6>Settings</h6>
                    </div>
                    
                    <div class='add-photo'>
                        <img id='photo-icon' src='/images/camera.png'>
                        <h6>Add photo</h6>
                    </div>
                    <div class='edit-profile'>
                        <img id='edit-icon' src='/images/pencil.png'>
                        <h6>Edit profile</h6>
                    </div>
                </div>
             `
}

function renderProfile(){
    document.getElementById('dog-data').innerHTML = ""
    document.getElementById('my-profile').innerHTML = getProfileHtml()
    document.getElementById('reaction-icons').style.display = "none"
    
}

render()









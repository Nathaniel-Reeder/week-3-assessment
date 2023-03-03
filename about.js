console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted!');
}



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.getElementById('duck-img')

image.addEventListener('mouseover', () => {
	alert("You're just as cool as this duck!")
})

let skillsDiv = document.getElementById("skills-div")
let interestsDiv = document.getElementById("interests-div")
let careerDiv = document.getElementById("career-goals-div")

skillsDiv.addEventListener('mouseover', darkenBackground)
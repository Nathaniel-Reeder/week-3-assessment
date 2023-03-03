const restaurantArr = ["JCW'S", "Bona Vita Italian Bistro", "Strap Tank Brewery", 'McDonalds :(']

const random = Math.floor(Math.random() * restaurantArr.length)

function getRandomRestaurant() {    
    alert(restaurantArr[random])
}

document.getElementById("random-restaurant-btn").addEventListener('click', getRandomRestaurant)
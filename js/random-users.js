const loadRandomData = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = user => {
    document.getElementById('gender').innerHTML = user.results[0].gender;
    document.getElementById('name').innerHTML = user.results[0].name.first;
    document.getElementById('location').innerHTML = user.results[0].location.city;
    document.getElementById('country').innerHTML = user.results[0].location.country;
    const img = document.getElementById('image');
    img.src  = user.results[0].picture.large;
}



loadRandomData();
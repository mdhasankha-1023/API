const loadData = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.meals))
}

const displayData = meals => {
    const foodsContainer = document.getElementById('foods-container');    
    foodsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal.idMeal)
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="button" class="btn btn-primary"   data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="idMeal(${meal.idMeal})">Details</button>
            </div> 
        </div>
        `
        foodsContainer.appendChild(newDiv)
    })
   
}
const btnSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchField2 = searchField.value;
    searchField.value = '';
    loadData(searchField2)
    
}

const idMeal = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.meals))

    const displayData = meal => {
        document.getElementById('title').innerText = `${meal[0].strMeal}`;
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
                <img class="img-fluid" src="${meal[0].strMealThumb}">
        `
    }

}

loadData('rice');


fetch('https://pokeapi.co/api/v2/pokemon/?limit=9').then(response => {
    return response.json()
}).then(data => {
    document.querySelector('#name').textContent += data;
})

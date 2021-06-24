
fetch('https://pokeapi.co/api/v2/pokemon/?limit=9')
    .then(response => {
        return response.json()
    }).then(data => {
    (data.results).forEach(entry => {
        document.querySelector('#name').innerHTML += (entry.name + '<br>');
        console.log(entry.name)
    })
})

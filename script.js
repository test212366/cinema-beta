const API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'
const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'

getMovies(API_URL)


async function getMovies(url) {
	const resp = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': API_KEY
		}
	})
	const respData = await resp.json()
	showMovies(respData)
}


function showMovies(data) {
	const moviesAll = document.querySelector('.movies')

	data.films.forEach(item => {
		const movieItem = document.createElement('div')
		movieItem.classList.add('movies__item')
		movieItem.innerHTML = `
			<img src=${item.posterUrlPreview} alt="" class="movie__img">
			<p class="title">${item.nameRu}</p>
		`

		moviesAll.appendChild(movieItem)
	});
}
import React from 'react';


const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	const posterPath = 'https://image.tmdb.org/t/p/w200';

	/*const getTrailer = (movie_id) => {
		let url = 'https://api.themoviedb.org/3/movie/'+ movie_id + '/videos?api_key=f1a137f5decc8030ad624b89b0ea7686&language=en-US'
		let response = fetch(url);
		let responseJson = response.json();
		let trailer = '';
		if (responseJson.results) {
			trailer = responseJson.results.key;
		}

		return 'https://www.youtube.com/watch?v=' + trailer;
	}
	*/	
	
	return (
		<>
			{props.movies.map((movie) => (
				<div className='movie-container'>
					<h2>{movie.original_title}</h2>
					<img src={posterPath + movie.poster_path} className='poster' alt= 'movie'></img>
					<div className='movie-info'>
							<p>{movie.overview}</p>
						<p>Release Date: {movie.release_date}</p>
						<p>Rating: {movie.vote_average}</p>
					</div>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
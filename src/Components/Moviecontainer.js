import React from 'react'
import { useSelector } from 'react-redux'
import MoivesList from './MoivesList';

const Moviecontainer = () => {
  const movie_data = useSelector(store => store.movies);
  const nowPLaying = movie_data?.nowPlayingMovie;
  const PopularMovie = movie_data?.PopularMovies;
  const TopRated = movie_data?.TopRated;
  const upComing = movie_data?.UpComing;

  return (
    <div className='w-screen px-12 bg-black '>
      <div className='-my-72 relative z-40'>
        <MoivesList title={"Now Playing"} moviesList={nowPLaying} />
        <MoivesList title={"Popular"} moviesList={PopularMovie} />
        <MoivesList title={"Top Rated"} moviesList={TopRated} />
        <MoivesList title={"UpComing"} moviesList={upComing } />
      </div>



    </div>
  )
}

export default Moviecontainer

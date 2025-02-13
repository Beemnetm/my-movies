import React from 'react';

const Moviecard = ({ movie }) => {
    const { title, vote_average, poster_path, release_date, original_language } = movie;

    return (
        <div className='movie-card'>
            <img
                src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
                alt={title} // ✅ Added alt for accessibility
            />
            <div className='mt-4'>
                <p className='text-white'>{title}</p>
                <div className='content flex items-center'>
                    <div className='rating flex items-center'>
                        <img src='star.svg' alt='star icon' />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p> {/* ✅ Fixed `toFixed` */}
                    </div>
                    <span className='mx-2'>•</span> {/* ✅ Styled separator */}
                    <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default Moviecard;

import React from 'react';
import Link from 'next/link';

import * as S from './styles';

interface Movie {
  id: number;
  title: string;
  release_date: Date;
  description: string;
  poster: {
    url: string;
    formats: any;
  };

  genres: {
    id: number;
    title: string;
    slug: string;
  }[];

  actors: { id: string; first_name: string; last_name: string }[];
}

interface CardProps {
  movie: Movie;
}

const Card = ({ movie }: CardProps) => {
  const { API_URL } = process.env;

  return (
    <S.Wrapper>
      <div className="poster">
        <img src={`${API_URL}${movie.poster.url}`} alt="" />
      </div>

      <div className="genres">
        {movie.genres.map((genre) => (
          <span>{genre.title}</span>
        ))}
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />
      </div>
      <div className="footer">
        <Link
          href="/movies/[genreSlug]/[id]"
          as={`/movies/${movie.genres[0].slug}/${movie.id}`}
        >
          <a>More about this movie</a>
        </Link>
      </div>
    </S.Wrapper>
  );
};

export default Card;

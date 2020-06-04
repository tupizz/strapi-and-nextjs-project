import React from 'react';
import { Box } from 'reflexbox';
import { GetServerSideProps } from 'next';
import { api } from '../../../services/api';

interface MoviePageProps {
  movie: Movie;
}

const MoviePage = ({ movie }: MoviePageProps) => {
  return (
    <Box maxWidth={1200} width="100%" mx="auto" px={30}>
      <Box as="h2" my={40}>
        {movie.title}
      </Box>
      <Box maxWidth={600}>{movie.description}</Box>
    </Box>
  );
};

interface Movie {
  id: number;
  title: string;
  description: string;
  release_date: Date;
  poster: {
    url: string;
    formats: any;
  };
  actors: { id: string; first_name: string; last_name: string }[];
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as any;

  const { data: movie } = await api.get<Movie>(`/movies/${id}`);

  return {
    props: { movie },
  };
};

export default MoviePage;

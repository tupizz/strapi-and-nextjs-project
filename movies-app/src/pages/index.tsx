import React from 'react';
import { GetServerSideProps } from 'next';
import { Box, Flex } from 'reflexbox';

import { api } from '../services/api';
import Card from '../components/Card';

interface HomeProps {
  movies: Movie[];
}

const IndexPage = ({ movies }: HomeProps) => {
  return (
    <Box maxWidth={1200} width="100%" mx="auto" px={30}>
      <Box mt={40} as="h2">
        Latest movies
      </Box>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        flexDirection={{ _: 'column', md: 'row' }}
        mb={100}
      >
        {movies.map((mov) => (
          <Box key={mov.id} width={{ _: '100%', md: '30%' }}>
            <Card movie={mov} />
          </Box>
        ))}
      </Flex>
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

  genres: {
    id: number;
    title: string;
    slug: string;
  }[];

  actors: { id: string; first_name: string; last_name: string }[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: movies } = await api.get<Movie[]>('/movies');

  return {
    props: { movies },
  };
};

export default IndexPage;

import React, { useEffect, useState } from 'react';
import { Flex, Box } from 'reflexbox';

import Navigation from '../Navigation';
import { HeaderWrapper } from './styles';
import { api } from '../../services/api';

interface Navigations {
  id: number;
  title: string;
  slug: string;
}

const Header = () => {
  const [navigations, setNavigations] = useState<Navigations[]>([]);

  useEffect(() => {
    api.get<Navigations[]>('/navigations').then((result) => {
      setNavigations([...result.data]);
    });
  }, []);

  return (
    <HeaderWrapper>
      <Box maxWidth={1200} width="100%" mx="auto" px={30}>
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <img src="/icons/cinema.svg" alt="logo" />
            <span>Next Movies</span>
          </div>
          <Navigation navigations={navigations} />
        </Flex>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;

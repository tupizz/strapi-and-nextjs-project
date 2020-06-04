import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationProps {
  navigations: Array<{ id: number; slug: string; title: string }>;
}

const Navigation = ({ navigations }: NavigationProps) => {
  const router = useRouter();

  return (
    <NavigationStyled>
      <ul>
        {navigations.map((item) => (
          <li key={item.id}>
            <Link href={item.slug}>
              <a className={router.pathname === item.slug ? 'active' : ''}>
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      margin-left: 10px;
    }
    a {
      text-decoration: none;
      color: #4c9ee3;
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: #ef6800;
      }
    }
  }
`;

export default Navigation;

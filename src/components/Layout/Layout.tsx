import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../Container/Container'
import './style.css'

interface ILayoutProps {
  children: React.ReactNode
}

interface NavItems {
  text: string
  link: string
}

const navItems: NavItems[] = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Contact',
    link: '/contact',
  },
]

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <header>
        <Container>
          <h1>Logo</h1>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.text}>
                  <NavLink to={item.link}>{item.text}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}

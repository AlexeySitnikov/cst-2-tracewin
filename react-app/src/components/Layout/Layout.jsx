import { NavLink, Outlet } from 'react-router-dom'
import './style.module.css'

export function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Pick up files</NavLink>
        <NavLink to="/read">Pre-read files</NavLink>
        <NavLink to="/analyze">Additional data</NavLink>
        <NavLink to="/make">Make output files</NavLink>
      </header>
      <Outlet />
    </>
  )
}

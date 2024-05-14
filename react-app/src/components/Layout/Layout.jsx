import { Link, Outlet } from 'react-router-dom'
import './style.module.css'

export function Layout() {
  return (
    <>
      <header>
        <Link to="/">Pick up files</Link>
        <Link to="/read">Pre-read files</Link>
        <Link to="/analyze">Additional data</Link>
        <Link to="/make">Make output files</Link>
      </header>
      <Outlet />
    </>
  )
}

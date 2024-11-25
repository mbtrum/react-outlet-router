import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link> <br />
      <Link to="/contact">Contact</Link> <br />
    </>
  )
}
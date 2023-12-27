export default function Header() {
  return (
    <nav className="header">
      <div className="logo-container">
        <img
        className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
}


const Title = ({title})=> {
  return (
    <h1 className="">{title}</h1>
  )
}

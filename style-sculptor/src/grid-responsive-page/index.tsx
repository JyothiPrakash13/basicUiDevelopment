import "./gridResponsivePage.scss";

function GridResponsivePage() {
  return (
    <div className="grid-main-container">
      <header>
        <div>Logo</div>
        <input type="checkbox" id="hamburger-menu" className="hamburger-menu" />
        <label htmlFor="hamburger-menu">&#9776; Menu</label>
      </header>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <main>Main content goes here.</main>

      <footer>Footer content goes here.</footer>
    </div>
  );
}

export default GridResponsivePage;

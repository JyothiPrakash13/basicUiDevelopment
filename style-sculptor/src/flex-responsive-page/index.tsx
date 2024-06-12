import "./flexResponsivePage.scss";

function FlexResponsivePage() {
  return (
    <div className="flex-main-container">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul>
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
      <div className="main-wrapper">
        <div className="main">
          <article>Main Content 1</article>
          <article>Main Content 2</article>
          <article>Main Content 3</article>
          <aside className="sidebar">Sidebar</aside>
        </div>
      </div>

      <footer>Website Footer</footer>
    </div>
  );
}

export default FlexResponsivePage;

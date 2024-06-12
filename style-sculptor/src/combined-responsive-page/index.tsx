import "./combinedResponsivePage.scss";

function CombinedResponsivePage() {
  return (
    <div className="combined-main-container">
      <header>
        <div>Logo</div>
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
      </header>

      <main>
        <div className="main-content">
          <article className="article">Main article content goes here.</article>
          <aside className="sidebar">Sidebar content goes here.</aside>
        </div>
      </main>

      <footer>Footer content goes here.</footer>
    </div>
  );
}

export default CombinedResponsivePage;

function HomePage() {
  return (
    <div className="Home">
      <header className="App-header">
        <div className="box-model">
          <p>some structure</p>
        </div>
        <div className="child-selector">
          <p>
            This paragraph will be blue because it's a direct child of
            .container div.
          </p>
          <div>
            <p>
              This paragraph will not be blue because it's not a direct child.
            </p>
          </div>
        </div>
        <div className="adjacent-sibling-selector">
          <h2>Heading</h2>
          <p>The first paragraph after the heading will have no top margin.</p>
          <p>This paragraph will not be affected.</p>
        </div>

        <div className="general-sibling-selector">
          <h2>Heading</h2>
          <p>This paragraph will be italic because it's a sibling of h2.</p>
          <div>Another element</div>
          <p>
            This paragraph will also be italic because it's a sibling of h2.
          </p>
        </div>

        <div className="attribute-selector">
          <input
            type="text"
            placeholder="This input will have a light grey background"
          />
          <input
            type="password"
            placeholder="This input will not be affected"
          />
        </div>

        <div className="pseudo-classes">
          <a href="#">This link will turn red when hovered over.</a>
        </div>

        <div className="pseudo-elements">
          <p>The first line of this paragraph will be bold.</p>
        </div>

        <div className="box-sizing">
          <div className="box">
            This box will maintain its width including padding and border.
          </div>
        </div>

        <div className="grid-flex-container">
          <div className="sidebar">Sidebar</div>
          <div className="main-content">Main Content</div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;

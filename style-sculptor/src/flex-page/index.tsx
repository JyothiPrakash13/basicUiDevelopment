import "./flex.scss";

function FlexPage() {
  return (
    <div className="flex-container">
      <div className="flex-item">
        <div className="flex-item-child">Flex Item 1</div>
      </div>
      <div className="flex-item">
        <div className="flex-item-child">Flex Item 2</div>
      </div>
      <div className="flex-item">
        <div className="flex-item-child">Flex Item 3</div>
      </div>
    </div>
  );
}

export default FlexPage;

// TODO
const { useState } = React;

const GroceryListItem = (props) => {
  const [isBold, setIsBold] = useState(false);

  const style = {
    fontWeight: isBold ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseEnter={() => setIsBold(true)} onMouseLeave={() => setIsBold(false)}>
      {props.tobuy}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.tobuys.map((tobuy) => (
      <GroceryListItem tobuy={tobuy} />
    ))}
  </ul>
);

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList tobuys={['kale','spinach','broccoli', 'bananas']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"))
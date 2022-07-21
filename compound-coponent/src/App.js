import Card from "./Card";
import content from "./content";

const CardExample = () => {
  return (
    <div>
      <Card>
        <Card.CardContent>
          {content.map((item, index) => {
            return <Card.CardItem key={index} item={item} />;
          })}
        </Card.CardContent>

        <Card.Expand>
          <button>show more</button>
        </Card.Expand>

        <Card.Collapse>
          <button>show less</button>
        </Card.Collapse>
      </Card>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CardExample/>
    </div>
  );
}

export default App;

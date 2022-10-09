import "./App.css";
import Card from "./component/card/Card";
import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import { data } from "../src/helper/data";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <div className="main">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

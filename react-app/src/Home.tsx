import Img1 from "./assets/img/999-1920x1080.jpg";
import Event from "./Event";
import { Button } from "./Button";
function Home() {
  const name = "Mina😊";
  const color = {
    color: "red",
    fontSize: "50px",
  };
  return (
    <>
      <div className="container">
        <h1>App Component</h1>
        <div>
          <img
            src={Img1}
            alt="Image"
            style={{ width: "400px", borderRadius: "20px" }}
          />
          <h1>
            Hello <span style={color}>{name}</span> from React!
          </h1>
          <p>This is react</p>
        </div>
        <div>
          <Event />
          <Button type="button" name="Login" />
          <Button type="submit" name="Register" />
          <button className="btn btn-primary">Bootstrap Button</button>
          {/* <ABC/>
          <NewEffect/>
          <NewEffect3/> */}
        </div>
      </div>
    </>
  );
}

export default Home;
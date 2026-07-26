import Img1 from './assets/img/999-1920x1080.jpg'
import { Button } from './Button';
import Event from './Event';
function App() {
  const name = "Mina😊";
  const color = {
    color: 'red',
    fontSize : '50px'
  }
  return (
    <>
        <div>
          <img src={Img1} alt="Image" style={{width: '400px', borderRadius: '20px'}} />
          <h1>Hello <span style={color}>{name}</span> from React!</h1>
          <p>This is react</p>
          
        </div>
        <div>
          <Event/>
          <Button type="button" name="Login"/>
          <Button type="submit" name="Register"/>
          <button className='btn btn-primary'>Bootstrap Button</button>
        </div>
    </>
  );
}

export default App;

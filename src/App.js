import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/firstscreen';
import Nav from './screens/nav';
import SecondScreen from './screens/secondScreen';
import ThirdScreen from './screens/thirdScreen';
import FourthScreen from './screens/fourthScree';
function App() {
  return (
    <div className="App">

      <div className="firstPage" >
   <Nav />
   <SecondScreen />
   <FirstScreen /></div>
   <ThirdScreen />
   <FourthScreen />
    </div>
  );
}

export default App;

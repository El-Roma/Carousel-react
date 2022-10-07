import './App.css';
import Slider from './components/slider/Slider'
import SliderUpDown from "./components/slider/sliderUpDown";


function App() {
    return (
        <div className={"App"}>
            <Slider id={1}/>
            <Slider id={2}/>
            <Slider id={3}/>
            <Slider id={4}/>
            <Slider id={5}/>
        </div>
    );
}

export default App;
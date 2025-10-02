import './App.css'
import ReactDOM from 'react-dom/client';
import Contact from './pages/Contact';

export default function App(){
  return(
      <div className="ContactGrid">
        <Contact
          img="https://static.vecteezy.com/system/resources/previews/039/630/632/non_2x/ai-generated-saturn-planet-isolated-on-transparent-background-free-png.png"
          name ="Saturn Sir"
          phone ="6295579272"
          mail="saturn@gmail.com"
        />
        <Contact
        img="https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg"
        name="Hathi Bhai"
        phone="9277427983"
        mail="hathimeresaathi@gmail.com"
        />
        <Contact
        img="https://cdn.pixabay.com/photo/2020/03/10/04/48/animal-4917802_1280.jpg"
        name="Zebra Bhai"
        phone="8979239663"
        mail="sadakala@gmail.com"
        />
        <Contact
        img="./src/assets/globe.png"
        name="Earth Bhai"
        phone=""
        mail=""
        />
        <Contact
        img="./src/assets/raju.png"
        name="Raju da pocket porota"
        phone=""
        mail=""
        />
        <Contact
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhy5Fmt6dTk3bNRNiYCSVcmoouLp4YA6tvQ&s"
        name="Kaju Da"
        phone=""
        mail=""
        />
      </div>
  )
}



import './App.css'
import CardList from './componets/Cards'
import { FourCards } from './componets/FourCards';
import Profession from './componets/Professions';
import { ReviewCards } from './componets/ReviewCards';
import { ThirdCol } from './componets/ThirdCol';



const App: React.FC = () => {
  return (
    <>
     
      <CardList />
      <FourCards />
      <ThirdCol />
      <Profession />
      <ReviewCards />
    
    </>
  );
};

export default App;
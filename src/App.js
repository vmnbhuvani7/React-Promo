import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/common/Header';
import './css/header.css'
import './css/bodyPart.css'
import BodyPart from './component/BodyPart';

const App = () => {
  return (
    <div>
      <Header />
      <BodyPart />
    </div>
  );
}

export default App;

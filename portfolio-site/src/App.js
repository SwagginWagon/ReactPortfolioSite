import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

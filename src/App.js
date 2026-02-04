import Header from './components/Header';
import Student from './components/Student';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ 
      background: 'linear-gradient(45deg, #ffffff, #e1f5fe, #b3e5fc, #ffffff)',
      backgroundSize: '400% 400%',
      animation: 'bgMove 15s ease infinite',
      minHeight: '100vh',        
      fontFamily: 'Arial, sans-serif', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0,
      padding: 0
    }}>

      <style>
        {`
            @keyframes bgMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body { margin: 0; padding: 0; }
        `}
      </style>

      <Header />
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
        <Student />
      </div>

      <Footer />

    </div>
  );
}

export default App;
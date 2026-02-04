import Header from './components/Header';       
import Student from './components/Student';     
import { Footer } from './components/Footer';   // สังเกตว่า Footer มีปีกกา { } เพราะเรา export const

function App() {
  return (
    <div style={{ 
      // --- ส่วนพื้นหลังขยับได้ (โทนฟ้า Blue Sky) ---
      background: 'linear-gradient(45deg, #ffffff, #e1f5fe, #b3e5fc, #ffffff)',
      backgroundSize: '400% 400%',
      animation: 'bgMove 15s ease infinite',

      // --- การจัดวาง (Layout) ---
      minHeight: '100vh',         
      fontFamily: 'Arial, sans-serif', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0,
      padding: 0
    }}>

      {/* --- ฝังคำสั่ง Animation --- */}
      <style>
        {`
            @keyframes bgMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body { margin: 0; padding: 0; } /* แก้ขอบขาวรอบนอก */
        `}
      </style>

      {/* --- เรียกใช้ส่วนประกอบต่างๆ --- */}
      <Header />
      
      {/* ส่วนเนื้อหา (Student) */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
        <Student />
      </div>

      <Footer />

    </div>
  );
}

export default App;
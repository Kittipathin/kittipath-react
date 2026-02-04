// ไฟล์: App.js
import Header from './components/Header';
import Student from './components/Student';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ 
      // --- ส่วนพื้นหลังขยับได้ (Animated Background) ---
      // 1. กำหนดสีไล่เฉด (Gradient)
      background: 'linear-gradient(45deg, #fdfbfb, #ebedee, #f3e7e9, #e3eeff)',
      // 2. ขยายขนาดพื้นหลังให้ใหญ่กว่าจอ (เพื่อให้มีพื้นที่เลื่อน)
      backgroundSize: '400% 400%',
      // 3. สั่งให้ขยับด้วย Keyframes ชื่อ 'bgMove' นาน 15 วินาที วนไปเรื่อยๆ
      animation: 'bgMove 15s ease infinite',

      // --- การจัดวาง (Layout) ---
      minHeight: '100vh',         // สำคัญมาก! ต้องสูงเต็มจอ
      fontFamily: 'Arial, sans-serif', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'        
    }}>

      {/* --- ฝังคำสั่ง Animation ไว้ในนี้ --- */}
      <style>
        {`
            @keyframes bgMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `}
      </style>

      {/* --- เรียกใช้ส่วนประกอบต่างๆ --- */}
      <Header />
      
      {/* ส่วนเนื้อหา (Student) */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Student />
      </div>

      <Footer />

    </div>
  );
}

export default App;
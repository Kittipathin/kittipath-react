// App.js
import Header from './components/Header';
import Student from './components/Student';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#fdfdfd', // สีพื้นหลังขาวหม่น ไม่แสบตา
      minHeight: '100vh',         // สูงเต็มจอเสมอ
      fontFamily: 'Arial, sans-serif', // ฟอนต์มาตรฐาน อ่านง่าย
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'        // จัดทุกอย่างให้อยู่กึ่งกลางแนวตั้ง
    }}>
      
      {/* เรียกใช้ Component ต่างๆ */}
      <Header />
      <Student />
      <Footer />

    </div>
  );
}

export default App;
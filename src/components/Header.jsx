// Header.jsx
function Header() {
    return(
        <div style={{
            backgroundColor: '#2c3e50', // สีน้ำเงินเข้มอมเทา (ดูสุภาพ)
            color: 'white',             // ตัวหนังสือสีขาว
            width: '100%',              // ความกว้างเต็มจอ
            padding: '30px 0',          // เพิ่มพื้นที่บนล่าง ไม่ให้อึดอัด
            marginBottom: '30px',       // เว้นระยะห่างจากรูปข้างล่าง
            textAlign: 'center',        // จัดข้อความให้อยู่ตรงกลาง
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)' // เงาจางๆ นิดเดียวพอให้ดูลอย
        }}>
            {/* ชื่อหัวข้อใหญ่ */}
            <h1 style={{ 
                fontSize: '2.5rem',     // ขนาดตัวอักษรใหญ่
                margin: '0',
                fontWeight: 'bold'
            }}>
                Kittipath-React
            </h1>
            
            {/* คำอธิบายเล็กๆ */}
            <p style={{ 
                fontSize: '1rem', 
                marginTop: '10px', 
                color: '#bdc3c7'        // สีเทาอ่อน ให้ดูจางกว่าหัวข้อนิดนึง
            }}>
                Welcome to my profile
            </p>
        </div>
    )
}
export default Header;
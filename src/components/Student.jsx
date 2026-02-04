// Student.jsx
import smilee from './smilee.jpg'; // (อย่าลืมเช็คไฟล์รูปนะครับ)

function Student() {
    return(
        <div style={{
            textAlign: 'center',       // จัดข้อความและรูปให้อยู่กลาง
            maxWidth: '600px',         // ไม่ให้กว้างเกินไปเวลาเปิดในคอม
            padding: '20px',
            border: '1px solid #ddd',  // เส้นขอบสีเทาบางๆ (ดูเรียบร้อย)
            borderRadius: '10px',      // มุมโค้งมนนิดหน่อย
            backgroundColor: 'white'   // พื้นหลังกล่องเป็นสีขาว
        }}>
            {/* รูปภาพ */}
            <img src={smilee} alt='My Profile' style={{
                width: '200px',        // ขนาดกำลังดี
                height: '200px',
                objectFit: 'cover',    // กันภาพเบี้ยว
                borderRadius: '15px',  // มุมโค้งมน (ถ้าอยากได้วงกลมแก้เป็น 50%)
                marginBottom: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)' // เงารูปภาพ
            }} />
            
            {/* ข้อมูล */}
            <h2 style={{ color: '#333', marginBottom: '10px' }}>
                Name: Kittipath Inarree
            </h2>
            
            <hr style={{ width: '80%', margin: '15px auto', border: '0.5px solid #eee' }} />
            
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                ID: 6802041510279
            </p>
        </div>
    )
}
export default Student;
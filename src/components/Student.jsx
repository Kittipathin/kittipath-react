// ไฟล์: Student.jsx
import smilee from './smilee.jpg'; // (เช็คชื่อไฟล์รูปให้ตรงนะครับ)

function Student() {
    return(
        <div style={{
            textAlign: 'center',       
            maxWidth: '600px',         
            padding: '20px',
            border: '1px solid #ddd',  
            borderRadius: '10px',      
            backgroundColor: 'white',
            margin: '20px auto' // จัดกึ่งกลางหน้าจอ (แนวนอน)
        }}>
            {/* รูปภาพ */}
            <img src={smilee} alt='My Profile' style={{
                width: '200px',        
                height: '200px',
                objectFit: 'cover',    
                borderRadius: '15px',  
                marginBottom: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }} />
            
            {/* ส่วนชื่อและชื่อเล่น */}
            <h2 style={{ color: '#333', marginBottom: '5px' }}>
                Name: Kittipath Inarree
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '0', fontWeight: 'bold' }}>
                Nickname: Force
            </p>
            
            {/* เส้นคั่น */}
            <hr style={{ width: '80%', margin: '20px auto', border: '0.5px solid #eee' }} />
            
            {/* ส่วนข้อมูลติดต่อ */}
            <div style={{ textAlign: 'left', display: 'inline-block' }}> 
                {/* ใช้ div ครอบเพื่อให้จัดชิดซ้ายแต่ยังอยู่กลางกล่อง */}
                <p style={{ fontSize: '1.1rem', color: '#555', margin: '10px 0' }}>
                    <strong>ID:</strong> 6802041510279
                </p>
                <p style={{ fontSize: '1.1rem', color: '#555', margin: '10px 0' }}>
                    <strong>Tel:</strong> 099-223-1954  {/* <-- แก้เบอร์ตรงนี้ได้เลยครับ */}
                </p>
            </div>
        </div>
    )
}
export default Student;
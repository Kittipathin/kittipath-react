// ไฟล์: Student.jsx
import smilee from './smilee.jpg';

function Student() {
    return(
        <div style={{
            textAlign: 'center',       
            maxWidth: '600px',         
            padding: '20px',
            border: '1px solid #ddd',  
            borderRadius: '10px',      
            backgroundColor: 'white',
            margin: '20px auto'
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
            
            {/* ส่วนชื่อและชื่อเล่น (ปรับไซส์ให้ใกล้กัน) */}
            <div style={{ marginBottom: '15px' }}>
                <h2 style={{ 
                    fontSize: '1.5rem',   // ลดขนาดลง (เดิมประมาณ 2rem)
                    color: '#333', 
                    margin: '0 0 5px 0'   // ลดระยะห่างด้านล่าง
                }}>
                    Name: Kittipath Inarree
                </h2>
                <p style={{ 
                    fontSize: '1.3rem',   // เพิ่มขนาดขึ้น (ให้ใกล้กับชื่อ)
                    color: '#555', 
                    margin: '0',
                    fontWeight: '500'     // ตัวหนาปานกลาง
                }}>
                    Nickname: Force
                </p>
            </div>
            
            {/* เส้นคั่น */}
            <hr style={{ width: '80%', margin: '20px auto', border: '0.5px solid #eee' }} />
            
            {/* ส่วนข้อมูลติดต่อ */}
            <div style={{ textAlign: 'left', display: 'inline-block' }}> 
                <p style={{ fontSize: '1.1rem', color: '#555', margin: '8px 0' }}>
                    <strong>ID:</strong> 6802041510279
                </p>
                <p style={{ fontSize: '1.1rem', color: '#555', margin: '8px 0' }}>
                    <strong>Tel:</strong> 099-223-1984
                </p>
            </div>
        </div>
    )
}
export default Student;
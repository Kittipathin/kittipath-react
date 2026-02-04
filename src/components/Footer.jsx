// Footer.jsx
export const Footer = () => {
    return(
        <div style={{
            marginTop: 'auto',          // ดันลงล่างสุด
            width: '100%',
            backgroundColor: '#34495e', // สีโทนเดียวกับ Header แต่อ่อนลงนิดนึง
            color: 'white',
            textAlign: 'center',
            padding: '20px 0',
            fontSize: '1rem',
            // ถ้าเนื้อหาน้อย Footer จะลอยขึ้นมา ใช้ margin-top ช่วยได้ระดับนึงใน App.js
        }}>
            &copy; Department of Computer Education, KMUTNB
        </div>
    );
};
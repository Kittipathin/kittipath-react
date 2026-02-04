import smilee from './smilee.jpg';

function Student() {
    return(
        <div style={{
            textAlign: 'center',       
            maxWidth: '600px',         
            margin: '20px auto',
            padding: '20px',
            borderRadius: '15px',      
            background: 'linear-gradient(270deg, #ffffff, #e3f2fd, #fce4ec, #ffffff)',
            backgroundSize: '800% 800%',
            animation: 'gradientAnimation 10s ease infinite',
            border: '1px solid rgba(255,255,255,0.8)', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
        }}>
            
            <style>
                {`
                    @keyframes gradientAnimation {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>

            <img src={smilee} alt='My Profile' style={{
                width: '200px',        
                height: '200px',
                objectFit: 'cover',    
                borderRadius: '15px',  
                marginBottom: '20px',
                border: '4px solid white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }} />
            
            <div style={{ marginBottom: '15px' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#333', margin: '0 0 5px 0' }}>
                    Name: Kittipath Inarree
                </h2>
                <p style={{ fontSize: '1.3rem', color: '#555', margin: '0', fontWeight: '500' }}>
                    Nickname: Force
                </p>
            </div>
            
            <hr style={{ width: '80%', margin: '20px auto', border: '0.5px solid rgba(0,0,0,0.1)' }} />
            
            <div style={{ textAlign: 'left', display: 'inline-block' }}> 
                <p style={{ fontSize: '1.1rem', color: '#555', margin: '8px 0' }}>
                    <strong>ID:</strong> 6802041510279
                </p>
                <p style={{ fontSize: '1.1rem', color: '#555', margin: '8px 0' }}>
                    <strong>Tel:</strong> 099-223-2005
                </p>
            </div>
        </div>
    )
}
export default Student;
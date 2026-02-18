function Education() {
    return (
        <div style={{
            maxWidth: '600px', 
            margin: '20px auto',
            padding: '30px', 
            borderRadius: '15px', 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: '1px solid #f0f0f0'
        }}>
            <h2 style={{ color: '#2c3e50', marginTop: 0, textAlign: 'center', fontSize: '2rem' }}>🎓 Education</h2>
            <hr style={{ border: '0.5px solid #e0e0e0', margin: '20px 0' }} />
            
            <div style={{ 
                borderLeft: '5px solid #3498db', 
                paddingLeft: '20px',
                textAlign: 'left', 
                lineHeight: '1.8', 
                color: '#444', 
                fontSize: '1.15rem',
                backgroundColor: '#f9fcff', 
                padding: '15px 15px 15px 20px',
                borderRadius: '0 10px 10px 0'
            }}>
                <p style={{ margin: '10px 0' }}><strong style={{ color: '#2c3e50' }}>🏛️ University:</strong> <br/>King Mongkut's University of Technology North Bangkok (KMUTNB)</p>
                <p style={{ margin: '10px 0' }}><strong style={{ color: '#2c3e50' }}>🏫 Faculty:</strong> <br/>Technical Education</p>
                <p style={{ margin: '10px 0' }}><strong style={{ color: '#2c3e50' }}>💻 Major:</strong> <br/>Computer Education</p>
            </div>
        </div>
    );
}
export default Education;
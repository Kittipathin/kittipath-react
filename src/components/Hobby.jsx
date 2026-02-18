function Hobby() {
    const cardStyle = {
        backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '12px',
        marginBottom: '15px', borderLeft: '4px solid', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'left'
    };

    return (
        <div style={{
            maxWidth: '600px', margin: '20px auto', padding: '30px', 
            borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}>
            <h2 style={{ color: '#2c3e50', marginTop: 0, textAlign: 'center', fontSize: '2rem' }}>✨ Hobbies & Activities</h2>
            <hr style={{ border: '0.5px solid #e0e0e0', margin: '20px 0 25px 0' }} />
            
            <div style={{...cardStyle, borderLeftColor: '#2ecc71'}}>
                <h3 style={{ margin: '0 0 8px 0', color: '#27ae60', fontSize: '1.2rem' }}>⚽ Sports</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.5' }}>Playing Football (Midfielder / Winger)</p>
            </div>

            <div style={{...cardStyle, borderLeftColor: '#3498db'}}>
                <h3 style={{ margin: '0 0 8px 0', color: '#2980b9', fontSize: '1.2rem' }}>💻 Tech</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.5' }}>Coding web applications and learning new tech.</p>
            </div>

            <div style={{...cardStyle, borderLeftColor: '#f1c40f'}}>
                <h3 style={{ margin: '0 0 8px 0', color: '#f39c12', fontSize: '1.2rem' }}>🃏 Collecting</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.5' }}>Trading cards and EDC folding knives.</p>
            </div>
        </div>
    );
}
export default Hobby;
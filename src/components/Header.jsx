function Header() {
    return(
        <div style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            width: '100%',
            padding: '30px 0',
            marginBottom: '30px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <h1 style={{ 
                fontSize: '2.5rem',
                margin: '0',
                fontWeight: 'bold'
            }}>
                Kittipath-React
            </h1>
            
            <p style={{ 
                fontSize: '1rem', 
                marginTop: '10px', 
                color: '#bdc3c7'
            }}>
                Welcome to my profile
            </p>
        </div>
    )
}
export default Header;
import { Link } from 'react-router-dom';

function Header() {
    const linkStyle = {
        color: 'white',
        textDecoration: 'none', 
        margin: '0 15px',
        fontSize: '1.1rem',
        fontWeight: 'bold'
    };

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
            <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0', fontWeight: 'bold' }}>
                Kittipath-React
            </h1>
            
            <div style={{ marginTop: '15px' }}>
                <Link to="/" style={linkStyle}>Info</Link> | 
                <Link to="/education" style={linkStyle}>Education</Link> | 
                <Link to="/hobby" style={linkStyle}>Hobby</Link> |
                <Link to="/form" style={linkStyle}>Form</Link>
            </div>
        </div>
    )
}
export default Header;
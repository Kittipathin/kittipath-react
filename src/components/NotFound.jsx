function NotFound() {
    return (
        <div style={{
            textAlign: 'center', 
            padding: '50px', 
            color: '#e74c3c',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
            <h1 style={{ fontSize: '5rem', margin: '0' }}>404</h1>
            <h2 style={{ margin: '10px 0' }}>Page Not Found</h2>
            <p style={{ color: '#555', fontSize: '1.2rem' }}>The page you are looking for does not exist.</p>
        </div>
    );
}
export default NotFound;
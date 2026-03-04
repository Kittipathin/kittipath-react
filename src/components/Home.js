const Home = (props) => {
    return(
        <div style={{ textAlign: 'center', margin: '40px auto', maxWidth: '500px', width: '90%' }}>
            {
                props.user ? ( // user is logged in.
                    <div style={{
                        border: '2px solid #2ecc71',
                        borderRadius: '15px',
                        padding: '30px',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ margin: '0 0 20px 0', color: '#2c3e50' }}>🏠 Home Page</h2>
                        <div>
                            <img 
                                src={props.user.photoURL} 
                                alt='user' 
                                style={{ width: '100px', borderRadius: '50%', border: '4px solid #3498db', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} 
                            />
                        </div>
                        <h4 style={{ color: '#7f8c8d', margin: '20px 0 0 0', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                            {props.user.displayName}
                        </h4>
                    </div>
                ) : ( // user is not logged in.
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        padding: '30px',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{ color: '#e74c3c', margin: 0, lineHeight: '1.5' }}>
                            🔒 You are not logged in.<br/>Please login first!!!
                        </h3>
                    </div>
                )
            }
        </div>
    )
}

export default Home;
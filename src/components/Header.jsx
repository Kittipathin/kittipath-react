import { Link } from 'react-router-dom';

const Header = (props) => {
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
            padding: '20px 0',
            marginBottom: '30px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}>
            <h1 style={{ fontSize: '2.5rem', margin: '0 0 5px 0', fontWeight: 'bold' }}>
                Kittipath-React
            </h1>
            <p style={{ margin: '0 0 20px 0', color: '#bdc3c7', fontSize: '1.1rem' }}>
                Firebase Authen with Google Account
            </p>

            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '10px 30px',
                margin: '0 auto 20px auto',
                maxWidth: '700px',
                borderRadius: '8px'
            }}>
                {props.user ? ( 
                    <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                            <b>Welcome: </b> {props.user.displayName}
                            <span> : </span> 
                            <img src={props.user.photoURL} width={35} style={{ borderRadius: '50%', border: '2px solid white' }} alt='user' />
                        </div>
                        <div>
                            <button onClick={props.logout} style={{
                                padding: '8px 20px', backgroundColor: '#e74c3c', color: 'white',
                                border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
                            }}>Logout</button>
                        </div>
                    </>
                ) : ( 
                    <>
                        <div style={{ fontSize: '1.1rem' }}>
                            You are not logged in.
                        </div>
                        <div>
                            <button onClick={props.login} style={{
                                padding: '8px 20px', backgroundColor: '#2ecc71', color: 'white',
                                border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
                            }}>Login</button>
                        </div>
                    </>
                )}
            </div>

            {props.user && (
                <div style={{ marginTop: '10px' }}>
                    <Link to="/" style={linkStyle}>Info</Link> | 
                    <Link to="/education" style={linkStyle}>Education</Link> | 
                    <Link to="/hobby" style={linkStyle}>Hobby</Link> |
                    <Link to="/form" style={linkStyle}>Form</Link>
                </div>
            )}
        </div>
    );
}

export default Header;
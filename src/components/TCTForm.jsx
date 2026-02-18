import { useState } from "react";

function TCTForm() {
    const [name, setName] = useState("Marvel");
    const [gender, setGender] = useState('');
    const [region, setRegion] = useState('');
    const [comment, setComment] = useState(''); 
    const [accept, setAccept] = useState(false); 

    function formSubmit() {
        if (!accept) {
            window.alert("Please Click Accept");
            return;
        } else {
            window.alert("Name: " + name + '\n' 
                + "Gender: " + gender + '\n'
                + "Region: " + region + '\n'
                + "Comment: " + comment);
        }
    }

    const inputStyle = {
        padding: '10px', fontSize: '1rem', borderRadius: '8px',
        border: '1px solid #ccd1d9', width: '100%', boxSizing: 'border-box'
    };

    return(
        <div style={{
            maxWidth: '600px', margin: '20px auto', padding: '40px', 
            borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)', color: '#333'
        }}>
            <h1 style={{ color: '#2c3e50', textAlign: 'center', marginTop: '0', fontSize: '2.2rem' }}>📝 TCT Form</h1>
            <hr style={{ border: '0.5px solid #ecf0f1', margin: '20px 0' }} />
            
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>Name: </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>Gender: </label>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <label><input type="radio" name='rdGender' value="M" onChange={e => setGender(e.target.value)} /> Male</label>
                    <label><input type="radio" name='rdGender' value="F" onChange={e => setGender(e.target.value)} /> Female</label>
                    <label><input type="radio" name='rdGender' value="N" onChange={e => setGender(e.target.value)} /> N/A</label>
                </div>
                <div style={{ marginTop: '10px', color: '#3498db', fontSize: '0.9rem' }}>
                    <em>Gender: {gender || '-'}</em>
                </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>What region are you in?</label>
                <select onChange={e => setRegion(e.target.value)} style={{...inputStyle, cursor: 'pointer'}}>
                    <option value="">-- select your region --</option>
                    <option value="N">North</option>
                    <option value="NE">North East</option>
                    <option value="C">Central</option>
                    <option value="S">South</option>
                    <option value="W">West</option>
                </select>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>Leave your comment: </label>
                <textarea rows="4" placeholder="Enter your comments here..." onChange={e => setComment(e.target.value)} style={inputStyle}></textarea>
            </div>
            
            <div style={{ marginBottom: '25px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                <label style={{ fontWeight: 'bold', color: '#34495e', cursor: 'pointer' }}>
                    <input type="checkbox" checked={accept} onChange={e => setAccept(e.target.checked)} style={{ marginRight: '10px', transform: 'scale(1.2)' }} /> 
                    Do you accept this? (Yes/No)
                </label>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <input type="submit" onClick={formSubmit} value="Send" style={{ 
                    padding: '12px 40px', backgroundColor: '#3498db', color: 'white', 
                    border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold'
                }} />
            </div>
        </div>
    )
}

export default TCTForm;
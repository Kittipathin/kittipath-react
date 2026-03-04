import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header'; 
import Home from './components/Home';  // 👈 เพิ่มการนำเข้าหน้า Home ตรงนี้
import Student from './components/Student'; 
import Education from './components/Education'; 
import Hobby from './components/Hobby';         
import TCTForm from './components/TCTForm';
import NotFound from './components/NotFound';   
import { Footer } from './components/Footer';

import auth from "./firebase_config"; 
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';

const App = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(()=> {
        auth.onAuthStateChanged(user => {
            if(user) { 
                setUserInfo(user);
            }
            else {  
                setUserInfo(null);
            }
        })
    }, []); 

    const login = () => {
        const provider = new GoogleAuthProvider();
        auth.useDeviceLanguage();
        signInWithPopup(auth, provider)
        .catch((error) => {
            window.alert(error);
        });   
    }

    const logout = () => {
        signOut(auth).catch((error) => {
            alert(error);
        });   
    }

    return(
        <BrowserRouter> 
            <div style={{ 
                background: 'linear-gradient(45deg, #ffffff, #e1f5fe, #b3e5fc, #ffffff)',
                backgroundSize: '400% 400%',
                animation: 'bgMove 15s ease infinite',
                minHeight: '100vh',        
                fontFamily: 'Arial, sans-serif', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                margin: 0, 
                padding: 0
            }}>
                <style>
                {`
                    @keyframes bgMove {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    body { margin: 0; padding: 0; }
                `}
                </style>

                <Header user={userInfo} login={login} logout={logout}/>
                
                {/* 👈 เรียกใช้หน้า Home ตรงนี้ ตามที่อาจารย์สั่ง */}
                <Home user={userInfo} />
                
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                    {
                        // ถ้าล็อกอินแล้ว ถึงจะโชว์เนื้อหาหน้าเว็บอื่นๆ (เมนูนำทางต่างๆ)
                        userInfo && (
                            <Routes>
                                <Route path="/" element={<Student />} />          
                                <Route path="/education" element={<Education />} /> 
                                <Route path="/hobby" element={<Hobby />} />         
                                <Route path="/form" element={<TCTForm />} />  
                                <Route path="*" element={<NotFound />} />           
                            </Routes>
                        )
                    }
                </div>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
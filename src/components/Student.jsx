import smilee from './smilee.jpg'; 

function Student() {
    return(
        <div className="student-card">
            <div className="image-wrapper">
                <img src={smilee} width='333' alt='My smile' className="profile-img"  />
            </div>
            <div className="student-details">
                <h3>Name: Kittipath Inarree</h3>
                <hr />
                <p>ID: 6802041510279</p>
            </div>
        </div>
    )
}
export default Student;
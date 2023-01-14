import NaviBar from '../pages/NaviBar'
import Forum from '../pages/Forum'
import Button from 'react-bootstrap/Button';

import '../App.css'

const Home = () => {
        
        const style = {
                color: "blue"
        }
        
        return (
            
            <div>
            <NaviBar />
            <h1>Welcome back, bear</h1>
            <ul>
                <li>
                    <p>Forum</p>
                    <iframe title="forumpreview" class="forumpreview">
                        <Forum/>
                    </iframe>
                </li>
                <li>
                    My Notifications
                </li>
                <li>Booking for Consultations</li>
            </ul>           
        </div>
        
    )
}

export default Home;

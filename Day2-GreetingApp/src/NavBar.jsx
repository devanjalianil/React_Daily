import{useState, useEffect} from 'react';
function NavBar(){
    const [time, setTime]= useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const timerID = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return ()=> clearInterval(timerID);
    },[]);
    return (<nav className="navbar">
        <h3>Welcome to my Greeting App</h3>
        <p>Current Time:{time}</p>
        </nav>);
}

export default NavBar;
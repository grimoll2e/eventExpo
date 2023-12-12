import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const timer = 5;
    const [time, setTime] = useState(timer);
    const navigate = useNavigate();
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            navigate('/');
        }, timer * 1000);

        const countdownInterval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
            clearTimeout(timerRef.current);
            clearInterval(countdownInterval);
        };
    }, [navigate, timer]);

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>404 PageNotFound</h1>
            <div>
                <p>{`pls w8 redirecting to`} <Link className="link-underline link-underline-opacity-0" to={'/'}>Home</Link> {`in...${time}s`}</p>
            </div>
        </div>
    );
}
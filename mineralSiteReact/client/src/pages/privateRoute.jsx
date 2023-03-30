import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase"
//import Login from './login';

export default function PrivateRoute({ children }) {
    const { currentUser } = auth;
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]);

    return currentUser ? children : null;

    // return currentUser ? children : navigate("/login");
}
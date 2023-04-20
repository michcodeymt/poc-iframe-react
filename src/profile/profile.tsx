import {useEffect, useState} from "react";
import * as queryString from "querystring";

export const Profile = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        window.addEventListener('message', receiveMessage);

        return () => {
            window.removeEventListener('message', receiveMessage);
        };
    }, []);

    const receiveMessage = (event: any) => {
        if (event.origin !== 'http://localhost:4200') return;

        const data = event.data;
        console.log("el objeto que llega => ", data);
        setUserData(data);
    };


    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

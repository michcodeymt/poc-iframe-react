import React, { useRef, useEffect } from 'react';

export const Iframe = () => {
    const userData = {
        username: "ymontanez",
        document: "46177279",
        birthdate: "1990-01-01",
        clinicHistory: "0565",
        phone: "969969996",
        email: "ymontanez@gmail.com"
    };
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;

        if (iframe) {
            iframe.addEventListener('load', () => {
                const message = { type: 'USER_PARAMS', userData };
                iframe.contentWindow?.postMessage(message, '*');
            });
        }
    }, []);

    useEffect(() => {
        window.addEventListener('message', event => {
            if (event.data.type === 'REDIRECT_TO_ROUTE') {
                // redirigir a la ruta especificada en el mensaje
                const { route, param } = event.data;
                window.location.href = `${route}?param=${param}`;
            }
        });
    }, []);

    const iframeStyle = {
        width: '100vw',
        height: '100vh',
    };

    return(
        <>
            <iframe
                src="http://localhost:4200/profile/"
                ref={iframeRef}
                className="fullscreen-iframe"
                style={iframeStyle}
            />
        </>
    )

}

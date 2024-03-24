'use client';

import Game from '@/components/game';
import JoinGame from '@/components/join-game';
import { useState } from 'react';

export default function Home() {
    // Derive has-joined from an API call, fetch the current update if one is available for the player
    const [hasJoined, setJoined] = useState(false);

    const sessionCookie = getClientSideCookie('234-poker-session');

    if (sessionCookie) {
        // TODO: Make a join-request if user not in game, but session cookie is set
        console.log(
            'Make a join-request if user not in game, but session cookie is set'
        );
    } else {
        fetch(`${process.env.pokerServerUrl}/session`, {
            method: 'POST',
            credentials: 'include',
        }).then(() => {
            const socket = new WebSocket(process.env.websocketUrl!);
            socket.addEventListener('error', (event) => {
                console.error('Websocket error', event);
            });

            // Manage socket as a global
            socket.addEventListener('open', () => {
                const joinRequest = [
                    'join-request',
                    JSON.stringify({
                        name: values.playerName,
                        avatar: selectedImage,
                    }),
                ];
                socket.send(JSON.stringify(joinRequest));
            });

            socket.addEventListener('message', (event) => {
                const messageParts = JSON.parse(event.data);
                const messageType = messageParts[0];
                if (messageType === 'join-response') {
                    const player = JSON.parse(messageParts[1]);
                    onJoin(player);
                }
                console.log('Message from server ', event.data);
            });
        });
    }

    if (hasJoined) {
        return <Game />;
    }
    // I think I need state management to be able to know if I have successfully joined the game
    // It can probably also store the current update
    return (
        <JoinGame
            onJoin={() => {
                setJoined(true);
            }}
        />
    );
}

function getClientSideCookie(name: string): string | undefined {
    const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];

    return cookieValue;
}

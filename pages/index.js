import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        window.location.href = 'https://discord.gg/usvqf8WE';
    }, []);

    return (
        <div>
            <p>Redirecting to Discord...</p>
            <p>If you are not redirected automatically, please <a href="https://discord.gg/usvqf8WE">click here</a> to join our Discord server.</p>
        </div>
    );
} 
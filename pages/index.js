import { useState } from 'react'
import LoginForm from '../components/login-form'
import CookieStandAdmin from '../components/cookie-stand-admin'
import { getTokens } from '../services/data-fetcher'


export default function Home() {

    const [tokens, setTokens] = useState();

    const [username, setUsername] = useState('');

    async function loginHandler(values) {

        const fetchedTokens = await getTokens(values);

        setTokens(fetchedTokens);

        setUsername(values.username);
    }

    function logoutHandler() {
        setTokens(null);
    }

    if (!tokens) return <LoginForm onSubmit={loginHandler} />

    return <CookieStandAdmin
        tokens={tokens}
        onLogout={logoutHandler}
        username={username}
    />
}



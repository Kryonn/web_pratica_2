import { useState } from 'react';
import User from './components/user/user.jsx';
import Admin from './components/admin/admin.jsx';
import './App.css';

function App() {
    const [appState, setAppState] = useState('user');

    if (appState === 'user') {
        return (
            <div className="main">
                <User setAppState={setAppState} />
            </div>
        );
    }

    if (appState === 'admin') {
        return (
            <div className="main">
                <Admin setAppState={setAppState} />
            </div>
        );
    }

    return <div></div>;
}

export default App;

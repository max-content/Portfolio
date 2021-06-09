import React, { useState } from 'react';
import Fade from './MoreComponents/Fade';
import './styles.css';

export default function App() {
    const [isToggled, setIsToggled] = useState(false);

    return(
        <div className="App">
            <header>
                <h1 className="fake-logo">
                    Mx Max Nic Nax
                </h1>
            </header>
            <main className="layout">
                <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
                <Fade isActive={isToggled}>
                    <div className="card">
                        <h4>
                            Mx Max Nik Nax
                        </h4>
                        <p>
                            Mx Max Nik Naks
                            Mx Max Nik Knacks
                            Mx Max Knick Nacks
                        </p>
                    </div>
                </Fade>
            </main>
        </div>
    )
}
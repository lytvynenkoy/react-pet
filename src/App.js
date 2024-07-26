import Aside from "./components/aside/Aside";
import React from "react";
import { UserProvider } from "./context/UserContextComponent";


const App = () => {
    return (
        <UserProvider>
            <main>
                <div className="container">
                    <Aside />
                </div>
            </main>
        </UserProvider>
    );
}

export default App;

import React from "react";
import { UserProvider } from "../context/UserContextComponent";
import Aside from "../components/aside/Aside";
import Tabs from "../components/Tabs/Tabs.js"

const Main = () => {
    return (
        <UserProvider>
        <main>
                <div className="container">
                    <Aside />
                    <Tabs />
                </div>
        </main>
        </UserProvider>
    )
}

export default Main
import './App.css'
import {type ChangeEvent, useState} from "react";

function App() {

    const [token, setToken] = useState<string>()

    function updateToken(event: ChangeEvent<HTMLInputElement>) {
        setToken(event.target.value)
    }

    return (
        <div className="app">
            <div className="card">
                music monochrome
                &nbsp;
                Ihr Token bitte:&nbsp;<input name="token" placeholder={"Spotify Zugriffs-Token hier einfügen"} size={75}
                                             value={token}
                                             onChange={event => updateToken(event)}/>
                &nbsp;
                <button type="submit">&nbsp;anmelden&nbsp;</button>
                <br/>
                ================
            </div>
        </div>
    )
}

export default App

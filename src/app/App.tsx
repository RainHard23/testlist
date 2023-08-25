import React from 'react';
import {Cards} from "common/components/Cards/Cards";
import {Filters} from "common/components/Filters/Filters";
import {Header} from "common/components/Header/Header";


function App() {
    return (
        <div className="App">
            <Header />
            <Filters/>
            <Cards/>
        </div>
    );
}



export default App;

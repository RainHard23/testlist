import React from 'react';
import {Cards} from "common/components/Cards/Cards";
import {Filters} from "common/components/Filters/Filters";
import {Header} from "common/components/Header/Header";
import {Footer} from "common/components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Filters/>
            <Cards/>
            <Footer />
        </div>
    );
}



export default App;

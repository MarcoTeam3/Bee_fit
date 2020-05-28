import React, {Component} from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MainContent from "./MainContent";

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <MainContent />
                <Footer />
            </div>
        );
    }
}
/**
 * Created by brendaortega on 31/03/17.
 */
import React from "react";
import Header from "../common/Header";

class App extends React.Component{
    render(){
        return (
            <div>

                {this.props.children}
            </div>
        );
    }
}
export default App;
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SearchContext } from "../context/searchContext";
import Articles from "../components/Articles";
import Titles from "../components/Titles";
import Words from "../components/Words";
import NotFound from "../components/NotFound";

class AppRouter extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            word: '',
            title: '',
        };

    }

    render(){
        const searchContextValue = {

        }

        return(
            <BrowserRouter>
                <SearchContext.Provider>
                    <Switch>
                        <Route path="/" component={Articles} exact={true}/>
                        <Route path="/titles" component={Titles}/>
                        <Route path="/words" component={Words}/>
                        <Route component={NotFound} />
                    </Switch>
                </SearchContext.Provider>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
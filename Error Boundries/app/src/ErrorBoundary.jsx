// error wala me hma only class based compuntent ka use kar te hai

import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {// iska use kar te hai class based me
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null   };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
    }


    render() {
        if (this.state.hasError) {
            // return <h1>Something went wrong.</h1>;
            return(
                <div style={{border:'1px solid red', backgroundColor:"pink" , padding:"20px"}}>
                    <h2>Oops! something went wrong</h2>
                    <p>{this.props.fallback}</p>
                    <p>{this.state.error.message}</p>
                    <p>{this.state.errorInfo}</p>
                </div>
            )
        }
        return this.props.children;
    }

}


export default ErrorBoundary;
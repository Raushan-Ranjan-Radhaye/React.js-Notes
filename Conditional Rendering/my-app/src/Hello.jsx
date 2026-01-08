import './App.css'

function Hello() {

    const isVisible = false;

    const visibility = isVisible ? "VISIBLE" : "UNVISIBLE";


    return (
        <div>
            <h1>{visibility}</h1>
            <h1 className= {isVisible ? "visible" :"unvisible" } >Conditional Rendring!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque, amet iusto magni quo excepturi temporibus. Eius temporibus dicta soluta.</p>
        </div>
    );



    // let message;
    // if (isLoggedIn) {
    //     message = <h1>Welcome user!</h1>;
    // } else {
    //     message =  <h1>Please sign up.</h1>;
    // }
    // return (
    //     <div>
    //         {message}
    //     </div>
    // );

    }


    export default Hello;
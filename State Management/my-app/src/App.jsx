import Counter from "./Counter"
import InputExample from "./InputExample"
import LikeButton from "./LikeButton"
import Student from "./Student"
import ToggleText from "./ToggleText"
import UserProfile from "./UserProfile"


// set mahgement are to used to update the value
function App(){
    return(
        <div>
            <Counter></Counter>
            <ToggleText/>
            <LikeButton/>
            <UserProfile/>
            <Student/>
            <InputExample/>
        </div>
    )
}

export default App
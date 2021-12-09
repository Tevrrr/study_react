import React, {useState}  from 'react';

const Todoline = (props) => {
    const [Display, setDisplay] = useState({complete: "auto", decomplete: "none"});
    const [CompleteLine, setCompleteLine] = useState("");
    function complete() {
        setDisplay({complete: "none", decomplete: "auto"});
        setCompleteLine("CompleteLine");
    }
    function decomplete() {
        setDisplay({complete: "auto", decomplete: "none"});
        setCompleteLine(""); 
    }


    return (
        <div className={("Todoline " + CompleteLine)} >
            <p>{props.number + ". " + props.TodoText}</p>
            <div>
                <button className={(Display.complete)} onClick={complete}>
                    <i class="fa-solid fa-check"></i>
                </button>
                <button className={(Display.decomplete)} onClick={decomplete}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button onClick={() => props.remove(props.id)}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default Todoline;

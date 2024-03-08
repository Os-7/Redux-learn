import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    
    dispatch({ type: "ADD", payload:{num: inputElement.current.value}
   });
   inputElement.current.value="";
  };
  const handleSubtract = () => {
    dispatch({ type: "SUBTRACT", payload:{num : inputElement.current.value}
   });
   inputElement.current.value="";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE", 
   });
   inputElement.current.value="";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;

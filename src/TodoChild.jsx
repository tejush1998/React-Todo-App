// TodoChild.js
import { useRef } from "react";

function TodoChild(props) {
  const { data, setStateData } = props;
  const updateRefObj = useRef({});

  const deleteData = (deleteIndex) => {
    const newData = { ...data };
    delete newData[deleteIndex];
    setStateData(newData);
  };

  const updateData = (updateIndex) => {
    const newData = { ...data };
    Object.keys(data).forEach((elem) => {
      if (elem === updateIndex) {
        newData[elem] = updateRefObj.current[updateIndex.toString()].value;
      }
    });
    setStateData(newData);
  };

  return (
    <ul>
      {Object.keys(data).map((item) => {
        console.log("item", item);
        return (
          <li key={item}>
            {data[item]}
            {/* Refs in React should ideally be used sparingly, reconsider if you really need this  */}
            
            <input
              type="text"
              ref={(ref) => (updateRefObj.current[item] = ref)}
            />
            
            <button
              id="smallButton"
              onClick={() => {
                updateData(item);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                deleteData(item);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoChild;

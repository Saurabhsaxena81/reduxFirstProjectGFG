import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../slices/counterSlice";

export const Counter = () => {

  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.count)
  const onUpClick = () => {
    dispatch(increment());
  };
  const onDownClick=()=>{
    dispatch(decrement())
  }
  return (
    <>
      <button onClick={onUpClick}>up</button>
      <span> {count} </span>
      <button onClick={onDownClick} >down</button>
    </>
  );
};

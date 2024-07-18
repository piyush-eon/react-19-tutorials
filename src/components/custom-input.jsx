import { useRef, forwardRef, useImperativeHandle } from "react";

// const CustomInput = forwardRef((props, ref) => {
const CustomInput = ({ ref, ...props }) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} {...props} />;
  // });
};

export default CustomInput;

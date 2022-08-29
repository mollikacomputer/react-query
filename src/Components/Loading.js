import { useState, CSSProperties } from "react";
// import { CircleLoader } from "react-spinners";
// import ClipLoader from "react-spinners/ClipLoader";
// import DotLoader from "react-spinners/ClipLoader";
import { Audio } from 'react-loader-spinner'

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "black",
// };

function Loading() {
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ffffff");

  return (
    // <div className="sweet-loading">
    //   {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
    //   {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

    //   {/* <DotLoader /> */}
    //   {/* <CircleLoader color={color} loading={loading} cssOverride={override} size={150} /> */}

    // </div>
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
  );
}

export default Loading;
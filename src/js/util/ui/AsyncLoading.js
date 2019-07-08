import React from "react";

const AsyncLoading = props => {
  if(props.isLoading && props.isError) {
    return <div>Something went wrong, error occur. Please try after sometime.</div>
  } else if(props.isLoading && !props.isError) {
    return <div>Loading....</div>
  } else if(!props.isLoading && !props.isError) {
    return props.children;
  }
};
export default AsyncLoading;

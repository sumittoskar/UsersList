import React from "react";

const Table = props => {
    const tableHeading = props.tHeading.map((data, index)=>{
        return <th key={`${props.tableID}-tHead-${index}`}>{data}</th>
    });
    const tableBody = props.tData.map((userListing, index)=>{
        const zipCode = userListing.address.zipcode
        const warningRow = zipCode.indexOf("-") < 0 ? "table-warning" : "";
        return(
            <tr className={warningRow} key={`${props.tableID}-tBody${index}`}>
                <td>{userListing.id}</td>
                <td>{userListing.name}</td>
                <td>{userListing.username}</td>
                <td>{userListing.email}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => props.openSilder(userListing)}>Details</button></td>
                {/*<td>{`Street: ${userListing.address.street}, Zip Code: ${userListing.address.zipcode}`}</td>*/}
                
            </tr>
    )});
  return (
    <table id={props.tableID} className="table table-bordered">
        <thead>
            <tr>{tableHeading}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
  </table>
  );
};
export default Table;

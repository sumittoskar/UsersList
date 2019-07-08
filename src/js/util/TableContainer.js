import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Heading from "./ui/Heading";
import AsyncLoading from "./ui/AsyncLoading";
import Table from "./ui/Table";
import Sidebar from "./ui/Sidebar";
import { getUsers, loadingUsers, errorMessage, setSidebar, closeSidebar } from "../actions/usersActions";

class TableContainer extends Component {
  constructor(props) {
    super(props);
  }
  openSilder = (usersDetails) => {
    this.props.openSidebar(usersDetails);
  }

  closeSilder = () => {
    console.log("Action Trigger");
    this.props.closeSidebar();
  }
  
  componentDidMount(){
    this.props.loadingUsers(true);
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      this.props.setUsers(response.data);
    }).catch(err =>{
      this.props.errorUsers();
    });
  }
  render() {
    const tableHeading = ["ID", "Name", "User Name", "E-Mail", "Address"];
    return (
      <div className="col-md-12 order-md-1">
        <Heading title={this.props.title} />
        <AsyncLoading isLoading={this.props.users.isLoading} isError={this.props.users.isError}>
          {this.props.users.isSidebarOpen ? <Sidebar userDetails={this.props.users.sidebarData} closeSilder={this.closeSilder}/> : ""}
          <Table tableID={"usersListing"} tHeading={tableHeading} tData={this.props.users.userData} openSilder={this.openSilder} />
        </AsyncLoading>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.ListingReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: usersData => {
      dispatch(getUsers(usersData));
    },
    errorUsers: () => {
      dispatch(errorMessage());
    },
    loadingUsers: loading => {
      dispatch(loadingUsers(loading));
    },
    openSidebar: userDetails => {
      dispatch(setSidebar(userDetails));
    },
    closeSidebar: () => {
      dispatch(closeSidebar());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);

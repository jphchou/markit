import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Bookmark from "./Bookmark.js";
import firebase from 'firebase/app';

export default class LinkList extends Component {
  //takes in one prop folderName and renders list of Bookmark objects
  constructor(props){
    super(props);
    this.state = {
                  BookmarkList:[],
                  shared: false
                 };
    this.state.BookmarkList = firebase.database().ref('folders/'+ this.props.folderName);
  }
  render() {
    if (!this.props.user) {
      // Redirect the user if they're not logged in
      return <Redirect to='/login' />;
    } else {
      let content = [];
        for (var i = 0; i < this.state.BookmarkList.length; i++) {
          
            content.push(<li><Bookmark bookmark={this.state.bookmarkList[i]} /></li>);
            {/*passes in one prop that is a Bookmark object*/}

      }

      return (
        <div>
          <ol>
          {content}
          </ol>
        </div>
      );
    }
  }
}

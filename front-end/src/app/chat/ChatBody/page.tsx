"use client"
import React, { Component } from "react";
import "./style.css";
import ChatList from "../ChatList/page";
import ChatContent from "../chatContent/page";
import UserProfile from "../UserProfile/page";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        {/* <UserProfile /> */}
      </div>
    );
  }
}

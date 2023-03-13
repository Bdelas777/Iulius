import React from "react";
import "./sidebar.css";
import FeedIcon from "@mui/icons-material/Feed";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Groups2Icon from "@mui/icons-material/Groups2";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups2Icon className="sidebarIcon" />
            <span className="sidebarListItemText">Grupos</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Grupos</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Preguntas</span>
          </li>
          <li className="sidebarListItem">
            <AssuredWorkloadIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Trabajos</span>
          </li>
          <li className="sidebarListItem">
            <EmojiEventsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Eventos</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Eventos</span>
          </li>
        </ul>
        <button className="sidebarButton"> Ver más</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/users/2.jpeg"
              alt="Imagenes de amigos"
            />
            <span className="sidebarFriendName"> Chocas</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/users/3.jpeg"
              alt="Imagenes de amigos"
            />
            <span className="sidebarFriendName"> Chalky</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/users/4.jpeg"
              alt="Imagenes de amigos"
            />
            <span className="sidebarFriendName"> Luis</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/users/5.jpeg"
              alt="Imagenes de amigos"
            />
            <span className="sidebarFriendName"> Mister G</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

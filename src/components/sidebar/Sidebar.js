import React from "react";
import "./sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebarContainer">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/640/premium/640576.png?token=exp=1640452890~hmac=aff2fc0a0069dfce93bcc90e49c8403b"
                alt="Feed icon"
              />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/3416/premium/3416046.png?token=exp=1640452942~hmac=f4f8585e69c8aff9b6c6d5d834ebf907"
                alt="Chats icon"
              />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/860/860780.png"
                alt="Videos icon"
              />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/33/33308.png"
                alt="Groups icon"
              />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/102/102279.png"
                alt="Bookmarks icon"
              />
              <span className="sidebarListItemText">Booksmarks</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/471/premium/471664.png?token=exp=1640453069~hmac=487f8d1fdb9b43105f34961480d54ebe"
                alt="Questions icon"
              />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/2910/2910791.png"
                alt="Jobs icon"
              />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/48/48732.png"
                alt="Events icon"
              />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/3044/premium/3044245.png?token=exp=1640453127~hmac=36121970d8159a0d452428233e7e77d4"
                alt="Courses icon"
              />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show more</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src=".././assets/profiles/profile-2.jpg"
                alt="friend img"
              />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src=".././assets/profiles/profile-2.jpg"
                alt="friend img"
              />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src=".././assets/profiles/profile-2.jpg"
                alt="friend img"
              />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src=".././assets/profiles/profile-2.jpg"
                alt="friend img"
              />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src=".././assets/profiles/profile-2.jpg"
                alt="friend img"
              />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src=".././assets/profiles/profile-2.jpg"
                alt="friend img"
              />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src=".././assets/profiles/profile-2.jpg"
                alt="friend img"
              />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            v
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;

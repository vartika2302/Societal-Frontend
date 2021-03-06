
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="../../assets/cover.jfif"
                alt="cover img"
              />
              <img
                className="profileUserImg"
                src={`${PF}profiles/profile-1.jpg`}
                alt="user img"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Georgina Alfonso</h4>
              <span className="profileInfoDesc">Hello fellas</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

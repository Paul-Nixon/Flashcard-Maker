import './Sidebar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faList, faPencilAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="userInfo">
                    <FontAwesomeIcon icon={faUserCircle} fixedWidth className="pfp" />
                    <h2 className="username">Username</h2>
                </div>

                <hr className="sidebarHr" />

                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faList} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Categories</span>
                    </li>
                    <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faPencilAlt} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Quizzes &amp; Tests</span>
                    </li>
                    <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faCog} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Settings</span>
                    </li>
                    <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faSignOutAlt} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Log Out</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

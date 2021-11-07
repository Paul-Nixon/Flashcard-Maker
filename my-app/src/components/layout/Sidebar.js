import './Sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faList, faPencilAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import useEffectOnce from '../custom_hooks/useEffectOnce';

export default function Sidebar(props) {
    
    const homeLinkRef = useRef(),
    categoriesLinkRef = useRef(),
    quizzesAndTestsLinkRef = useRef(),
    SettingsLinkRef = useRef(),
    LogoutLinkRef = useRef(),
    [activeLink, setActiveLink] = useState(homeLinkRef);

    useEffectOnce(() => homeLinkRef.current.classList.add("active"));


    function changeActiveLink(unactiveLink)
    {
        activeLink.current.classList.remove("active");
        unactiveLink.current.classList.add("active");
        setActiveLink(unactiveLink);
    }


    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="userInfo">
                    <FontAwesomeIcon icon={faUserCircle} fixedWidth className="pfp" />
                    <h2 className="username">Username</h2>
                </div>

                <hr className="sidebarHr" />

                <ul className="sidebarList">
                    <li className="sidebarListItem" ref={homeLinkRef} onClick={() => {
                        changeActiveLink(homeLinkRef);
                        props.renderUserHomepage;
                    }}>
                        <FontAwesomeIcon icon={faHome} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Home</span>
                    </li>
                    <li className="sidebarListItem" ref={categoriesLinkRef} onClick={() => {
                        changeActiveLink(categoriesLinkRef);
                        props.renderCategoriesPage;
                    }}>
                        <FontAwesomeIcon icon={faList} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Categories</span>
                    </li>
                    <li className="sidebarListItem" ref={quizzesAndTestsLinkRef} onClick={() => {
                        changeActiveLink(quizzesAndTestsLinkRef);
                    }}>
                        <FontAwesomeIcon icon={faPencilAlt} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Quizzes &amp; Tests</span>
                    </li>
                    <li className="sidebarListItem" ref={SettingsLinkRef} onClick={() => {
                        changeActiveLink(SettingsLinkRef);
                    }}>
                        <FontAwesomeIcon icon={faCog} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Settings</span>
                    </li>
                    <li className="sidebarListItem" ref={LogoutLinkRef} onClick={() => {
                        changeActiveLink(LogoutLinkRef);
                    }}>
                        <FontAwesomeIcon icon={faSignOutAlt} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Log Out</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import './Sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faPencilAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useContext } from 'react';
import { useHistory } from "react-router-dom";

import AuthContext from '../../contexts/AuthContext';
import useEffectOnce from '../custom_hooks/useEffectOnce';

export default function Sidebar(props) {
    
    const homeLinkRef = useRef(),
    categoriesLinkRef = useRef(),
    quizzesAndTestsLinkRef = useRef(),
    LogoutLinkRef = useRef(),
    [activeLink, setActiveLink] = useState(homeLinkRef),
    { logoutUser, currentUser } = useContext(AuthContext),
    history = useHistory();

    useEffectOnce(() => homeLinkRef.current.classList.add("active"));


    function changeActiveLink(unactiveLink)
    {
        activeLink.current.classList.remove("active");
        unactiveLink.current.classList.add("active");
        setActiveLink(unactiveLink);
    }

    function logoutHandler()
    {
        try
        {
            logoutUser();
            history.push("/login");
        }
        catch (error)
        {
            history.push("/register");
        }
    }

    
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="userInfo">
                    <FontAwesomeIcon icon={faUserCircle} fixedWidth className="pfp" />
                    <h2 className="username">{currentUser.email}</h2>
                </div>

                <hr className="sidebarHr" />

                <ul className="sidebarList">
                    <li className="sidebarListItem" ref={homeLinkRef} onClick={() => {
                        changeActiveLink(homeLinkRef);
                        props.renderUserHomepage();
                    }}>
                        <FontAwesomeIcon icon={faHome} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Home</span>
                    </li>
                    <li className="sidebarListItem" ref={categoriesLinkRef} onClick={() => {
                        changeActiveLink(categoriesLinkRef);
                        props.renderCategoriesPage();
                    }}>
                        <FontAwesomeIcon icon={faList} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Categories</span>
                    </li>
                    <li className="sidebarListItem" ref={LogoutLinkRef} onClick={logoutHandler}>
                        <FontAwesomeIcon icon={faSignOutAlt} fixedWidth className="sidebarListIcon" />
                        <span className="sidebarListText">Log Out</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

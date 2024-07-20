import { useNavigate } from 'react-router-dom'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import './header.css'
import { useEffect, useRef } from 'react';

const Header = props => {

    const navigate = useNavigate()

    const ref = useRef(null);

    const { albumbHeaderBgColor } = props;
    useEffect(() => {
        ref.current.style.backgroundColor = albumbHeaderBgColor || "rgba(24, 23, 23, 0.938)"
    },[albumbHeaderBgColor])

   

    const headerBackgroundColor = {
        backgroundColor: albumbHeaderBgColor || "rgba(24, 23, 23, 0.938)"
    }

    const onClickGoBack = () => {
        navigate("/");
    }

    return <div className="header-container" ref = {ref}>
        <div className="navigation-conatiner">
            <button type='button' className='arrow' onClick={onClickGoBack} >
                <SlArrowLeft size="18" />
            </button>
            <button type='button' className='arrow'  >
                <SlArrowRight size="18" />
            </button>
        </div>
        <div className="login-and-logout-container">
            <button className="signup-btn">Sign up</button>
            <button className="login-btn">login</button>
        </div>
    </div>

}

export default Header
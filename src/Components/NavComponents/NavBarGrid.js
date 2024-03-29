import React from 'react'
import styled from "styled-components";

// const Image = styled.img`
//         background-image: url(https://picsum.photos/1280?image=849);
//         background-position: center;
//         background-repeat: no-repeat;
//         background-size: cover;
//         display: grid;
//         justify-items: center;
//         align-items: center;
    
// `;

const NavCss = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Roboto+Slab");

    a {
        cursor: pointer;
    }
    header {
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
    }
    .nav-container {
        width: 1280px;
        margin: auto;
    }
    .nav-checkbox {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 10px 0;
    }
    .logo {
        text-decoration: none;
        color: #fff;
        padding-left: 10px;
        font-size: 32px;
    }
    .tab-nav {
        outline: none;
        display: none;
    }
    .tab-nav-label {
        display: none;
        color: #fff;
    }
    .tab-content {
        grid-column: 3;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .tab-content li {
        display: inline-block;
        padding-right: 10px;
    }
    .tab-content li a {
        text-decoration: none;
        color: #fff;
        position: relative;
    }
    .tab-content li a::before {
        content: "";
        display: block;
        height: 3px;
        background: #fff;
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        transform-origin: left;
        transform: scale(0, 1);
        transition: transform ease-in-out 500ms;
    }
    .tab-content li a:hover::before {
        transform: scale(1, 1);
    }
    .tab-content li a::after {
        content: "";
        display: block;
        height: 3px;
        background: #fff;
        position: absolute;
        top: -5px;
        left: 0;
        right: 0;
        transform-origin: right;
        transform: scale(0, 1);
        transition: transform ease-in-out 500ms;
    }
    .tab-content li a:hover::after {
        transform: scale(1, 1);
    }

    @media screen and (max-width: 1280px) {
        .nav-container {
            width: 100%;
        }
    }
    @media screen and (max-width: 768px) {
        .tab-nav-label {
            display: grid;
            cursor: pointer;
            grid-column: 3;
            padding-right: 10px;
        }
        .tab-content {
            display: grid;
            grid-template-columns: 1fr;
            grid-column: 1/4;
            text-align: center;
            max-height: 0;
            overflow: hidden;
            transition: all ease-in-out 0.4s;
            -o-transition: all ease-in-out 0.4s;
            -webkit-transition: all ease-in-out 0.4s;
        }
        .nav-checkbox input:checked ~ .tab-content {
            max-height: 400px;
        }
        .tab-content li {
            padding: 10px 0;
        }
    }
    .myvideo {
        text-decoration: none;
        color: #fff;
        background: red;
        padding: 10px;
        height: 20px;
        font-weight: 600;
    }
    .myvideo:hover {
        color: #000;
    }
`;

const NavBarGrid = () => {
    return (
        <NavCss>
        <div>
           
<body>
<header>
    <div class="nav-container">
        <nav class="nav-checkbox">
            <a href="/#" class="logo">logo</a>
            <input id="tab-nav" type="checkbox" class="tab-nav" name="tabs"/>
            <label for="tab-nav" class="tab-nav-label">Menu</label>
            <ul class="tab-content">
              <li><a href="/#">Home</a></li>
              <li><a href="/#">About Us</a></li>
              <li><a href="/#">Tour</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</header>
</body>
        </div>
        </NavCss>
    )
}
export default NavBarGrid;

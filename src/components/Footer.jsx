import React from "react";

function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();

    return <footer>
        <p className="Footer">Copyright © {currentYear}.</p>
    </footer>
};

export default Footer;
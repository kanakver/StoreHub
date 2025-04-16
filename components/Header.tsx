import React from "react";
import FileUploader from "./FileUploader";
import Search from "./Search";

const Header = () => {
  return <header className="header">
    <Search />
    <div className="header-wrapper">
        <FileUploader />
        <form>
            <button type="submit" className="sign-out-button">
                <img src="/assets/icons/logout.svg" alt="sign-out" width={24} height={24} className="w-6 "/>
            </button>
        </form>
      
    </div>

  </header>
};

export default Header;

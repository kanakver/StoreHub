import React from "react";
import FileUploader from "./FileUploader";
import Search from "./Search";

const Header = ({ userId, accountId }: { userId: string, accountId: string }) => {
  return <header className="header">
    <Search />
    <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form>
            <button type="submit" className="sign-out-button">
                <img src="/assets/icons/logout.svg" alt="sign-out" width={24} height={24} className="w-6 "/>
            </button>
        </form>
      
    </div>

  </header>
};

export default Header;

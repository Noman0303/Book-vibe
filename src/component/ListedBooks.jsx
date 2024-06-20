import { useState } from "react";
import ReadBooks from "./ReadBooks";
import WishListBooks from "./WishListBooks";

const ListedBooks = () => {

  const [activeTab, setActiveTab] = useState('read');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div role="tablist" className="tabs flex ">
        <button
          role="tab"
          aria-selected={activeTab === 'read'}
          aria-controls="read-panel"
          onClick={() => handleTabClick('read')}
          className={`px-4 tab-button ${activeTab === 'read' ? 'border-blue-500 border-b-2 text-black py-2 tab-active' : 'border-transparent text-gray-400 '}`}>
          Read Books
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'wishlist'}
          aria-controls="wishlist-panel"
          onClick={() => handleTabClick('wishlist')}
          className={`px-4 tab-button ${activeTab === 'wishlist' ?  'border-blue-500 border-b-2 text-black py-2' : 'border-transparent text-gray-400 '}`}>
          Wishlist Books
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'read' && <ReadBooks></ReadBooks>}
        {activeTab === 'wishlist' && <WishListBooks></WishListBooks>}
      </div>
    </div>
  );
};


export default ListedBooks
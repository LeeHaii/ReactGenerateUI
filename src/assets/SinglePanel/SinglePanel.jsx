import { useState, useEffect } from "react";
import Popup from "../Popup/Popup";

function SinglePanel({users}){
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const openPopup = (user) => {
    setSelectedUser(user);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedUser(null);
    setPopupOpen(false);
  };

  

  return (
    <>
      <div className="allContainer">
        <div className="txtHeader">Kết bạn với những người tuyệt vời!</div>
          <div className="FriendSuggestion">
            {users.map((item, index) => (
              <div className='FriendContainer' key={index}>
                <img src={item.img} alt="chit" />
                <h2>Name: {item.name}</h2>
                <h3>Sex: {item.sex}</h3>
                <h3>Age: {item.age}</h3>
                <button onClick={() => openPopup(item)}>Check Info</button>
              </div>
            ))}
          </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} content={
                  selectedUser && (
                  <div className="popup-content-wrap">
                    <img src={selectedUser.img} alt="chit" />
                    <div className="popup-info">
                      <h2>Name: {selectedUser.name}</h2>
                      <h3>Sex: {selectedUser.sex}</h3>
                      <h3>Age: {selectedUser.age}</h3>
                      <p>Description: {selectedUser.desc}</p>
                    </div>
                  </div>)
                } />
    </>
  )
}

export default SinglePanel
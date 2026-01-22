export const UserDetails = ({ name, isOnline, hideOffline }) => {
  //   return (
  //     <div>
  //       <h3>{name}</h3>
  //       <p>Status: {isOnline}</p>
  //     </div>
  //   );

  if (hideOffline && !isOnline) {
    return null;
  }

  if (isOnline) {
    return (
      <div>
        <h3>{name}</h3>
        <span>Online</span>
        <p>Available for Chat</p>
        <button>Send message</button>
      </div>
    );
  }

  return (
    <div>
      <h3>{name}</h3>
      <span>Offline</span>
      <p>Currently unavailable</p>
      <small>Check back later</small>
    </div>
  );
};

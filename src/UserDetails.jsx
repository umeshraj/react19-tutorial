export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNewUser,
}) => {
  //   return (
  //     <div>
  //       <h3>{name}</h3>
  //       <p>Status: {isOnline}</p>
  //     </div>
  //   );

  if (hideOffline && !isOnline) {
    return null;
  }

  return (
    <div>
      <h3>
        {name}
        {isPremium && <span>🌟</span>}
        {isNewUser && <span>🆕</span>}
      </h3>
      <span>{isOnline ? "Online" : "Offline"}</span>
      <p>{isOnline ? "Available for Chat" : "Currently unavailable"}</p>
      {isOnline ? (
        <button>Send message</button>
      ) : (
        <small>Check back later</small>
      )}
    </div>
  );
};

//   if (isOnline) {
//     return (
//       <div>
//         <h3>{name}</h3>
//         <span>Online</span>
//         <p>Available for Chat</p>
//         <button>Send message</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h3>{name}</h3>
//       <span>Offline</span>
//       <p>Currently unavailable</p>
//       <small>Check back later</small>
//     </div>
//   );
// };

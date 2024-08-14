import React from "react";

interface User {
  id: string;
  name: string;
}

interface ChatHeaderProps {
  currentUser: User | null;
  selectedUser: User | null;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  currentUser,
  selectedUser,
}) => {
  return (
    <div className="chat-header p-4 px-12 bg-slate-700 text-white font-semibold text-sm font-mono">
      {selectedUser ? selectedUser.name : "Select a user to start chatting"}
      {currentUser && <span> - {currentUser.name}</span>}
    </div>
  );
};

export default ChatHeader;
// import React from "react";

// interface ChatHeaderProps {
//   user: any;
// }

// const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
//   return (
//     <div className="chat-header p-4 px-12 bg-slate-700 text-white font-semibold text-sm font-mono">
//       {user ? user.name : "Select a user to start chatting"}
//     </div>
//   );
// };

// export default ChatHeader;

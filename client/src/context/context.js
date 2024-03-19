import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

const SocketWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const socketRef = useRef(null);
  useEffect(() => {
    setLoading(true);
    socketRef.current = io.connect("http://localhost:8000");
    socketRef.current.on("connect", () => {
      setLoading(false);
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SocketContext.Provider value={socketRef.current}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketWrapper;

import { useEffect } from "react";
import "@n8n/chat/dist/style.css";
import { createChat } from "@n8n/chat";

const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl: "https://support-18044.n8n-wsk.com/webhook/b55abd83-232c-41f1-aa94-7351982399bb/chat"
    });
  }, []);

  return null;
};

export default ChatWidget;
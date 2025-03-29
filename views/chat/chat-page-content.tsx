"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Download,
  Image,
  MessageSquare,
  MoreVertical,
  Paperclip,
  Search,
  Settings,
  ToggleLeft,
  User,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Trash,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import clsx from "clsx";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { RouteMap } from "@/routes/route-map";

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  type: "user" | "agent" | "admin";
}

interface Chat {
  id: string;
  name: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  isActive?: boolean;
}

const chats: Chat[] = [
  {
    id: "1",
    name: "Unknown",
    role: "tuto.ia",
    lastMessage: "como faço para o meu time fazer...",
    timestamp: "4 hours ago",
    isActive: true,
  },
  {
    id: "2",
    name: "Unknown",
    role: "tuto.ia",
    lastMessage: "como faço para o meu time fazer...",
    timestamp: "4 hours ago",
    isActive: false,
  },
];

const messages: Message[] = [
  {
    id: "1",
    type: "user",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
  {
    id: "2",
    type: "admin",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
  {
    id: "3",
    type: "user",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
  {
    id: "4",
    type: "user",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
  {
    id: "5",
    type: "user",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
  {
    id: "6",
    type: "user",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
  {
    id: "7",
    type: "user",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
  {
    id: "8",
    type: "user",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
  {
    id: "9",
    type: "user",
    content: "como faço para o meu time fazer mais gols?",
    sender: "Maicol Bruski",
    timestamp: "11:39 PM",
  },
];

const agents = [
  { value: "all", label: "All Agents" },
  { value: "sales", label: "Sales Agent" },
  { value: "support", label: "Support Agent" },
  { value: "technical", label: "Technical Agent" },
];

function ChatList({ onSelectChat }: { onSelectChat?: () => void }) {
  const [selectedAgent, setSelectedAgent] = useState("all");

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4 gap-4">
          <Select value={selectedAgent} onValueChange={setSelectedAgent}>
            <SelectTrigger className=" bg-secondary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {agents.map((agent) => (
                <SelectItem key={agent.value} value={agent.value}>
                  {agent.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search a conversation" className="pl-10" />
        </div>
      </div>

      <ScrollArea className="flex-1 ">
        <div className="space-y-2 p-4">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                onSelectChat?.();
              }}
              className={cn(
                "w-full text-left p-3 rounded-lg transition-colors",
                chat.isActive ? "bg-accent" : "hover:bg-accent/50"
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{chat.name}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{chat.role}</span>
                </div>
                <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default function ChatPageContent() {
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState<Chat>(chats[0]);
  const [isChatListOpen, setIsChatListOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="flex h-[calc(100vh-4.1rem)]">
      {/* Desktop Chat List */}
      <div
        className={cn(
          "hidden md:block border-r transition-all duration-300",
          isSidebarVisible ? "w-80" : "w-0 opacity-0"
        )}
      >
        <ChatList />
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col dark:bg-neutral-900 m-6 rounded-md">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            {/* Mobile Chat List */}
            <Sheet open={isChatListOpen} onOpenChange={setIsChatListOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                  className="md:hidden"
                >
                  {isSidebarVisible ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-full sm:w-[380px]">
                <ChatList onSelectChat={() => setIsChatListOpen(false)} />
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-3 md:ml-0 ml-12">
              <span className="text-sm">Conversation with</span>
              <span className="font-medium">Maicol Bruski</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">tuto.ia</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" checked={true} />
                <Label htmlFor="airplane-mode">Agent is ON</Label>
              </div>
            </div>

            <Button variant="ghost" size="icon">
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={clsx("flex", msg.type === "user" ? "justify-start " : "justify-end")}>
                <div
                  className={clsx(
                    "max-w-[80%] bg-accent rounded-lg p-3",
                    msg.type !== "user" && "bg-emerald-600 text-white"
                  )}
                >
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <span className="font-medium">{msg.sender}</span>
                    <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                  </div>
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

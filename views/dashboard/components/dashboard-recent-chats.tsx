import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function DashboardRecentChats() {
  return (
    <div className="">
      {[1, 2, 3, 4, 5].map((chat, index) => (
        <div className="flex items-center py-4" key={index}>
          <Avatar className="h-9 w-9">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
              alt="Avatar"
              className="rounded-full"
            />
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <div className="text-sm text-muted-foreground ">2025-12-12 - 20:00h</div>
          </div>
          <div className="ml-auto ">
            <Button size="icon" variant="ghost">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

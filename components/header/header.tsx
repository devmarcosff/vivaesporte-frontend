"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, LogOut, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";
import { RouteMap } from "../../routes/route-map";
import nookies from 'nookies'
import { useRouter } from "next/navigation";

export interface HeaderProps {
  onMobileMenuClick: () => void;
}

export function Header({ onMobileMenuClick }: HeaderProps) {
  const router = useRouter();
  const t = useTranslations("navbar");

  const handleLogout = () => {
    // TODO: Implement actual logout
    nookies.destroy(null, "USER_TOKEN", { path: "/" });
    router.push(RouteMap.login);
  };

  return (
    <div className="border-b sticky top-0 z-40 bg-background">
      <div className="flex h-16 items-center px-8">
        <Button variant="ghost" size="icon" className="md:hidden mr-4" onClick={onMobileMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        <div className="ml-auto flex items-center space-x-4">
          {/* <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button> */}

          {/* <FeedbackButton>
          <Button variant="ghost" size="icon" data-featurebase-feedback>
            <Rss className="h-5 w-5" />
          </Button>
          </FeedbackButton> */}

          <ModeToggle />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56" align="end">
              <div className="space-y-3">
                <Link
                  href={RouteMap.profile}
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <User className="h-4 w-4" />
                  {t("settings")}
                </Link>
                <div className="border-t pt-3">
                  <button
                    className="flex items-center gap-3 text-sm text-destructive hover:text-destructive/90 transition-colors"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    Sair
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, Plus } from "lucide-react";
import React from "react";

interface PageTitleProps {
  title: string;
  description?: string;
  primaryButton?: { label: string; icon?: React.ReactNode; action: () => void };
  secondaryButton?: { label: string; icon?: React.ReactNode; action: () => void };
  backButtonUrl?: string;
}

export function PageTitle({ primaryButton, secondaryButton, title, description, backButtonUrl }: PageTitleProps) {
  return (
    <div className={`md:flex items-center justify-center gap-1 mb-8`}>
      {backButtonUrl && (
        <Button variant="outline" size="icon" className="mr-2" asChild>
          <Link href={backButtonUrl}>
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>
      )}
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="ml-auto gap-2 flex">
        {primaryButton && (
          <Button className="flex items-center gap-2 md:ml-auto" size="lg" onClick={primaryButton.action}>
            {primaryButton.icon && primaryButton.icon}
            {primaryButton.label}
            <Plus className="h-4 w-4 ml-2" />
          </Button>
        )}
        {secondaryButton && (
          <Button
            variant={"outline"}
            className="flex items-center gap-2 md:ml-auto"
            size="lg"
            onClick={secondaryButton.action}
          >
            {secondaryButton.icon && secondaryButton.icon}
            {secondaryButton.label}
            <Plus className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

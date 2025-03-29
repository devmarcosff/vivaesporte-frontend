"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, GraduationCap, Settings, FileText, Plus, Search, Terminal, LibraryBig } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { RouteMap } from "@/routes/route-map";

export default function KnowledgePage() {
  const t = useTranslations("knowledge");
  const router = useRouter();

  const handleNewKnowledgeClick = () => {
    // Redirect to the new knowledge page
    router.push(`${RouteMap.knowledge}/new`);
  };

  return (
    <div className="flex-1">
      <div className="flex flex-col gap-8">
        {/* Top Actions */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder={t("searchPlaceholder")} className="pl-10" disabled />
          </div>
          <Button className="flex items-center gap-2 ml-auto" size="lg" onClick={handleNewKnowledgeClick}>
            <LibraryBig className="h-5 w-5" />
            {t("newKnowledge")}
            <Plus className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <Alert className="text-muted-foreground">
          <Terminal className="h-4 w-4" />
          <AlertDescription className="space-y-6">
            <div>{t("noKnowledgeCreated")}</div>
            <div className="flex items-center gap-3 ml-auto">
              <Button variant="outline" className="gap-2 bg-background hover:bg-background/90" size="sm">
                <GraduationCap className="h-4 w-4" />
                {t("accessTutorial")}
              </Button>
            </div>
          </AlertDescription>
        </Alert>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>{t("noLlmConfigured")}</AlertTitle>
          <AlertDescription className="space-y-6">
            <div>{t("noLlmConfiguredDescription")}</div>
            <div className="flex items-center gap-3 ml-auto">
              <Button variant="outline" className="gap-2 bg-background hover:bg-background/90" size="sm">
                <GraduationCap className="h-4 w-4" />
                {t("accessTutorial")}
              </Button>
              <Button variant="secondary" className="gap-2" size="sm">
                <Settings className="h-4 w-4" />
                {t("configure")}
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

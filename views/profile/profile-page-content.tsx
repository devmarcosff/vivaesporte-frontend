"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PageTitle } from "@/components/page-title/page-title";

export function ProfilePageContent() {
  const [name, setName] = useState("Marcos Stevanini");
  const [email, setEmail] = useState("devmarcosff@admin.com");
  // const [language, setLanguage] = useState("english");

  const t = useTranslations("profile");

  return (
    <div className="flex-1 space-y-8 p-8">
      <PageTitle title='Perfil' description='Gerencie as informações do seu perfil.' />
      <div className="max-w-2xl space-y-6">
        <div className="space-y-4 mr-6">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant={"outline"} size={"sm"}>
              Editar foto
            </Button>
          </div>
        </div>

        <div className="grid space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm text-muted-foreground font-medium">
              Email
            </Label>
            <Input className="h-12" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="agent-name" className="text-sm text-muted-foreground font-medium">
              Nome
            </Label>
            <Input className="h-12" id="agent-name" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          {/* <div className="grid gap-2">
            <Label className="text-muted-foreground">{t("languageLabel")}</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="portuguese">Portugês</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <Button>Salvar perfil</Button>
      </div>
    </div>
  );
}

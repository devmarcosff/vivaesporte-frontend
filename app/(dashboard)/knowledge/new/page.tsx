"use client"

import { useState } from "react"
import { GraduationCap } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert } from "@/components/ui/alert"

export default function KnowledgeRegisterPage() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const t = useTranslations("knowledgeRegister")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ name, description })
  }

  return (
    <div className="flex-1 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-sm text-muted-foreground">{t("description")}</p>
      </div>

      <div className="space-y-8 max-w-2xl">
        {/* Tutorial Link */}
        <Alert
          variant="default"
          className="flex items-center">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-info-foreground" />
            <div>
              <span className="text-muted-foreground">{t("tutorialAlert")} </span>
              <Link
                href="/tutorials"
                className="text-info-foreground hover:underline font-medium">
                {t("tutorialLink")}
              </Link>
            </div>
          </div>
        </Alert>

        <form
          onSubmit={handleSubmit}
          className="space-y-8">
          {/* Knowledge Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm text-muted-foreground font-medium">
              {t("nameLabel")}
            </label>
            <Input
              id="name"
              placeholder={t("namePlaceholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm text-muted-foreground font-medium">
              {t("descriptionLabel")}
            </label>
            <Textarea
              id="description"
              placeholder={t("descriptionPlaceholder")}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[200px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg">
            {t("submit")}
          </Button>
        </form>
      </div>
    </div>
  )
}

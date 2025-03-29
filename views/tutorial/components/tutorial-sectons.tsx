import { useTranslations } from "next-intl";

export interface Tutorial {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
}

export interface TutorialSection {
  title: string;
  description: string;
  tutorials: Tutorial[];
}

export function useTutorialsSections() {
  const t = useTranslations("tutorials.sections");

  const tutorialSections: TutorialSection[] = [
    {
      title: t("settingUpYourAccount"),
      description: t("learnHowToSetUpYourAccount"),
      tutorials: [
        {
          id: "1",
          title: t("videos.accountConfiguration"),
          thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=450&fit=crop",
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "2",
          title: t("videos.teamManagement"),
          thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop",
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "3",
          title: t("videos.userPermissions"),
          thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop",
          videoId: "dQw4w9WgXcQ",
        },
      ],
    },
    {
      title: t("createYourKnowledgeBase"),
      description: t("howToUseKnowledgeThroughSources"),
      tutorials: [
        {
          id: "4",
          title: t("videos.knowledgeBaseSetup"),
          thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=450&fit=crop",
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "5",
          title: t("videos.addingSources"),
          thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "6",
          title: t("videos.managingContent"),
          thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
          videoId: "dQw4w9WgXcQ",
        },
      ],
    },
  ];

  return tutorialSections;
}

"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { Tutorial, TutorialSection, useTutorialsSections } from "./components/tutorial-sectons";
import { PageTitle } from "@/components/page-title/page-title";

function TutorialCarousel({
  tutorials,
  onTutorialClick,
}: {
  tutorials: Tutorial[];
  onTutorialClick: (videoId: string) => void;
}) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="flex-[0_0_300px]">
            <Card
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => onTutorialClick(tutorial.videoId)}
            >
              <img
                src={tutorial.thumbnail}
                alt={tutorial.title}
                className="w-full h-[169px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="w-12 h-12 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-medium">{tutorial.title}</h3>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TutorialPageContent() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const t = useTranslations("tutorials");
  const tutorialSections: TutorialSection[] = useTutorialsSections();

  return (
    <div className="flex-1 space-y-8 p-8">
      <PageTitle title={t("title")} description={t("description")} />

      <div className="border-b"> </div>

      <div className="space-y-12">
        {tutorialSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <div>
              <h3 className="text-1xl font-semibold">{section.title}</h3>
              <p className="text-muted-foreground">{section.description}</p>
            </div>
            <TutorialCarousel tutorials={section.tutorials} onTutorialClick={setSelectedVideo} />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[800px] p-6">
          <DialogHeader>
            <DialogTitle>Watch the tutorial</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo ? `https://www.youtube.com/embed/${selectedVideo}` : undefined}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

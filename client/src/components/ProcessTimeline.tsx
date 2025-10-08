import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface TimelineStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

function TimelineStep({ icon: Icon, title, description, isLast }: TimelineStepProps) {
  return (
    <div className="flex gap-4" data-testid={`timeline-step-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-primary p-3">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-border mt-2"></div>}
      </div>
      <div className={`flex-1 ${!isLast ? 'pb-8' : ''}`}>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

interface ProcessTimelineProps {
  steps: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <Card className="p-6" data-testid="card-process-timeline">
      <div className="space-y-0">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.title}
            {...step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </Card>
  );
}

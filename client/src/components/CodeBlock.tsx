import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden bg-card" data-testid="card-code-block">
      <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-card-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
            <div className="w-3 h-3 rounded-full bg-chart-4"></div>
            <div className="w-3 h-3 rounded-full bg-chart-3"></div>
          </div>
          {title && <span className="text-sm font-medium ml-2">{title}</span>}
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">{language}</Badge>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleCopy}
            className="h-7 w-7"
            data-testid="button-copy-code"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    </Card>
  );
}

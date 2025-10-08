import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";

const colors = [
  { name: "Primary", var: "--primary", value: "210 100% 60%" },
  { name: "Accent", var: "--accent", value: "270 70% 65%" },
  { name: "Background", var: "--background", value: "220 15% 8%" },
  { name: "Foreground", var: "--foreground", value: "220 10% 98%" },
  { name: "Card", var: "--card", value: "220 15% 12%" },
  { name: "Muted", var: "--muted", value: "220 8% 16%" },
];

const typography = [
  { name: "Hero Title", class: "text-6xl font-bold tracking-tight", example: "Building the Future" },
  { name: "Section Header", class: "text-4xl font-bold", example: "Featured Projects" },
  { name: "Card Title", class: "text-2xl font-semibold", example: "Motion Detector AI" },
  { name: "Body Large", class: "text-lg", example: "This is body large text for emphasis" },
  { name: "Body", class: "text-base", example: "This is standard body text" },
  { name: "Caption", class: "text-sm text-muted-foreground", example: "Caption or metadata text" },
  { name: "Code", class: "text-sm font-mono", example: "const variable = 'value';" },
];

const spacing = [
  { name: "2xs", value: "0.125rem", class: "w-0.5 h-8" },
  { name: "xs", value: "0.25rem", class: "w-1 h-8" },
  { name: "sm", value: "0.5rem", class: "w-2 h-8" },
  { name: "md", value: "1rem", class: "w-4 h-8" },
  { name: "lg", value: "1.5rem", class: "w-6 h-8" },
  { name: "xl", value: "2rem", class: "w-8 h-8" },
  { name: "2xl", value: "3rem", class: "w-12 h-8" },
  { name: "3xl", value: "4rem", class: "w-16 h-8" },
];

function ColorSwatch({ name, varName, value }: { name: string; varName: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`hsl(${value})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden" data-testid={`card-color-${name.toLowerCase()}`}>
      <div className={`h-24 bg-[hsl(var(${varName}))]`}></div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm font-mono text-muted-foreground">{varName}</p>
        <div className="flex items-center justify-between">
          <code className="text-xs bg-muted px-2 py-1 rounded">{value}</code>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleCopy}
            className="h-7 w-7"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="space-y-20">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">Design System</h1>
            <p className="text-xl text-muted-foreground">
              Typography, colors, components, and spacing tokens for the portfolio
            </p>
          </div>

          <section className="space-y-8" id="colors">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Color System</h2>
              <p className="text-muted-foreground">
                Core color palette with HSL values for dark mode optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colors.map((color) => (
                <ColorSwatch key={color.var} name={color.name} varName={color.var} value={color.value} />
              ))}
            </div>
          </section>

          <section className="space-y-8" id="typography">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Typography Scale</h2>
              <p className="text-muted-foreground">
                Font sizes and weights using Inter and JetBrains Mono
              </p>
            </div>
            <div className="space-y-6">
              {typography.map((type) => (
                <Card key={type.name} className="p-6" data-testid={`card-typography-${type.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-muted-foreground">{type.name}</h3>
                      <code className="text-xs bg-muted px-2 py-1 rounded">{type.class}</code>
                    </div>
                    <p className={type.class}>{type.example}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-8" id="components">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Components</h2>
              <p className="text-muted-foreground">
                Reusable UI components with variants and states
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6" data-testid="card-buttons">
                <h3 className="font-semibold text-lg mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default" data-testid="button-default">Default</Button>
                  <Button variant="secondary" data-testid="button-secondary">Secondary</Button>
                  <Button variant="outline" data-testid="button-outline">Outline</Button>
                  <Button variant="ghost" data-testid="button-ghost">Ghost</Button>
                  <Button variant="destructive" data-testid="button-destructive">Destructive</Button>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-badges">
                <h3 className="font-semibold text-lg mb-4">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-inputs">
                <h3 className="font-semibold text-lg mb-4">Input Fields</h3>
                <div className="space-y-4 max-w-md">
                  <Input placeholder="Email address" type="email" data-testid="input-email" />
                  <Input placeholder="Search..." type="search" data-testid="input-search" />
                  <Input placeholder="Disabled input" disabled data-testid="input-disabled" />
                </div>
              </Card>
            </div>
          </section>

          <section className="space-y-8" id="spacing">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Spacing Tokens</h2>
              <p className="text-muted-foreground">
                Consistent spacing scale using Tailwind units
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {spacing.map((space) => (
                <Card key={space.name} className="p-6" data-testid={`card-spacing-${space.name}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`${space.class} bg-primary rounded`}></div>
                      <div>
                        <h3 className="font-semibold">{space.name}</h3>
                        <code className="text-xs text-muted-foreground">{space.value}</code>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-8" id="code-syntax">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Code Syntax Theme</h2>
              <p className="text-muted-foreground">
                Monospace font styling for code blocks
              </p>
            </div>
            <Card className="p-6 bg-muted" data-testid="card-code-example">
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-foreground">{`# Python Example
def calculate_accuracy(predictions, labels):
    correct = sum(p == l for p, l in zip(predictions, labels))
    return correct / len(labels)

# Initialize model
model = YOLOv8('weights.pt')
results = model.predict(image)`}</code>
              </pre>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}

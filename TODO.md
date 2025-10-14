# Portfolio Update Guide

This guide explains how to update key information in your portfolio.

## 📄 Updating Resume

**File Location:** `/client/public/Chetan_Chhetri_Resume.pdf`

**Steps:**
1. Replace the PDF file at `/client/public/Chetan_Chhetri_Resume.pdf` with your new resume
2. Keep the same filename OR update the path in `/client/src/pages/Home.tsx`:
   ```javascript
   // Line ~143
   onClick={() => window.open('/Chetan_Chhetri_Resume.pdf', '_blank')}
   ```

## 🔗 Updating Social Links

**File Location:** `/client/src/pages/Home.tsx`

### GitHub Link
Find and update (around line 183):
```javascript
<a href="https://github.com/Chetan-chhetri" target="_blank" rel="noopener noreferrer">
```

### LinkedIn Link
Find and update (around line 188):
```javascript
<a href="https://linkedin.com/in/chetanchhetri" target="_blank" rel="noopener noreferrer">
```

### Email Address
Find and update (around line 193):
```javascript
<a href="mailto:cchhetri@my.bridgeport.edu">
```

Also update in footer (around line 365):
```javascript
<a href="mailto:cchhetri@my.bridgeport.edu">
```

## 🎨 Updating Project Information

**File Locations:**
- `/client/src/pages/Home.tsx` - Project cards on homepage
- `/client/src/pages/ProjectDetail.tsx` - Detailed project pages

### Homepage Project Cards
Edit the `projects` array (around line 53):
```javascript
const projects = [
  {
    id: "project-url-slug",           // URL path
    title: "Project Title",
    description: "Short description",
    category: "AI/ML",
    image: "https://image-url.jpg",   // Replace with your image
    techStack: ["Tech1", "Tech2"]
  }
]
```

### Project Detail Pages
Edit the `projectData` object in `/client/src/pages/ProjectDetail.tsx` (around line 12):
```javascript
"project-url-slug": {
  title: "Full Project Title",
  subtitle: "Project Subtitle",
  image: "https://image-url.jpg",     // Project hero image
  category: "AI/ML",
  techStack: ["Tech1", "Tech2"],
  problem: "Problem description",
  approach: "Your approach",
  architecture: "Architecture details",
  results: "Results achieved"
}
```

## 🔗 Adding Project Links (GitHub & Website URLs)

### Step 1: Update Project Data in Home.tsx
**File:** `/client/src/pages/Home.tsx`

Find the `projects` array (around line 53) and uncomment/add the URL fields:

```javascript
{
  id: "motion-detector",
  title: "Motion Detector – Agentic AI System",
  description: "...",
  category: "AI/ML",
  image: "...",
  techStack: ["PyTorch", "DVRL", ...],
  // TODO: Add githubUrl: "https://github.com/yourusername/project-repo"
  // TODO: Add websiteUrl: "https://your-project-demo.com" (if applicable)
}
```

**Change to:**
```javascript
{
  id: "motion-detector",
  title: "Motion Detector – Agentic AI System",
  description: "...",
  category: "AI/ML",
  image: "...",
  techStack: ["PyTorch", "DVRL", ...],
  githubUrl: "https://github.com/YOUR_USERNAME/motion-detector",
  websiteUrl: "https://motion-detector-demo.com"  // Optional
}
```

### Step 2: Uncomment ProjectCard Interface Props
**File:** `/client/src/components/ProjectCard.tsx`

Around line 12, uncomment:
```typescript
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  techStack: string[];
  githubUrl?: string;  // UNCOMMENT THIS
  websiteUrl?: string;  // UNCOMMENT THIS
}
```

### Step 3: Update Component Props Destructuring
In same file (around line 17):
```typescript
export function ProjectCard({ 
  id, title, description, category, image, techStack, 
  githubUrl, websiteUrl  // ADD THESE
}: ProjectCardProps) {
```

### Step 4: Uncomment the Link Buttons
Around line 132, remove comment markers `{/*` and `*/}`:
```typescript
<div className="flex gap-2 pt-2">
  {githubUrl && (
    <Button size="sm" variant="outline" ...>
      <Github className="w-4 h-4 mr-2" />
      Source Code
    </Button>
  )}
  {websiteUrl && (
    <Button size="sm" variant="outline" ...>
      <ExternalLink className="w-4 h-4 mr-2" />
      Live Demo
    </Button>
  )}
</div>
```

## 🖼️ Updating Project Images

**Options:**
1. **Use Unsplash URLs** (current method):
   ```javascript
   image: "https://images.unsplash.com/photo-xxxxx?w=800&q=80"
   ```

2. **Use local images**:
   - Place images in `/client/public/` folder
   - Reference as: `image: "/my-project-image.png"`

3. **Use attached assets**:
   - Upload to `/attached_assets/` folder
   - Import in component: `import projectImg from "@assets/image.png"`
   - Use: `image: projectImg`

## 🎯 Adding New Projects

1. Add to `projects` array in `/client/src/pages/Home.tsx`
2. Add matching entry in `projectData` in `/client/src/pages/ProjectDetail.tsx`
3. Ensure the `id` field matches in both files

## 🛠️ Updating Skills/Technologies

**File Location:** `/client/src/pages/Home.tsx`

Edit the `techStack` array (around line 56):
```javascript
const techStack = [
  { 
    icon: SiPython,              // Icon component
    label: "Python",             // Display name
    category: "Languages",       // Category label
    color: "text-blue-400"       // Tailwind color class
  }
]
```

**Available Icon Sources:**
- Lucide React: `import { IconName } from "lucide-react"`
- Simple Icons: `import { SiIconName } from "react-icons/si"`

## 📝 Quick Reference - Key Files

| What to Update | File Location |
|----------------|---------------|
| Resume PDF | `/client/public/Chetan_Chhetri_Resume.pdf` |
| Social Links | `/client/src/pages/Home.tsx` (lines ~183-193, ~365) |
| Projects List | `/client/src/pages/Home.tsx` (line ~25) |
| Project Details | `/client/src/pages/ProjectDetail.tsx` (line ~12) |
| Skills/Tech Stack | `/client/src/pages/Home.tsx` (line ~56) |
| Experience | `/client/src/pages/Home.tsx` (line ~72) |
| Education | `/client/src/pages/Home.tsx` (line ~85) |

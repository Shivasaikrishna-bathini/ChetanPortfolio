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
Edit the `projects` array (around line 25):
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

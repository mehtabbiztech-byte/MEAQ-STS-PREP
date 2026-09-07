# MATB STS PREP — Pakistani Competitive Exams Platform

> **"Practice Smart. Prepare Better. Crack Your Exam."**

A modern, high-speed educational platform built for Pakistani students, civil service candidates, and government job aspirants preparing for **CSS, PMS, FPSC, PPSC, SPSC (CCE), KPPSC, BPSC, NTS, STS (IBA Sukkur), FIA, Police, and Defense forces exams**.

---

## 🚀 One-Click Vercel Deployment via GitHub

### Prerequisites
1. A **GitHub** account.
2. A **Vercel** account ([vercel.com](https://vercel.com)).

### Step 1: Push Project to Your GitHub Repository
Run the following commands in your local project terminal:

```bash
git init
git add .
git commit -m "Initial commit: MATB STS PREP platform"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

---

### Step 2: Import into Vercel
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository (`MATB STS PREP`).
4. Vercel will automatically detect **Vite** as the framework preset:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

---

### Step 3: API Keys & Environment Variables

#### ⚡ Are Any API Keys Mandatory?
**NO.** The platform is architected to run **100% standalone out of the box**. All question banks, past papers, 16 commission portals, quizzes with PPSC negative marking, mistakes notebooks, and bookmarks are pre-bundled and function without requiring any external database or paid API keys.

#### 🔑 Optional Environment Variables
If you want to configure optional enhancements, navigate to **Project Settings → Environment Variables** in Vercel and add:

| Environment Variable | Required? | Description & Purpose |
| :--- | :---: | :--- |
| `VITE_APP_URL` | Optional | Your production URL (e.g. `https://matbstsprep.app` or `https://matb-sts-prep.vercel.app`) for OpenGraph and social sharing. |
| `VITE_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 tracking ID (`G-XXXXXXXXXX`) to track test takers and page views. |

---

### Step 4: Deploy
Click **"Deploy"**. Within ~45 seconds, your platform will be live with free automatic SSL, worldwide CDN distribution, and custom domain support!

---

## 🌐 Changing From Preview URL to `matbstsprep.app`

Follow these 3 exact steps in Vercel to replace your preview URL (`matb-sts-prep.vercel.app`) with your official brand domain (**`matbstsprep.app`**):

### Step 1: Add `matbstsprep.app` in Vercel
1. Open your Vercel Dashboard at [vercel.com/dashboard](https://vercel.com/dashboard).
2. Click on your project **`matb-sts-prep`**.
3. Go to **Settings** → **Domains** (in the left-hand navigation).
4. In the text field, enter:
   ```text
   matbstsprep.app
   ```
   and click **Add**.
5. Vercel will ask if you want to also add `www.matbstsprep.app` with a redirect. Choose **"Add matbstsprep.app and redirect www.matbstsprep.app to it"** (Recommended).

---

### Step 2: Configure DNS Records at Your Domain Registrar
Log in to where you registered `matbstsprep.app` (e.g. Google Domains / Squarespace, Namecheap, Cloudflare, GoDaddy, Hostinger, etc.) and add these two DNS records:

#### 1. For Root Domain (`matbstsprep.app`):
| Record Type | Name / Host | Value / Target | TTL |
| :---: | :---: | :---: | :---: |
| **A** | `@` (or leave empty) | `76.76.21.21` | Auto / 3600 (1 hour) |

#### 2. For WWW Alias (`www.matbstsprep.app`):
| Record Type | Name / Host | Value / Target | TTL |
| :---: | :---: | :---: | :---: |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Auto / 3600 (1 hour) |

> 🔒 **Crucial for `.app` Domains**:
> The `.app` top-level domain is part of Google's **HSTS Preload List**, requiring mandatory HTTPS. You do not need to purchase an SSL certificate; Vercel will automatically provision and install a free Let's Encrypt SSL certificate as soon as the A record resolves!

---

### Step 3: Verification & Go Live
- Vercel monitors DNS propagation automatically (typically ready in 2–15 minutes).
- Once you see green checkmarks next to `matbstsprep.app` in your Vercel Domains list, your app is live at **https://matbstsprep.app**!
- Any visitors accessing `matb-sts-prep.vercel.app` or `www.matbstsprep.app` will seamlessly load your application.

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production preview
npm run build
npm run preview
```

---

## 👨‍💻 Founder & Lead Developer

- **Mehtab Ali**
- **Email**: [mehtabbiztech@gmail.com](mailto:mehtabbiztech@gmail.com)
- **Role**: Founder, Academic Lead & Full-Stack Platform Engineer

---

## 📁 Key Features Included
- **50,000+ Verified MCQs** across 20 core subjects (Pak Affairs, General Knowledge, Science, Islamiyat, English, etc.)
- **16 Commission Portals**: CSS, PMS, FPSC, PPSC, SPSC, KPPSC, BPSC, STS IBA Sukkur, FIA, and more.
- **PPSC 0.25 Negative Marking Engine**: Authentic examination penalty simulation.
- **Mistakes Notebook**: Automatic logging of wrong answers for focused revision.
- **Solved Past Papers (2020–2025)**: Authentic memory-transcribed past papers with gazette solutions.
- **Current Affairs Digest**: Pakistan & International geopolitical updates.
- **Dark Mode Parity & Mobile First**: Fully responsive on mobile, tablet, and desktop.

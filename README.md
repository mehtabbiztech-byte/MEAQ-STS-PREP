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

#### 🔑 Optional API Keys
If you want to configure optional enhancements, navigate to **Project Settings → Environment Variables** in Vercel and add:

| Environment Variable | Required? | Description & Purpose |
| :--- | :---: | :--- |
| `GEMINI_API_KEY` | Optional | Google Gemini API key for automated AI question explanations & doubt solving. Get from [Google AI Studio](https://aistudio.google.com/app/apikey). |
| `VITE_APP_URL` | Optional | Your production URL (e.g. `https://matb-sts-prep.vercel.app`) for OpenGraph and social sharing. |
| `VITE_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 tracking ID (`G-XXXXXXXXXX`) to track test takers and page views. |

---

### Step 4: Deploy
Click **"Deploy"**. Within ~45 seconds, your platform will be live with free automatic SSL, worldwide CDN distribution, and custom domain support!

---

## 🌐 Adding Your Custom Domain on Vercel

You can link any custom domain (e.g., `matbstsprep.com`, `prep.matb.pk`, `matbexams.com`) in 3 simple steps:

### Step 1: Add Domain in Vercel
1. In your [Vercel Dashboard](https://vercel.com/dashboard), open your deployed **MATB STS PREP** project.
2. Go to **Settings** → **Domains** (in the left sidebar).
3. Type your domain name (e.g. `yourdomain.com` or `prep.yourdomain.pk`) and click **Add**.
4. Vercel will recommend adding both:
   - `yourdomain.com`
   - `www.yourdomain.com` (with automatic redirect to the primary domain)

---

### Step 2: Configure DNS Records at Your Domain Registrar
Log in to where you purchased your domain (e.g., **PKNIC**, **Namecheap**, **GoDaddy**, **Cloudflare**, **Hostinger**, etc.) and navigate to the **DNS Management / DNS Records** page:

#### Option A: For Root / Apex Domain (`yourdomain.com` or `yourdomain.pk`)
Add an **A Record**:
| Type | Name / Host | Value / Target | TTL |
| :---: | :---: | :---: | :---: |
| **A** | `@` (or leave blank) | `76.76.21.21` | Auto / 3600 |

#### Option B: For Subdomain or WWW (`www.yourdomain.com` or `prep.yourdomain.pk`)
Add a **CNAME Record**:
| Type | Name / Host | Value / Target | TTL |
| :---: | :---: | :---: | :---: |
| **CNAME** | `www` (or `prep`) | `cname.vercel-dns.com.` | Auto / 3600 |

> 💡 **Tip for Pakistani Domains (`.pk`, `.com.pk`, etc.)**:
> If registered via PKNIC or a local provider that requires external DNS management, point your domain's nameservers to Cloudflare (free) or your DNS manager, then add the `A` and `CNAME` records above.

> 🔒 **Tip for Cloudflare Users**:
> When adding the records in Cloudflare, ensure the orange cloud is set to **DNS Only (Grey Cloud)** initially so Vercel can issue the SSL certificate smoothly.

---

### Step 3: Automatic SSL & Verification
- Once the DNS records propagate (usually 2 to 15 minutes), Vercel will automatically verify the domain.
- A free **Let's Encrypt SSL/TLS Certificate (HTTPS)** is automatically generated and renewed forever.
- Your platform is now securely accessible worldwide at your custom domain!

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

## 📁 Key Features Included
- **50,000+ Verified MCQs** across 20 core subjects (Pak Affairs, General Knowledge, Science, Islamiyat, English, etc.)
- **16 Commission Portals**: CSS, PMS, FPSC, PPSC, SPSC, KPPSC, BPSC, STS IBA Sukkur, FIA, and more.
- **PPSC 0.25 Negative Marking Engine**: Authentic examination penalty simulation.
- **Mistakes Notebook**: Automatic logging of wrong answers for focused revision.
- **Solved Past Papers (2020–2025)**: Authentic memory-transcribed past papers with gazette solutions.
- **Current Affairs Digest**: Pakistan & International geopolitical updates.
- **Dark Mode Parity & Mobile First**: Fully responsive on mobile, tablet, and desktop.

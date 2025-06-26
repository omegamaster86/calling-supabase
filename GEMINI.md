# Project Context for jara-supabase
    
## 1. Project Overview
This is a web application using Next.js and Supabase for user authentication and data
management.

## 2. Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Backend/Auth:** Supabase
- **Styling:** Tailwind CSS
- **UI:** shadcn/ui
 
## 3. Important Commands
- **Run development server:** `npm run dev`
- **Create production build:** `npm run build`
- **Run linter:** `npm run lint`

## 4. Architecture & Conventions
- This project uses the **App Router**, not the `pages` router.
- Supabase clients are separated for client and server components:
- Client: `lib/supabase/client.ts`
- Server: `lib/supabase/server.ts`
- Middleware: `lib/supabase/middleware.ts`
- UI components from shadcn/ui are located in `components/ui`.
- Follow existing coding style and file structure.
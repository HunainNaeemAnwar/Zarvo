# Zarvo

AI-powered web app for Pakistani farmers. Solves two problems:

1. Crop disease identification with instant Urdu treatment advice
2. Flood and weather advance warnings

Simple online web app. No PWA, no offline support. Works in browser.

---

## Tech Stack

### Frontend (Next.js)

- Framework: Next.js 15 with App Router
- Language: TypeScript (strict mode on)
- Styling: Tailwind CSS v4 with custom theme
- Auth: Better Auth (phone OTP + Google)
- State: Zustand (chat store, auth store, theme store, language store)

### Backend (FastAPI)

- Framework: FastAPI (Python 3.12+)
- Database: PostgreSQL 16 with pgvector extension
- ORM: SQLAlchemy (async) + Alembic for migrations
- AI: Google Gemini API (vision, text, embeddings)

### External APIs

- Gemini: Image analysis + RAG chat + Urdu embeddings
- Open-Meteo: 7-day weather forecast (free, no API key)
- Google Flood Hub: Hyperlocal flood alerts
- Cloudinary: Image storage and optimization

### Infrastructure

- Database Host: Supabase (free tier) or Railway PostgreSQL
- Frontend Host: Vercel
- Backend Host: Railway or Render
- Container: Docker Compose for local PostgreSQL

---

## Folder Structure

root/
├── frontend/ # Next.js App
│ ├── fonts/
│ │ ├── NotoNastaliqUrdu-Regular.woff2
│ │ └── NotoNastaliqUrdu-Bold.woff2
│ ├── locales/
│ │ ├── ur.json # Urdu translations
│ │ └── en.json # English translations
│ └── src/
│ ├── app/ # App Router pages
│ │ ├── layout.tsx # Root layout (ChatWidget here)
│ │ ├── (auth)/ # Login + Onboarding (no BottomNav)
│ │ │ ├── login/page.tsx
│ │ │ └── onboarding/page.tsx
│ │ └── (main)/ # Home, Library, Weather, Profile (with BottomNav)
│ │ ├── layout.tsx # Main layout with BottomNav
│ │ ├── home/page.tsx
│ │ ├── library/
│ │ │ ├── page.tsx
│ │ │ └── [id]/page.tsx
│ │ ├── weather/page.tsx
│ │ └── profile/page.tsx
│ ├── components/
│ │ ├── ui/ # Button, Input, Card, BottomNav, Modal
│ │ ├── layout/ # Header, MobileContainer, RTLWrapper
│ │ ├── chat/ # ChatWidget (floating, global)
│ │ │ ├── ChatWidget.tsx
│ │ │ ├── ChatPanel.tsx
│ │ │ ├── ChatHeader.tsx
│ │ │ ├── ChatMessages.tsx
│ │ │ ├── ChatBubble.tsx
│ │ │ ├── UserBubble.tsx
│ │ │ ├── AIBubble.tsx
│ │ │ ├── ChatInput.tsx
│ │ │ ├── VoiceRecordButton.tsx
│ │ │ ├── ImagePreview.tsx
│ │ │ ├── DiagnosisCard.tsx
│ │ │ ├── TypingIndicator.tsx
│ │ │ └── FloatingButton.tsx
│ │ ├── home/ # Dashboard components
│ │ │ ├── WeatherMiniCard.tsx
│ │ │ ├── QuickActions.tsx
│ │ │ ├── AISuggestionCard.tsx
│ │ │ └── FloodAlertBanner.tsx
│ │ ├── disease/ # Library + Detail components
│ │ │ ├── DiseaseCard.tsx
│ │ │ ├── DiseaseGrid.tsx
│ │ │ ├── SearchBar.tsx
│ │ │ ├── FilterChips.tsx
│ │ │ ├── DiseaseHero.tsx
│ │ │ └── SymptomsSection.tsx
│ │ ├── weather/ # Weather display components
│ │ │ ├── CurrentWeather.tsx
│ │ │ ├── ForecastList.tsx
│ │ │ ├── HourlyForecast.tsx
│ │ │ ├── FloodAlertCard.tsx
│ │ │ ├── AIAdvisory.tsx
│ │ │ └── IrrigationSchedule.tsx
│ │ ├── profile/ # Profile + Settings components
│ │ │ ├── ProfileHeader.tsx
│ │ │ ├── FarmInfoGrid.tsx
│ │ │ ├── SettingsList.tsx
│ │ │ └── VoiceUpdateButton.tsx
│ │ └── onboarding/ # Voice onboarding components
│ │ ├── VoiceQuestion.tsx
│ │ ├── TranscriptionDisplay.tsx
│ │ ├── SuggestionChips.tsx
│ │ └── ProgressBar.tsx
│ ├── hooks/ # Custom hooks
│ │ ├── useAuth.ts
│ │ ├── useChat.ts
│ │ ├── useChatWidget.ts
│ │ ├── useVoice.ts
│ │ ├── useWeather.ts
│ │ ├── useGeolocation.ts
│ │ ├── useSpeechToText.ts
│ │ ├── useTextToSpeech.ts
│ │ ├── useOnlineStatus.ts
│ │ └── useTranslation.ts
│ ├── lib/ # Utilities & config
│ │ ├── auth.ts
│ │ ├── auth-client.ts
│ │ ├── api.ts
│ │ ├── utils.ts
│ │ ├── constants.ts
│ │ └── urdu.ts
│ ├── stores/ # Zustand stores
│ │ ├── chat-store.ts
│ │ ├── auth-store.ts
│ │ ├── theme-store.ts
│ │ └── language-store.ts
│ ├── types/ # TypeScript interfaces
│ │ ├── disease.ts
│ │ ├── user.ts
│ │ ├── chat.ts
│ │ ├── weather.ts
│ │ ├── farm.ts
│ │ └── api.ts
│ └── styles/
│ └── globals.css
│
├── backend/ # FastAPI App
│ ├── app/
│ │ ├── main.py
│ │ ├── core/
│ │ │ ├── config.py
│ │ │ ├── database.py
│ │ │ ├── security.py
│ │ │ └── dependencies.py
│ │ ├── models/
│ │ │ ├── base.py
│ │ │ ├── user.py
│ │ │ ├── disease.py
│ │ │ ├── farm_profile.py
│ │ │ ├── chat_history.py
│ │ │ └── weather_alert.py
│ │ ├── schemas/
│ │ │ ├── user.py
│ │ │ ├── disease.py
│ │ │ ├── chat.py
│ │ │ ├── weather.py
│ │ │ └── farm.py
│ │ ├── api/v1/
│ │ │ ├── router.py
│ │ │ └── endpoints/
│ │ │ ├── health.py
│ │ │ ├── diseases.py
│ │ │ ├── chat.py
│ │ │ ├── weather.py
│ │ │ └── farm.py
│ │ ├── services/
│ │ │ ├── gemini_service.py
│ │ │ ├── rag_service.py
│ │ │ ├── weather_service.py
│ │ │ ├── flood_service.py
│ │ │ └── cloudinary_service.py
│ │ └── scripts/
│ │ ├── seed_diseases.py
│ │ └── generate_embeddings.py
│ ├── alembic/
│ ├── requirements.txt
│ └── .env
│
├── docker-compose.yml
└── .gitignore

---

## Key Design Decisions

### Chat Widget (NOT a separate route)

- Chat is a floating widget, NOT a /chat page
- Component: ChatWidget.tsx lives in root layout.tsx
- Floating button bottom-right (green circle, chat icon)
- Click opens slide-up panel (80% screen height)
- Open state managed globally via Zustand chat-store
- Messages persist across page navigation
- Unread indicator on floating button when panel closed

### Urdu + English Language Support

- Font: Noto Nastaliq Urdu (loaded locally in /fonts)
- Translation files: locales/ur.json and locales/en.json
- Language toggle: Login page + Profile settings
- Urdu: direction RTL, English: direction LTR
- CSS logical properties (padding-inline instead of padding-left/right)
- Default language: Browser detect, fallback Urdu
- AI responses follow selected language

### Light/Dark Theme

- Tailwind class-based dark mode
- Toggle in profile settings
- Preference saved to localStorage
- Default: Light mode

### Mobile-First Design

- Container max-width 430px, centered on desktop
- Bottom Navigation with 4 items: Home, Library, Weather, Profile
- Touch targets minimum 44x44px

### Database Design

- user: Better Auth managed
- farm_profile: crop_type, land_size, soil_type, irrigation_method
- disease: name_ur, name_en, symptoms_ur, treatment_ur, prevention_ur, image_url, embedding
- chat_message: user_id, role, content, image_url, diagnosis_json
- weather_alert: user_id, alert_type, message_ur

---

## Color Theme

Light Mode:

- Primary Green: #166534
- Primary Light: #DCFCE7
- Secondary Brown: #92400E
- Accent Yellow: #F59E0B
- Danger Red: #DC2626
- Background: #FFFBEB
- Surface: #FFFFFF
- Text Primary: #052E16
- Text Secondary: #6B7280

Dark Mode:

- Background: #0A1F0F
- Surface: #132A1A
- Text Primary: #DCFCE7
- Text Secondary: #9CA3AF
- Border: #374151

---

## RAG Pipeline Flow

User sends: Image + Urdu text question
Step 1: Gemini Vision API analyzes image (crop type, visible symptoms)
Step 2: Gemini Embedding API converts Urdu query to vector (1536-dim)
Step 3: pgvector similarity search finds top-3 matching diseases from library
Step 4: Context assembled from Vision Analysis + Retrieved Diseases + User Query
Step 5: Gemini Text API generates Urdu response with disease name, confidence, symptoms, treatment, prevention
Step 6: Response streamed via SSE, DiagnosisCard rendered in chat

---

## Voice Features

### Voice Onboarding

- 3 questions one-by-one
- Web Speech API (lang: ur-PK)
- Live transcription display
- Suggestion chips as fallback
- Progress bar 33 to 66 to 100 percent
- Saved to farm_profile table

### Voice in Chat

- Mic button triggers Web Speech API
- Urdu speech transcribed to text
- AI response played via Edge TTS

---

## Backend API Endpoints

Health:

- GET /api/v1/health

Diseases:

- GET /api/v1/diseases (query params: search, crop, page, limit)
- GET /api/v1/diseases/id

Chat:

- POST /api/v1/chat/text (streaming SSE)
- POST /api/v1/chat/diagnose (streaming SSE)
- GET /api/v1/chat/history

Weather:

- GET /api/v1/weather/current (query: lat, lng)
- GET /api/v1/weather/forecast (query: lat, lng)
- GET /api/v1/weather/flood-alerts (query: lat, lng)

Farm Profile:

- POST /api/v1/farm/profile
- GET /api/v1/farm/profile

---

## Common Commands

Frontend:

- cd frontend && npm install
- npm run dev (localhost:3000)
- npm run build

Backend:

- cd backend && python -m venv venv && source venv/bin/activate
- pip install -r requirements.txt
- uvicorn app.main:app --reload (localhost:8000)

Database:

- docker-compose up -d
- cd backend && alembic upgrade head
- python app/scripts/seed_diseases.py

Testing:

- cd backend && pytest tests/ -v
- cd frontend && npm test

---

## Environment Variables

Backend (.env):

- DATABASE_URL=postgresql+asyncpg://user:pass@localhost:5432/zarvo
- GEMINI_API_KEY=your_key
- CLOUDINARY_CLOUD_NAME=your_cloud
- CLOUDINARY_API_KEY=your_key
- CLOUDINARY_API_SECRET=your_secret
- GOOGLE_FLOOD_HUB_API_KEY=your_key
- FRONTEND_URL=http://localhost:3000

Frontend (.env.local):

- NEXT_PUBLIC_BACKEND_URL=http://localhost:8000/api/v1
- NEXT_PUBLIC_APP_NAME=Zarvo

---

## Boundaries (Do NOT Touch)

- Never modify files in node_modules/ or venv/
- Never commit .env files
- API keys always in .env, never hardcoded
- Database schema changes only via Alembic migrations
- Urdu font files in /fonts, never load from CDN



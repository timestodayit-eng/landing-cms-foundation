# Landing CMS Foundation v0.2

Next.js + Hostinger MySQL starter for your category-based landing page CMS.

## Fixed categories
- Pro Landing Page
- Call Landing Page
- Trust Gain Landing Page
- FOMO Landing Page
- Review Landing Page

Each category can contain unlimited named pages.

## Included now
- Admin dashboard
- Fixed category menus
- Category-wise page list
- Create / Edit / Duplicate
- Draft / Publish
- Public URL `/p/[slug]`
- Basic drag-and-drop section ordering
- Block editor + live preview
- Hostinger MySQL schema

## Not finished yet
- Admin login
- Media uploader
- Independent master-template editor for each category
- Advanced design controls
- GTM / Meta / GA4 settings screen
- Analytics dashboard
- Version history

## Setup
1. Import `sql/schema.sql` into Hostinger MySQL.
2. Copy `.env.example` to `.env.local` and fill DB credentials.
3. Run `npm install`.
4. Run `npm run dev` locally, or `npm run build && npm start` on Hostinger.
5. Open `/admin`.

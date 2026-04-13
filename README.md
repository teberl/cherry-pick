# Cherry Pick

Custody Sharing App — Angular PWA + Supabase

## Prerequisites

- Node.js 18+
- Angular CLI 17: `npm install -g @angular/cli@17`

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure Supabase**

   Update `src/environments/environment.development.ts` with your Supabase project credentials:
   ```ts
   export const environment = {
     production: false,
     supabaseUrl: 'https://<your-project-id>.supabase.co',
     supabaseAnonKey: '<your-anon-key>',
   };
   ```

3. **Run the development server**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200`.

## PWA

The app ships with `@angular/pwa`. The service worker (`ngsw-worker.js`) and `manifest.webmanifest` are generated automatically during `ng build`.

## Testing

```bash
ng test
```

## Build

```bash
ng build
```

Production artifacts are output to `dist/cherry-pick/browser/`.

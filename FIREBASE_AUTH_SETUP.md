# Enable sign-in for MEQSA

The web app is connected to Firebase project `gen-lang-client-0970461897`. Error `auth/operation-not-allowed` means the requested provider is disabled in that project.

1. Open [Firebase Authentication](https://console.firebase.google.com/project/gen-lang-client-0970461897/authentication/providers).
2. Click **Get started** if Authentication has not been initialized.
3. Open **Email/Password**, enable **Email/Password**, and save.
4. Open **Google**, enable it, select a project support email, and save.
5. Under **Authentication → Settings → Authorized domains**, add the production Vercel domain if it is not already listed.
6. Return to the website, refresh once, and sign in.

Do not disable Firestore security or expose an administrator password as a workaround. CMS access still requires an `admins/<Firebase UID>` document with Boolean field `active: true`.

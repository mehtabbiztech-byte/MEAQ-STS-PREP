# MEQSA Content Management System

## One-time Firebase setup

1. Deploy `firestore.rules` and `firestore.indexes.json` to the Firebase project configured in `firebase-applet-config.json`.
2. Sign in to the website once, then open `/admin`. The access screen displays your Firebase UID.
3. In Firestore, create document `admins/<YOUR_UID>` with Boolean field `active` set to `true`.
4. Reload `/admin`.

The browser cannot promote itself to administrator. The rules deliberately deny client writes to `admins`.

## Collections

- `cms_mcqs`: individually managed questions with duplicate detection.
- `cms_past_papers`: paper metadata plus a complete question array.
- `cms_lessons`: Subject → Chapter → Topic → Lesson content.

All records include workflow status, source URLs, syllabus references, editor IDs and timestamps. Public pages listen to Published records whose scheduled publication time has arrived, so edits appear without a Vercel deployment.

## Import formats

JSON imports accept arrays matching the form fields. MCQ CSV columns are:

`question,optionA,optionB,optionC,optionD,correctIndex,explanation,category,examTags,sourceUrl`

`correctIndex` is zero-based in imports (`0` = option A). For commas or multiline text, use JSON; the lightweight CSV reader intentionally supports simple rows only.

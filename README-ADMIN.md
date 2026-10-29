# Updating the site without code (one-time setup, ~10 minutes)

The site reads three tabs of a Google Sheet: **Projects**, **Papers**, **Sessions**.
Once connected, you add a row in the sheet and the site updates within ~5 minutes.
No terminal, no git push, no `npm run deploy`.

## 1. Create the sheet
1. Go to https://sheets.google.com and click **Blank spreadsheet**.
2. **File → Import → Upload** → choose `Portfolio-Content-Sheet.xlsx` → **Replace spreadsheet**.
3. **File → Settings → Locale → United States** (so dates read correctly). Save.

## 2. Publish each tab
Repeat for **Projects**, **Papers** and **Sessions**:
1. Click the tab.
2. **File → Share → Publish to web**.
3. In the first dropdown choose the tab's name (not "Entire document"); in the second choose **Comma-separated values (.csv)**.
4. Click **Publish** and copy the link it gives you.

## 3. Paste the links into the site (the last time you touch code)
Open `src/data/config.js` and paste the three links between the quotes:

```js
export const SHEET = {
  projects: 'https://docs.google.com/spreadsheets/d/e/....output=csv',
  papers:   'https://docs.google.com/spreadsheets/d/e/....output=csv',
  sessions: 'https://docs.google.com/spreadsheets/d/e/....output=csv',
  editUrl:  'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit',
}
```
Also fill `linkedin` and `formspreeId` in the same file. Then once:
```
npm run deploy
```
Open `yoursite/admin` and all three rows should say **Live from sheet**.

## Everyday use
- **New project**: add a row to *Projects* (or use the Row builder on `/admin`, copy, paste).
  `status` = `completed`, or `in-progress` to show it in the "In progress" strip.
  Figures load by themselves from the `5_figures` folder of the repo in `githubLink`.
- **New paper / training session**: add a row to *Papers* / *Sessions*.
- Lists separated by `;` (methods, tools). Headline numbers in Papers use `31|surgeons;4.2%|adequate equipment`.
- Do not rename or reorder the header row. If the sheet is ever empty or unreachable, the site falls back to the built-in data, so it never breaks.

## Notes
- Only people with edit access to your Google Sheet can change the site's content. Keep it private (published CSVs are public read-only, so don't put anything confidential in it).
- Code changes (design, new pages) still need `git push` + `npm run deploy`.

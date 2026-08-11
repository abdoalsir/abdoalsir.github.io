#!/usr/bin/env node
/**
 * Local admin tool — run with: npm run admin
 *
 * Prompts you for a new project's details, appends it to
 * src/data/projects.json in the correct format, then runs
 * git add / commit / push so the live site updates automatically
 * once GitHub Pages rebuilds.
 *
 * Nothing here is public or deployed — it only runs on your own
 * machine, using your own git credentials.
 */

import { createInterface } from 'node:readline/promises'
import { readFile, writeFile } from 'node:fs/promises'
import { execSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'projects.json')

const CATEGORIES = [
  'infectious-disease',
  'mental-health',
  'non-communicable-diseases',
  'medical-education',
  'maternal-child-health',
  'healthcare-systems',
]

const rl = createInterface({ input: process.stdin, output: process.stdout })
const ask = (q) => rl.question(q)

function splitList(input) {
  return input
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

async function main() {
  console.log('\n=== Add a new research project ===\n')

  const raw = await readFile(DATA_PATH, 'utf-8')
  const projects = JSON.parse(raw)
  const nextId = projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1

  const shortTitle = await ask('Short title (for the card): ')
  const fullTitle = await ask('Full title (for the modal): ')

  console.log(`\nCategories: ${CATEGORIES.join(' | ')}`)
  let category = await ask('Category slug: ')
  while (!CATEGORIES.includes(category)) {
    category = await ask(`Not a valid category. Choose one of: ${CATEGORIES.join(', ')}\nCategory slug: `)
  }

  const degreeType = await ask('Degree type (MBBS / MD / Clinical Master / Doctorate / Pharmacy): ')
  const year = parseInt(await ask('Year: '), 10)
  const sampleSize = await ask('Sample size (e.g. "N = 250 patients"): ')
  const description = await ask('One-sentence description (who was studied + key finding): ')
  const researchQuestion = await ask('Research question (one sentence): ')
  const methods = splitList(await ask('Methods (comma-separated): '))
  const tools = splitList(await ask('Tools (comma-separated, e.g. Python, SPSS, pandas): '))
  const githubLink = await ask('GitHub repo URL: ')
  const presentationLink = (await ask('Presentation link (leave blank if none): ')).trim() || null

  const newProject = {
    id: nextId,
    shortTitle,
    fullTitle,
    category,
    degreeType,
    year,
    sampleSize,
    description,
    researchQuestion,
    methods,
    tools,
    githubLink,
    presentationLink,
    hasPresentation: Boolean(presentationLink),
  }

  console.log('\n--- Review ---')
  console.log(JSON.stringify(newProject, null, 2))
  const confirm = await ask('\nAdd this project and publish it? (y/n): ')

  if (confirm.trim().toLowerCase() !== 'y') {
    console.log('Cancelled — nothing was changed.')
    rl.close()
    return
  }

  projects.push(newProject)
  await writeFile(DATA_PATH, JSON.stringify(projects, null, 2) + '\n', 'utf-8')
  console.log(`\nSaved to ${DATA_PATH}`)

  try {
    execSync(`git add "${DATA_PATH}"`, { stdio: 'inherit' })
    execSync(`git commit -m "Add project: ${shortTitle}"`, { stdio: 'inherit' })
    execSync('git push', { stdio: 'inherit' })
    console.log('\nPushed. GitHub Pages will rebuild automatically — the new project will be live shortly.')
    console.log('If you want it live right now, also run: npm run deploy')
  } catch (err) {
    console.error('\nGit commit/push failed. The project was still saved locally to projects.json —')
    console.error('you can commit and push it manually whenever you\'re ready.')
    console.error(err.message)
  }

  rl.close()
}

main().catch((err) => {
  console.error(err)
  rl.close()
  process.exit(1)
})

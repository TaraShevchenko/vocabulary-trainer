import * as fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { type LanguageType, languages } from '../config'
import { DATA } from '../data'
import { type DataByLanguage, DataByLanguageSchema } from '../types'

const __dirname = dirname(fileURLToPath(import.meta.url))

function changeObjectElement(dataByLanguage: DataByLanguage, key: string, value: string): void {
    const keys = key.split('.')

    keys.forEach((key, i) => {
        if (i !== keys.length - 1) {
            if (!dataByLanguage[key]) {
                dataByLanguage[key] = {}
            }
            dataByLanguage = dataByLanguage[key] as DataByLanguage
        }
    })

    dataByLanguage[keys[keys.length - 1] ?? ''] = value
}

function updateLocalesData(locale: LanguageType, backupDir: string): void {
    try {
        const dataByLanguageOld = fs.readFileSync(join(__dirname, `../locales/${locale}.json`), 'utf-8')
        const dataByLanguage: DataByLanguage = { metadata: {}, global: {} }
        DATA.forEach((item) => {
            changeObjectElement(dataByLanguage, item.key, item[locale])
        })

        DataByLanguageSchema.parse(dataByLanguage)

        console.log(`OUTPUT -> new data for ${locale}.json is valid`)
        if (dataByLanguageOld) {
            fs.writeFileSync(join(backupDir, `from/${locale}.json`), dataByLanguageOld, 'utf-8')
        }
        fs.writeFileSync(join(backupDir, `to/${locale}.json`), JSON.stringify(dataByLanguage, null, 2), 'utf-8')
        fs.writeFileSync(join(__dirname, `../locales/${locale}.json`), JSON.stringify(dataByLanguage, null, 2), 'utf-8')
        console.log(`${locale}.json is changed successfully!`)
    } catch (error) {
        console.error('ERROR -> ', error)
    }
}

async function createBackupStructure(backupDir: string) {
    try {
        fs.mkdirSync(backupDir, { recursive: true })
        console.log('Backup folder created successfully!')
        fs.mkdirSync(`${backupDir}/from`, { recursive: true })
        console.log('Backup folder "from" created successfully!')
        fs.mkdirSync(`${backupDir}/to`, { recursive: true })
        console.log('Backup folder "to" created successfully!')
    } catch (err) {
        console.error('Error creating Backup folders:', err)
    }
}

async function handleUpdateLocales() {
    const date = new Date().getTime()
    const backupDir = join(__dirname, `../backups/${date}`)
    await createBackupStructure(backupDir)
    languages.map((language) => updateLocalesData(language, backupDir))
}

void handleUpdateLocales()

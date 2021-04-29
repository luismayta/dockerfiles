import * as path from 'path'
import slugify from 'slugify'
import fs from 'fs'

export const baseRootPath = path.join(__dirname, '../../../../')
export const baseTemplatesPath = path.join(__dirname, '../templates')

export const cleanString = (text: string): string => {
  return text.replace(/[.-_]+/g, ' ').toLowerCase()
}

export const sanitize = (text: string) => {
  return slugify(text, '_').toString()
}

export const hyphenate = (text: string): string => {
  return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

export function pathExists(path: string) {
  return fs.existsSync(path)
}

export function pathMake(path: string) {
  return fs.mkdirSync(path)
}

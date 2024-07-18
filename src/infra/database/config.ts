import mysql from 'mysql2/promise'
import { config } from 'dotenv'

config()

export const connection = mysql.createPool(process.env.DATABASE_URL as string)

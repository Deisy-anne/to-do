import express from 'express'
import { CohabitantUseCase } from './use-cases/cohabitant'

const app = express()

app.use(express.json())
app.post('/cohabitant', async (req, res) => {
  const { name, email } = req.body
  const cohabitant = await CohabitantUseCase.execute(name, email)
  res.send(JSON.stringify(cohabitant))
})

app.listen(3200, () => {
  console.log('Server is running')
})

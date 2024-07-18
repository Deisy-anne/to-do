import { randomUUID } from 'crypto'
import { Cohabitant } from '../models/cohabitant'
import { z } from 'zod'

import { CohabitantDatabase } from '../infra/database/cohabitant'

export class CohabitantUseCase {
  static async execute(name: string, email?: string) {
    const validInput = z.object({
      name: z.string(),
      email: z.string().email().optional(),
    })
    const id = randomUUID()
    const validInputOrError = validInput.parse({ name, email })
    const cohabitant = new Cohabitant(
      id,
      validInputOrError.name,
      validInputOrError.email,
    )

    await CohabitantDatabase.insert(cohabitant)
    return {
      id: cohabitant.id,
      name: cohabitant.name,
      email: cohabitant.email,
    }
  }
}

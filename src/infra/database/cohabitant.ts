import { Cohabitant } from '../../models/cohabitant'
import { connection } from './config'

export class CohabitantDatabase {
  static async insert(input: Cohabitant): Promise<void> {
    const sql = 'insert into cohabitants (id, name, email) values (?, ? ,?)'
    await connection.query(sql, [input.id, input.name, input.email])
  }
}

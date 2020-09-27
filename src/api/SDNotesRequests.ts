import { INote } from 'types/types'
import Request from 'utils/Request'
import { getUserToken } from 'utils/utils'

export default class {
  static async addNote(note: INote) {
    return Request(
      'POST',
      'store',
      {
        name: `${note.title}`,
        detail: `${note.detail}`
      },
      `Bearer ${getUserToken()}`
    )
  }

  static async getAll() {
    return Request('POST', 'display', {}, `Bearer ${getUserToken()}`)
  }
}

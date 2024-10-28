import { CrudActions, Method } from '@/types/crud'

export const BASE_ACTION = {
  data: undefined,
  loading: false,
  error: null,
  action: async () => {
    throw new Error('Not implemented')
  },
}

export const BASE_CRUD: CrudActions<undefined> = {
  create: BASE_ACTION,
  delete: BASE_ACTION,
  getItem: BASE_ACTION,
  getList: BASE_ACTION,
  update: BASE_ACTION,
}

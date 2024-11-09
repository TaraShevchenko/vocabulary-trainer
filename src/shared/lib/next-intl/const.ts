import { z } from 'zod'

import { Language } from './config'

export const DataByKeySchema = z.array(
    z.object({
        key: z.string(),
        [Language.enum.en]: z.string(),
        [Language.enum.ua]: z.string(),
        [Language.enum.ru]: z.string(),
    }),
)

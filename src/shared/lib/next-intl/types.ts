import { z } from 'zod'

import { type DataByKeySchema } from './const'
import { type Link } from './navigation'

export type DataByKey = z.infer<typeof DataByKeySchema>

export type DataByLanguage = {
    [key: string]: string | DataByLanguage
}

export type LinkProps = React.ComponentProps<typeof Link>

export const DataByLanguageSchema: z.ZodType<DataByLanguage> = z.lazy(() =>
    z.record(z.string(), z.union([z.string(), DataByLanguageSchema])),
)

import createMiddleware from 'next-intl/middleware'

import { routing } from 'shared/lib/next-intl'

export default createMiddleware(routing)

export const config = {
    matcher: ['/', '/(ua|ru|en)/:path*'],
}

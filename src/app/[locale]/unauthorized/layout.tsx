import { type Children } from 'shared/types/types'
import { RedirectLayout } from 'shared/ui/Layouts/RedirectLayout'

export default function UnauthorizedLayout({ children }: Children) {
    return <RedirectLayout>{children}</RedirectLayout>
}

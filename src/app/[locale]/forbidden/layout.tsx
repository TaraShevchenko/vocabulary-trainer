import { type Children } from 'shared/types'
import { RedirectLayout } from 'shared/ui/Layouts/RedirectLayout'

export default function ForbiddenLayout({ children }: Children) {
    return <RedirectLayout>{children}</RedirectLayout>
}

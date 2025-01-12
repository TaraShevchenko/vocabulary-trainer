import { type Children } from 'shared/types'

export default function RedirectLayout({ children }: Children) {
    return <div className="flex h-screen flex-col items-center justify-center">{children}</div>
}

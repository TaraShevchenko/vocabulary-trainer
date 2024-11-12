import { type Children } from 'shared/types/types'

export const RedirectLayout = ({ children }: Children) => {
    return <div className="flex h-screen flex-col items-center justify-center">{children}</div>
}

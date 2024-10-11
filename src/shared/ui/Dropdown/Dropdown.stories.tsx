import type { Meta, StoryObj } from '@storybook/react'
import {
    Cloud,
    CreditCard,
    Keyboard,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from 'lucide-react'

import 'shared/styles/globals.css'
import { Scroll } from 'shared/ui/ScrollArea'

import { DropdownMenu, DropdownMenuPortal, DropdownMenuSub } from './index'
import { DropdownMenuCheckboxItem } from './ui/DropdownMenuCheckboxItem'
import { DropdownMenuContent } from './ui/DropdownMenuContent'
import { DropdownMenuGroup } from './ui/DropdownMenuGroup'
import { DropdownMenuItem } from './ui/DropdownMenuItem'
import { DropdownMenuLabel } from './ui/DropdownMenuLabel'
import { DropdownMenuRadioGroup } from './ui/DropdownMenuRadioGroup'
import { DropdownMenuRadioItem } from './ui/DropdownMenuRadioItem'
import { DropdownMenuSeparator } from './ui/DropdownMenuSeparator'
import { DropdownMenuSubContent } from './ui/DropdownMenuSubContent'
import { DropdownMenuSubTrigger } from './ui/DropdownMenuSubTrigger'
import { DropdownMenuTrigger } from './ui/DropdownMenuTrigger'

const meta: Meta<typeof DropdownMenu> = {
    title: 'Shared/Dropdown',
    component: DropdownMenu,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger text={'Dropdown'} />
            <DropdownMenuContent>
                {/*TODO: integrate scrollArea and use only when really need, condition and lazy load */}
                <Scroll className="max-h-[500px] w-56 pr-1.5">
                    <DropdownMenuLabel text={'Displayed column(s)'} />
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuCheckboxItem text={'Source'} checked />
                        <DropdownMenuCheckboxItem text={'Address'} checked />
                        <DropdownMenuCheckboxItem text={'Currency'} checked />
                        <DropdownMenuCheckboxItem text={'Amount'} />
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel text={'Pagination'} />
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value="standard">
                        <DropdownMenuRadioItem text={'Standard'} value="standard" />
                        <DropdownMenuRadioItem text={'Auto'} value="auto" />
                    </DropdownMenuRadioGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel text={'My Account'} />
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem icon={User} text={'Profile'} shortcut={'⇧⌘P'} />
                        <DropdownMenuItem icon={CreditCard} text={'Billing'} shortcut={'⌘B'} />
                        <DropdownMenuItem icon={Settings} text={'Settings'} shortcut={'⌘S'} />
                        <DropdownMenuItem icon={Keyboard} text={'Keyboard shortcuts'} shortcut={'⌘K'} />
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem icon={Users} text={'Team'} />
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger icon={UserPlus} text={'Invite users'} />
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem icon={Mail} text={'Email'} />
                                        <DropdownMenuItem icon={MessageSquare} text={'Message'} />
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem icon={PlusCircle} text={'More...'} />
                                    </DropdownMenuGroup>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem icon={Plus} text={'New Team'} shortcut={'⌘+T'} />
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem text={'Support'} inset />
                        <DropdownMenuItem icon={Cloud} text={'API'} disabled />
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem icon={LogOut} text={'Log out'} shortcut={'⇧⌘Q'} />
                    </DropdownMenuGroup>
                </Scroll>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
}

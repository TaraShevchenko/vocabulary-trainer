import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

import { ICON_COLOR_BY_BUTTON_VARIANT, TEXT_PROPS_BY_BUTTON_SIZE, buttonIconVariants } from '../../model/config'
import { type ButtonContentProps } from '../../model/types'

export const ButtonContent = ({ variant, text, icon: Icon, iconProps, size, textProps }: ButtonContentProps) => {
    const { className } = iconProps ?? {}
    return (
        <>
            {!!Icon && (
                <Icon
                    {...iconProps}
                    className={cn(
                        buttonIconVariants({
                            color: ICON_COLOR_BY_BUTTON_VARIANT[variant ?? 'default'],
                        }),
                        className,
                    )}
                />
            )}
            {!!text && (
                <Text variant={TEXT_PROPS_BY_BUTTON_SIZE[size ?? 'default']} inheritColor {...textProps} text={text} />
            )}
        </>
    )
}

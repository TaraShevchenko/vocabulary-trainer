import { forwardRef } from 'react'

import { Badge } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

import { buttonVariants } from '../../model/config'
import { FilterButtonProps } from '../../model/types'
import { ButtonContent } from '../ButtonContent'

export const FiltersButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
    ({ variant, size, className, isActive, text, icon, textProps, activeFilters, ...otherProps }, ref) => {
        const activeByVariant = isActive ? variant : undefined
        return (
            <button
                className={cn(buttonVariants({ variant, activeByVariant, size }), className)}
                ref={ref}
                {...otherProps}
            >
                <ButtonContent variant={variant} size={size} icon={icon} text={text} textProps={textProps} />

                {!!activeFilters?.length && (
                    <>
                        <div data-orientation="vertical" role="none" className="h-4 w-[1px] shrink-0 bg-border" />
                        {activeFilters?.length < 3 ? (
                            activeFilters?.map((filter) => <Badge key={filter} text={filter} />)
                        ) : (
                            <Badge text={`${activeFilters?.length} selected`} />
                        )}
                    </>
                )}
            </button>
        )
    },
)
FiltersButton.displayName = 'FiltersButton'

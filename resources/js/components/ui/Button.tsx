import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md';
    href?: string;
    onClick?: (
        event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    ) => void;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

/** Primary call-to-action button. Solid jade on dark, or ghost/outline variants. */
export function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    disabled,
    loading = false,
    type = 'button',
}: ButtonProps) {
    const isDisabled = disabled || loading;
    const sizeCls =
        size === 'sm'
            ? 'text-[13px] px-4 py-[9px]'
            : 'text-[15px] px-[22px] py-[13px]';
    const variantCls = {
        primary: 'bg-jade text-[#06110D] border-jade hover:bg-jade-clair',
        secondary:
            'bg-transparent text-white border-gray-text hover:border-jade',
        ghost: 'bg-transparent text-gris-texte border-transparent hover:text-white',
    }[variant];
    const stateCls = isDisabled
        ? 'opacity-50 cursor-not-allowed pointer-events-none'
        : 'cursor-pointer';

    const className = `font-sans font-semibold leading-none tracking-[0.01em] rounded-md inline-flex items-center gap-2 no-underline border transition-colors duration-120 ${sizeCls} ${variantCls} ${stateCls}`;

    const Tag = href ? 'a' : 'button';

    return (
        <Tag
            href={href}
            type={href ? undefined : type}
            onClick={isDisabled ? undefined : onClick}
            disabled={!href ? isDisabled : undefined}
            aria-busy={loading ? 'true' : undefined}
            className={className}
        >
            {loading && (
                <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )}
            {children}
        </Tag>
    );
}

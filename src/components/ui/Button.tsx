import React from 'react';
import Link from 'next/link';

type ButtonBaseProps = {
    variant?: 'primary' | 'secondary' | 'outline';
    children?: React.ReactNode;
    className?: string;
};

type ButtonAsButton = ButtonBaseProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        href?: never;
    };

type ButtonAsLink = ButtonBaseProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const href = 'href' in props ? props.href : undefined;
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-accent hover:bg-orange-500 text-white focus:ring-accent",
        secondary: "bg-primary hover:bg-[#6d4837] text-white focus:ring-primary",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        const { href: linkHref, ...anchorProps } = props as ButtonAsLink;
        return (
            <Link href={linkHref} className={combinedClassName} {...anchorProps}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...(props as ButtonAsButton)}>
            {children}
        </button>
    );
};

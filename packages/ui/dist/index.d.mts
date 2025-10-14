import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { VariantProps } from 'class-variance-authority';

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}
declare function Card({ icon, title, description }: CardProps): react_jsx_runtime.JSX.Element;
interface CardsProps {
    children: React.ReactNode;
}
declare function Cards({ children }: CardsProps): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "icon" | "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const CodeBlock: ({ code, lang, }: {
    code: string;
    lang?: string;
}) => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Card, Cards, CodeBlock, buttonVariants };

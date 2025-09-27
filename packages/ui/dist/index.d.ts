import * as react_jsx_runtime from 'react/jsx-runtime';

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

export { Card, Cards };

import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface PProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode;
    size?: 's' | 'm' | 'l';
}
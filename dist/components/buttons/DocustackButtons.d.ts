import { ChatButtonTheme } from '@/features/bubble/types';
type DocustackButtonsProps = {
    buttonTheme?: ChatButtonTheme;
    class?: string;
    customStyle: any;
    onSubmit: (value: string) => void;
    data: {
        label: string;
        value: string;
    }[];
};
export declare const DocustackButtons: (props: DocustackButtonsProps) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=DocustackButtons.d.ts.map
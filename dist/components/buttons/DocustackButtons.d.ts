type DocustackButtonsProps = {
    buttonColor?: string;
    class?: string;
    customStyle: any;
    onSubmit: (value: string) => void;
    buttonTextColor?: string;
    buttonBackgroundColor?: string;
    data: {
        label: string;
        value: string;
    }[];
};
export declare const DocustackButtons: (props: DocustackButtonsProps) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=DocustackButtons.d.ts.map
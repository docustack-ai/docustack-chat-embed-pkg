type Props = {
    renderHTML: boolean | undefined;
    customStyle: {
        [key: string]: string;
    };
    onSubmit: (value: string) => void;
    isFullBotScreen?: boolean;
    bubbleBackgroundColor?: string;
    bubbleTextColor?: string;
    message: string;
    buttonColor?: string;
    buttonTextColor?: string;
};
export declare const DocustackMarkdown: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=DocustackMarkdown.d.ts.map
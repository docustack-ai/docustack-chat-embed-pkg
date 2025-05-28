import { ChatButtonTheme } from '@/features/bubble/types';
interface DocustackCarouselProps {
    isFullBotScreen?: boolean;
    data?: {
        data: any[];
    };
    onSubmit: (value: string) => void;
    customData?: any;
    bubbleBackgroundColor?: string;
    bubbleTextColor?: string;
    buttonTheme?: ChatButtonTheme;
}
declare const DocustackCarousel: (props: DocustackCarouselProps) => import("solid-js").JSX.Element;
export default DocustackCarousel;
//# sourceMappingURL=DocustackCarousel.d.ts.map
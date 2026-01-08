declare module 'react-vertical-timeline-component' {
  import { ReactNode, CSSProperties } from 'react';

  export interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    layout?: '1-column' | '2-columns';
    animate?: boolean;
    lineColor?: string;
  }

  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: string;
    dateClassName?: string;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    iconOnClick?: () => void;
    position?: 'left' | 'right';
    textClassName?: string;
    visible?: boolean;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}

declare module 'react-vertical-timeline-component/style.min.css' {
  const content: string;
  export default content;
}

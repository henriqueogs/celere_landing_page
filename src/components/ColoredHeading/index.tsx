import { Heading } from "./styles";

interface ColoredHeadingProps {
    gradient?: boolean;
    children: React.ReactNode;
}

export default function ColoredHeading({ gradient, children }: ColoredHeadingProps) {
    return <Heading gradient={gradient ?? false}>{children}</Heading>
}
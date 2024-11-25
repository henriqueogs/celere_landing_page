import { useEffect, useState, useRef } from "react";
import { RectangleContainer, RectanglePicture } from "./styles";

interface PictureRectangleProps {
    src: string | undefined;
}

export default function PictureRectangle({ src }: PictureRectangleProps) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // limite para animação
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <RectangleContainer ref={containerRef} isVisible={isVisible}>
            <RectanglePicture src={src} />
        </RectangleContainer>
    );
}


// import { RectangleContainer, RectanglePicture } from "./styles"

// interface PictureRectangleProps {
//     src: string | undefined
// }

// export default function PictureRectangle({ src }: PictureRectangleProps) {
//     return <RectangleContainer>
//         <RectanglePicture src={src} />
//     </RectangleContainer >
// }
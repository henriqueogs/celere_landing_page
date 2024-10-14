import { RectangleContainer, RectanglePicture } from "./styles"

interface PictureRectangleProps {
    src: string | undefined
}

export default function PictureRectangle({ src }: PictureRectangleProps) {
    return <RectangleContainer>
        <RectanglePicture src={src} />
    </RectangleContainer >
}
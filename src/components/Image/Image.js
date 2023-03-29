import ImageStyled from './ImageStyled'
import { useState, useEffect } from "react";

function Image(props) {
    const { src, alt, style } = props;
    const [selectedImage, setSelectedImage] = useState()

    useEffect(() => {
        console.log(selectedImage)
    }, [selectedImage])

    return (
        <ImageStyled style={style}>
            <img src={src} alt={alt} style={style?.img} />
            <div className="">
                <input type="file" id="file-input" name="ImageStyle"/>
                {/* <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                    }}
                /> */}
            </div>

        </ImageStyled>
    )
}

export default Image;

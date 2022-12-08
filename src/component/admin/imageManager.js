const ImageManager = () => {
    return (
        <div className="imagePage">
            <input type="file" multiple onChange={(e) => console.log(e.target.files)} />
        </div>
    )
}
export default ImageManager
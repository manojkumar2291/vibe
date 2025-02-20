const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`

const uploadImage  = async(image) => {
    // console.log(process.env.REACT_APP_CLOUD_NAME_CLOUDINARY)
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","commerce")
    formData.append('cloud_name',process.env.REACT_APP_CLOUD_NAME_CLOUDINARY)
    console.log(formData)
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })
        

    return  dataResponse.json()

}

export default uploadImage 
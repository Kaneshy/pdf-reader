'use client'
import React, { useCallback, useEffect, useState } from "react";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "@/firebase";
import axios from "axios";
import { useRouter } from "next/navigation";
import { prendas } from "@/constants/Prendas";



const UploadProductsPage = () => {
    const [img, setImg] = useState(undefined);
    const [video, setVideo] = useState(undefined);
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVideoPerc] = useState(0);
    const [inputs, setInputs] = useState({});
    const router = useRouter()
    const [adminValue, setAdminValue] = useState(false)

    const [selectedClothing, setSelectedClothing] = useState([]);

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };


    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);

        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((prev) => {
                        return { ...prev, [urlType]: downloadURL };
                    });
                });
            }
        );
    };

    useEffect(() => {
        video && uploadFile(video, "videoUrl");
    }, [video]);

    useEffect(() => {
        img && uploadFile(img, "imgUrl");
    }, [img]);

    const handleUpload = async (e) => {
        e.preventDefault();
        const data = { ...inputs, selectedClothing }
        console.log(data)

        try {
            const res = await axios.post("/api/categorie", { ...data })
            console.log('upload status', res.data)

            if (res.status === 200) {
                router.push(`/`);
            }

        } catch (error) {
            console.log('ddd', error.message)
        }
    }

    const handleClothingSelection = (clothing) => {
        if (selectedClothing.includes(clothing)) {
            // Si la prenda ya está seleccionada, la quitamos de la selección
            setSelectedClothing(selectedClothing.filter(item => item !== clothing));
        } else {
            // Si la prenda no está seleccionada, la añadimos a la selección
            setSelectedClothing([...selectedClothing, clothing]);
        }
    }

    return (
        <main>
            <div className="max-w-xl mx-auto mt-4 p-4 bg-blue-main rounded-lg">
                <h1 className='text-center  font-bold text-2xl text-white border-a1 pb-2 mb-6 '>Upload your video </h1>

                <div className="mb-4">
                    <label htmlFor="thumbnail" className=" text-gray-400 justify-around gap-x-2 font-bold mb-2 flex  ">
                        <p className="text-small-semibold"> Select thumbnail here</p>
                        <div className="bg-blue-500  text-white p-2 rounded-xl hover:bg-blue-3  ">Select form computer</div>
                    </label>

                    {
                        img && (
                            <div className="w-full h-full bg-cover bg-center">
                                <img src={URL.createObjectURL(img)} alt="thumbnail" className="w-full h-full bg-cover bg-center" />
                            </div>
                        )
                    }

                    {imgPerc > 0 ? ('Uploading ' + imgPerc + '%') : (
                        <input type="file" id="thumbnail" onChange={(e) => setImg(e.target.files[0])} className="border-gray-300 hidden" />
                    )}
                </div>
                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="title" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Title (required): </label>
                    <input type="text" id="title" name='title' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="author" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Author (required): </label>
                    <input type="text" id="author" name='author' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="link" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Link (required): </label>
                    <input type="text" id="link" name='link' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>



                <div className="mb-4 items-center border-gray-500 border p-2 w-full">
                    <label htmlFor="categorie" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Hosting (required): </label>
                    <select name='categorie' className="border w-full border-gray-300 bg-neutral-900 text-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        value={adminValue} onChange={(e) => setAdminValue(e.target.value)}
                    >
                        <option value="unisex" >Mega</option>
                        <option value="male" >Google Drive</option>
                        <option value="female" >Cloudinary</option>
                        <option value="kids" >other</option>
                    </select>
                </div>

                <section className="mb-4 border-gray-500 border p-2 w-full">
                    <div className="mb-4 border-gray-500 border p-2 w-full">
                        <h3>Prendas seleccionadas:</h3>
                    </div>
                    <div className="mb-4  border-gray-500 border select-none  p-2 w-full">
                        <div className="gap-2 p-2">
                            {selectedClothing.map((item, index) => (
                                <button
                                    style={{ margin: '5px' }}
                                    onClick={() => handleClothingSelection(item)}
                                    className="p-2 rounded bg-slate-600" key={`selectedClothing${index * 5}`}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4 border-gray-500 border   p-2 w-full">
                        <div>
                            {prendas.map((clothing, index) => (
                                <button
                                    key={`prendas${index * 8}`}
                                    style={{ margin: '5px' }}
                                    onClick={() => handleClothingSelection(clothing)}
                                    className={selectedClothing.includes(clothing) ? 'selected' : ''}
                                >
                                    <p className="p-2 rounded bg-slate-700">{clothing}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>


                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="description" className="text-small-semibold block text-gray-400 font-bold mb-2">Description:</label>
                    <textarea id="description" name='desc' onChange={handleChange} className="border-gray-500 border rounded bg-neutral-900 p-2 w-full h-24 text-white"></textarea>
                </div>
                <button

                    className="bg-blue-1 w-full hover:bg-blue-700 text-black bg-blue-500 font-bold py-2 px-4 rounded"
                    onClick={handleUpload}
                >
                    Submit
                </button>
            </div>
        </main >
    )
}



export default UploadProductsPage
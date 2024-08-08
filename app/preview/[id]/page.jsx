'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

const PreviewPage = ({ params }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                console.log(params.id)
                const res = await axios.get(`/api/book/${params.id}`);
                if (res.status === 200) {
                    setCategories(res.data);
                }
            } catch (error) {
                console.log('Error al obtener las categorías:', error.message);
            }
        };

        fetchCategories();
    }, []);

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

    return (
        <main className="bg-black">

            <section className="text-center select-none bg-[#ffefa6] p-8 flex flex-col gap-4 items-center justify-center mb-8">
                <h1 className="mt-12 text-3xl font-bold anton-regular   uppercase" >Personal Library</h1>
                <h2 className=" anton-regular text-sm text-neutral-700 " >A place for Simon Tofield to share his creative diary, often showcasing his life with 6 cats.</h2>
                <img src='/assets/cats2.png' className="w-350 rounded-t-xl h-full object-cover" alt="" />
            </section>


            <section className="grid p-4 max-w-a  pb-12 select-none ">
                {categories.map((category, index) => (
                    <a href={category.link} target='_blank' key={index} className="p-2 bg-black min-h-60  transition-all duration-300 transform text-neutral-400 items-center max-w-80 [#ffefa6] hover:scale-105 hover:text-white justify-center  flex flex-col shadow-[5px_5px_rgba(165,_181,_255,_0.4),_10px_10px_rgba(165,_181,_255,_0.3),_15px_15px_rgba(165,_181,_255,_0.2),_20px_20px_rgba(165,_181,_255,_0.1),_25px_25px_rgba(165,_181,_255,_0.05)]">
                        <img src={category.imgUrl} className="w-full  h-full object-cover" alt="" />
                        <div className="flex flex-col ">
                            <p className="p-2 anton-regular ">{category.title}</p>
                            <p>{category.author}</p>
                        </div>

                    </a>
                ))}
            </section>
        </main>
    );
};

export default PreviewPage;
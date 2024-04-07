'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

const PreviewPage = ({ params }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                console.log(params.id)
                const res = await axios.get(`http://localhost:3000/api/book/${params.id}`);
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
        <main className="">

            <section className="text-center select-none bg-[#ffefa6] p-8 flex flex-col gap-4 items-center justify-center mb-8">
                <h1 className="mt-12 text-3xl font-bold anton-regular   uppercase" >Personal Library</h1>
                <h2 className=" anton-regular text-sm text-neutral-700 " >A place for Simon Tofield to share his creative diary, often showcasing his life with 6 cats.</h2>
                <img src='/assets/cats2.png' className="w-350 rounded-t-xl h-full object-cover" alt="" />
            </section>


            <section className="grid p-4 max-w-a pb-12 ">
                {categories.map((category, index) => (
                    <a href={category.link} target='_blank' key={index} className="items-center bg- max-w-96 hover:bg-[#ffefa6] justify-center bg-neutral-100  flex flex-col">
                        <img src={category.imgUrl} className="w-full  h-full object-cover" alt="" />
                        <p className="p-2 anton-regular text-black uppercase">{category.title}</p>
                    </a>
                ))}
            </section>
        </main>
    );
};

export default PreviewPage;
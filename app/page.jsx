import { books } from "@/constants/Categories";
import Link from "next/link";
import { IoLink } from "react-icons/io5";


export default function Home() {


  return (
    <main className="min-h-screen  ">
      <section className="text-center select-none bg-[#ffefa6] p-8 flex flex-col gap-4 items-center justify-center mb-8">
        <h1 className="mt-12 text-3xl font-bold anton-regular   uppercase" >Personal Library</h1>
        <h2 className=" anton-regular text-sm text-neutral-700 " >A place for Simon Tofield to share his creative diary, often showcasing his life with 6 cats.</h2>
        <img src='/assets/cat2.png' className="w-400 rounded-t-xl h-full object-cover" alt="" />
      </section>


      <section className="max-w-a pb-12">
        <section className="grid-b p-4 ">
          {books.map((x) => {
            return (
              <Link href={"/preview/" + x.title} key={x.id} className="p-4  ">
                  <div className="p-2 bg-black bg-opacity-75 h-[450px] transition-all duration-300 transform text-neutral-400 items-center max-w-80 hover:scale-105 hover:text-white justify-center flex flex-col shadow-[5px_5px_rgba(165,_181,_255,_0.4),_10px_10px_rgba(165,_181,_255,_0.3),_15px_15px_rgba(165,_181,_255,_0.2),_20px_20px_rgba(165,_181,_255,_0.1),_25px_25px_rgba(165,_181,_255,_0.05)] ">
                    <p className=" text-white text-2xl anton-regular uppercase">{x.title}</p>
                    <img src={x.imgUrl} className="w-full h-full object-cover" alt="" />
                  </div>

              </Link>

            )
          })}
        </section>
      </section>

      <section className="text-center select-none bg-[#ffefa6] p-8 flex flex-col gap-4 items-center justify-center ">
        <h1 className="mt-12 text-3xl font-bold anton-regular   uppercase" >Personal Library</h1>
        <h2 className=" anton-regular text-sm text-neutral-700 " >A place for Simon Tofield to share his creative diary, often showcasing his life with 6 cats.</h2>
        <img src='/assets/cats1.png' className="w-400 rounded-t-xl h-full object-cover" alt="" />
        <a href="https://mega.nz/folder/FvIGRYAY#Q4SNDx5-ykAkuAfBsV4PcA" target="_blank" className="flex gap-4 items-center justify-center">
          <IoLink size={24} />
          <p className=" anton-regular text-sm text-neutral-700 " >Libros adicionales sobre un paseo por el cosmos</p>
        </a>

      </section>

    </main>
  );
}

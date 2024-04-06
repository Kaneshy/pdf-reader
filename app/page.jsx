import { books } from "@/constants/Categories";

export default function Home() {


  return (
    <main className="min-h-screen  ">
      <section className="text-center select-none bg-[#ffefa6] p-8 flex flex-col gap-4 items-center justify-center mb-8">
        <h1 className="mt-12 text-3xl font-bold anton-regular   uppercase" >Personal Library</h1>
        <h2 className=" anton-regular text-sm text-neutral-700 " >A place for Simon Tofield to share his creative diary, often showcasing his life with 6 cats.</h2>
        <img src='/assets/cat2.png' className="w-400 rounded-t-xl h-full object-cover" alt="" />
      </section>


      <section className="max-w-a pb-12">
        <section className="grid p-4 ">
          {books.map((x) => {
            return (
              <div className="items-center hover:bg-[#ffefa6] justify-center bg-neutral-100  flex flex-col">
                <img src={x.imgUrl} className="w-full  h-full object-cover" alt="" />
                <p className="p-2 anton-regular text-black uppercase">{x.title}</p>
              </div>
            )
          })}
        </section>
      </section>

      <section className="text-center select-none bg-[#ffefa6] p-8 flex flex-col gap-4 items-center justify-center ">
        <h1 className="mt-12 text-3xl font-bold anton-regular   uppercase" >Personal Library</h1>
        <h2 className=" anton-regular text-sm text-neutral-700 " >A place for Simon Tofield to share his creative diary, often showcasing his life with 6 cats.</h2>
        <img src='/assets/cats1.png' className="w-400 rounded-t-xl h-full object-cover" alt="" />
      </section>

    </main>
  );
}

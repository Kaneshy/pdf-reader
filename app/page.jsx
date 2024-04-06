import { books } from "@/constants/Categories";

export default function Home() {


  return (
    <main className="min-h-screen p-4 max-w-a ">
      <section className="text-center p-8 flex flex-col gap-4 items-center justify-center mb-8">
        <h1 className="mt-12 text-3xl font-bold anton-regular  text-white uppercase" >Personal Library</h1>
        <h2 className=" anton-regular text-neutral-600" >A place for Simon Tofield to share his creative diary, often showcasing his life with 6 cats.</h2>
      </section>



      <section className="grid  ">
        {books.map((x) => {
          return (
            <div className="items-center rounded-b-xl rounded-t-xl justify-center bg-neutral-900 flex flex-col">
              <img src={x.imgUrl} className="w-full rounded-t-xl h-full object-cover" alt="" />
              <p className="p-2 text-lg font-bold text-white uppercase">{x.title}</p>
            </div>
          )
        })}
      </section>
    </main>
  );
}

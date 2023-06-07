import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="relative h-screen mb-12">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover custom-img-animation"></div>
        <div className="relative flex flex-col items-center justify-between h-full">
          <div className="p-5 text-2xl w-screen text-black text-center outline bg-blue-300 bg-opacity-50 rounded-xl">
            Text
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat a magna non varius. Proin leo felis, euismod non porta
              eget, varius sit amet sapien.
            </div>
            <div className="pb-8">
              <button className="p-5 text-2xl bg-purple-300 rounded-xl">
                Click me
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

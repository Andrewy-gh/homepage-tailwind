import Image from 'next/image';

export default function Test() {
  return (
    <>
      <div>Testing...</div>
      <div class="box"></div>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid place-items-center">
            <Image
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="produce"
              width={250}
              height={250}
            />
          </div>
          <div className="grid place-items-center">
            <p>
              This is the section using grid. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec placerat a magna non varius.
              Proin leo felis, euismod non porta eget, varius sit amet sapien.
              Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
              nec pulvinar nisi.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap">
          <div className="grid place-items-center flex-[1_0_500px]">
            <Image
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="produce"
              width={250}
              height={250}
            />
          </div>
          <div className="flex items-center justify-center flex-[1_0_40%]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat a magna non varius. Proin leo felis, euismod non porta
              eget, varius sit amet sapien. Maecenas in nulla at leo convallis
              consectetur id a sapien. Nulla nec pulvinar nisi.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl text-center">BANNER</h3>
      </section>

      <section>
        <div className="flex flex-wrap justify-center">
          <div className="grid place-items-center flex-[0_1_max-content]">
            <Image
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="produce"
              width={250}
              height={250}
            />
          </div>
          <div className="grid place-items-center flex-[0_1_content]">
            <Image
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="produce"
              width={250}
              height={250}
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-[1_1_500px]">
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
      </section>

      <section>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="produce"
            width={250}
            height={250}
          />
        </div>
      </section>

      <section>{/* Carousel of testimonials */}</section>

      <div className="max-w-lg m-auto">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat a magna non varius. Proin leo felis, euismod non porta eget,
          varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
          id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
          volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
          Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
        </p>
        <p className="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
          lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
          finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
          sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
          Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
          Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
          purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
          consequat nulla nunc in ligula.
        </p>
        <p className="mb-12">
          Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
          porta dignissim hendrerit. Cras id velit varius, fermentum lectus
          vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
          vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
          dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
          sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
          Donec eget sodales risus, quis dignissim neque.
        </p>
      </div>
      <section className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Parralax inline
        </div>
      </section>
      <div className="max-w-lg m-auto">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat a magna non varius. Proin leo felis, euismod non porta eget,
          varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
          id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
          volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
          Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
        </p>
        <p className="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
          lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
          finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
          sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
          Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
          Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
          purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
          consequat nulla nunc in ligula.
        </p>
        <p className="mb-4">
          Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
          porta dignissim hendrerit. Cras id velit varius, fermentum lectus
          vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
          vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
          dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
          sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
          Donec eget sodales risus, quis dignissim neque.
        </p>
      </div>
    </>
  );
}

import { Carousel } from "@/components/CarouselComponent";
import Header from "@/components/HeaderComponent";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Header></Header>
      <Carousel></Carousel>      
      <section id="mu-about-us" className="py-16 relative bg-white">
      <div className="container mx-auto">
        <div className="text-center sm:mx-10">
          <span className="text-[#004B98] text-5xl">Movilidad Urbana de Personas de Lima y Callao</span>
          <h2 className="text-4xl font-semibold mt-4">Acerca del Proyecto</h2>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-2">                      
          <div className="col-span-1">
            <div className="flex justify-end mt-10 sm:mx-10">
              <Image src={`${process.env.basePath}/img/about-us.jpg`} alt="img" width={500} height={10} />
            </div>
          </div>

          <div className="col-span-1">

            <div className="mt-10 text-justify lg:text-sm sm:text-sm sm:mx-10">
              <p>
                Con la finalidad de beneficiar a la población de Lima y Callao, la ATU contrató los servicios de Telefónica del Perú para realizar un estudio sobre movilidad urbana en la ciudad, el cual se realizará por medio de la solución digital Luca Transit, que utiliza herramientas de BIG DATA y analítica avanzada para procesar grandes cantidades de datos. Para ello, se analizarán los datos de movilidad generados por los teléfonos móviles de millones de personas, procesándolos, anonimizándolos y extrapolándolos para estimar la cantidad de viajes en todo Lima y Callao, permitiendo conocer los puntos de inicio y fin de sus viajes, así como su segmentación demográfica (edad y género) y el propósito de sus viajes, inferidos a partir de la frecuencia de los mismos. El análisis realizado servirá de insumo para los futuros estudios de demanda de la ciudad, permitiendo con ello mejorar la planificación de los sistemas de transporte, el cual se basará en necesidades reales y no en un diseño conceptual o de escritorio. Pero, lo más importante, es que permitirá que los usuarios no tengan que realizar tantos trasbordos, lo que hará más rápidos y cómodos sus viajes.. El estudio se realizará sobre la base de un monitoreo de datos a lo largo de 5 meses durante 3 años (2016, 2017 y 2019), aplicado a millones de personas, durante 24 horas al día en los 50 distritos de lima y callao, divididos en 335 zonas de transporte. Es necesario señalar que Telefónica cumple con la Ley de Protección de Datos Personales y la Ley del Secreto de las Telecomunicaciones, ya que los grandes volumen de datos recabados son anonimizados, agregados y extrapolados. Es la primera vez que se realiza un estudio de movilidad urbana con un universo tan grande en América Latina utilizando herramientas de BIG DATA.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>    

    <section id="mu-about-us" className="relative ">
      <div className="fixed inset-0 -z-10 flex justify-center items-center">
        <Image src={`${process.env.basePath}/img/counter-bg.jpeg`} alt="Background" className="min-w-full h-full object-cover" fill={true}/>
      </div>
      <div className="flex justify-center items-center bg-black bg-opacity-70 py-20">
        <Image src={`${process.env.basePath}/img/footer.png`} alt="Footer" height={800} width={800} />
      </div>
    </section>




    <section id="mu-about-us" className="py-16 relative bg-white">
      <div className="container mx-auto">
        <div className="text-center sm:mx-10">
          <span className="text-[#004B98] text-5xl">Evolución del promedio de viajes en Lima y Callao</span>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-2">                      
          <div className="col-span-1">
            <div className="flex justify-end mt-10 sm:mx-10">
              <Image src={`${process.env.basePath}/img/4.jpg`} alt="img" width={500} height={300} />
            </div>
          </div>

          <div className="col-span-1">

            <div className="mt-10 text-justify lg:text-sm sm:text-sm sm:mx-10">
              <p>
              A través de los años la cantidad de viajes diarios en Lima y Callao ha presentado un crecimiento significativo, tal como se demuestra en los estudios del Plan Maestro de Transporte Urbano del 2004 y 2012, donde los viajes llegaron a 16.5 millones y 22.3 millones de viajes respectivamente. Actualmente como resultado del estudio de movilidad urbana BIG DATA - 2019 se ha determinado que los viajes en Lima y Callao suman un total 26.8 millones de viajes en un día hábil (viajes motorizados y no motorizados).
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>

    <section id="mu-about-us" className="py-16 relative bg-white">
      <div className="container mx-auto">
        <div className="text-center sm:mx-10">
          <span className="text-[#004B98] text-5xl">Perfil de la movilidad en Lima y Callao</span>
        </div>

        <div className="grid grid-cols-1">                      
          <div className="col-span-1">
            <div className="flex justify-center mt-10 sm:mx-10">
              <Image src={`${process.env.basePath}/img/5.jpg`} alt="img" width={1100} height={0}/>
            </div>
          </div>

          <div className="col-span-1">
            <div className="mx-56 mt-5 text-sm text-justify">
              <p>
              A través de los años la cantidad de viajes diarios en Lima y Callao ha presentado un crecimiento significativo, tal como se demuestra en los estudios del Plan Maestro de Transporte Urbano del 2004 y 2012, donde los viajes llegaron a 16.5 millones y 22.3 millones de viajes respectivamente. Actualmente como resultado del estudio de movilidad urbana BIG DATA - 2019 se ha determinado que los viajes en Lima y Callao suman un total 26.8 millones de viajes en un día hábil (viajes motorizados y no motorizados).
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>

    <section id="mu-about-us" className="py-16 relative bg-white">
      <div className="container mx-auto">
        <div className="text-center sm:mx-10">
          <span className="text-[#004B98] text-5xl">Tasa Promedio de Viajes Diarios Por Habitante</span>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-2">                      
          <div className="col-span-1">
            <div className="flex justify-end mt-10 sm:mx-10">
              <Image src={`${process.env.basePath}/img/6.jpg`} alt="img" width={500} height={0}/>
            </div>
          </div>

          <div className="col-span-1">

            <div className="mt-10 text-justify lg:text-sm sm:text-sm sm:mx-10">
              <p>
              De los resultados del estudio de movilidad urbana BIG DATA – 2019, en promedio una persona viaja 2.4 veces al día, siendo el día viernes el de mayor incidencia con 2.70 viajes/día.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>

    
    <section id="mu-about-us" className="py-16 relative bg-white">
      <div className="container mx-auto">
        <div className="text-center sm:mx-10">
          <span className="text-[#004B98] text-5xl">Viajes Generados y Atraidos Según Distritos</span>
        </div>

        <div className="grid grid-cols-1">                      
          <div className="col-span-1">
            <div className="flex justify-center mt-10 sm:mx-10">
              <Image src={`${process.env.basePath}/img/7.jpg`} alt="img" width={1100} height={0}/>
            </div>
          </div>

          <div className="col-span-1">
            <div className="mx-56 mt-5 text-sm text-justify">
              <p>
              De los resultados del estudio de movilidad urbana BIG DATA – 2019, los Distritos que generan mayor cantidad de viajes en los días miércoles de 6am a 9am son San Juan de Lurigancho, San Martin de Porres y Ate Vitarte; asimismo, los distritos que atraen mayor cantidad de viajes en los días miércoles de 6am a 9am son Lima Cercado, San Isidro, y Santiago de Surco.</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>

    <section id="mu-about-us" className="py-16 relative bg-white">
      <div className="container mx-auto">
        <div className="text-center sm:mx-10">
          <span className="text-[#004B98] text-5xl">Viajes Generados Desde el Centro Empresarial San Isidro</span>
        </div>

        <div className="grid grid-cols-1">                      
          <div className="col-span-1">
            <div className="flex justify-center mt-10 sm:mx-10">
              <Image src={`${process.env.basePath}/img/8.jpg`} alt="img" width={1100} height={0}/>
            </div>
          </div>

          <div className="col-span-1">
            <div className="mx-56 mt-5 text-sm text-justify">
              <p>Según el estudio de movilidad urbana BIG DATA – 2019, se ha identificado que dentro del centro empresarial en días miércoles se generan 286,601 viajes, de los cuales el 49% se dirigen hacia la zona centro.</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>

    <section id="mu-about-us" className="py-16 relative bg-white">
      <div className="container mx-auto">
        <div className="text-center sm:mx-10">
          <span className="text-[#004B98] text-5xl">Aplicativo Web Big Data</span>
        </div>

        <div className="grid grid-cols-1">                      
          <div className="col-span-1">
            <div className="flex justify-center mt-10 sm:mx-10">
              <Image src={`${process.env.basePath}/img/9.jpg`} alt="img" width={1100} height={0}/>
            </div>
          </div>

          <div className="col-span-1">
            <div className="mx-56 mt-5 text-sm text-justify">
              <p>Uno de los principales productos del estudio de movilidad urbana BIG DATA – 2019, es el aplicativo Web Big Data, el cual es una herramienta informática que permitirá realizar consultas sobre la movilidad de la población caracterizando los viajes y el perfil de los usuarios, todo esto clasificados en zonas de análisis.</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>

    <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
                <a href="https://pe.linkedin.com/company/atuperu" target="_blank" className="bg-gray-700 hover:bg-[#004B98] rounded-full p-4 justify-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" stroke="0" fill="#ffffff" ><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>              
                </a>

                <a href="https://twitter.com/ATU_GobPeru" target="_blank" className="bg-gray-700 hover:bg-[#004B98] rounded-full p-4 justify-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" stroke="0" fill="#ffffff"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>              
                  </a>              
                
                <a href="https://www.facebook.com/ATU.GobPeru" target="_blank" className="bg-gray-700 hover:bg-[#004B98] rounded-full p-4 justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" stroke="0" fill="#ffffff"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>

                <a href="https://www.instagram.com/atu.gobperu" target="_blank" className="bg-gray-700 hover:bg-[#004B98] rounded-full p-4 justify-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" stroke="0" fill="#ffffff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>              
                </a>
                
                <a href="https://www.youtube.com/c/ATUPeru" target="_blank" className="bg-gray-700 hover:bg-[#004B98] rounded-full p-4 justify-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" stroke="0" fill="#ffffff"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            <p className="text-center text-sm text-35pxgray-400">
                © Copyright ATU. All rights reserved.
            </p>
        </div>
    </footer>

    </>
  );
}

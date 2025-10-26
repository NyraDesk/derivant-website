import React from 'react';

const NotezBentoSection = () => {
  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Flex layout per controllare meglio le dimensioni */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">

          {/* Sinistra - Tab STRETTA E ALTA stile iPhone */}
          <div className="bg-gray-100 rounded-3xl shadow-xl border border-gray-200 w-[350px] h-[650px]">
            {/* Contenuto placeholder */}
          </div>

          {/* Destra - Tab rettangolare (più larga) */}
          <div className="bg-gray-100 rounded-3xl shadow-xl border border-gray-200 w-[550px] h-[650px]">
            {/* Contenuto placeholder */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezBentoSection;

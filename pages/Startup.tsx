import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

const Startup: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Startup</title>
        <meta name="description" content={`Startup Projects`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Startup"} />
        <meta name="description" content={`Startup Projects`} />
        <link rel="canonical" href={"https://www.yunusemreonec.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.yunusemreonec.com"} />
        <meta property="og:site_name" content="Yunus Emre ÖNEÇ" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      {!isTabletOrMobile ? (
        <article className="ml-3 scrollbar text-left pb-20">
          <section className="pr-5 mt-5">
            <div className="flex flex-row justify-center items-center h-full">
              <div className="w-full max-w-5xl m-4 lg:m-6">
                <div className="text-lg text-white mb-8">
                  <div className="md:flex items-center">
                    <h1 className="lg:text-5xl text-indigo-400 font-bold leading-tight text-3xl mb-4">
                      Startup Projeleri
                    </h1>
                  </div>
                  <p className="text-gray-300 mb-8">
                    Aşağıda geliştirme aşamasında olan startup projelerim bulunmaktadır. Bu projeler henüz tamamlanmamış olup, yakında daha fazla detay paylaşılacaktır.
                  </p>
                </div>

                {/* Projeler */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Sosyal Medya Platformu */}
                  <div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:bg-opacity-70">
                    <div className="relative">
                      <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                        Yakında
                      </div>
                      <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-white mb-3">Sosyal Medya Paylaşım Platformu</h2>
                      <p className="text-gray-300 mb-4">
                        Kullanıcıların tüm sosyal medya hesaplarını tek bir platformda paylaşabilecekleri, 
                         bir uygulama.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                      </div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                        <span className="text-indigo-300 text-sm ml-3">30%</span>
                      </div>
                    </div>
                  </div>

                  {/* E-Ticaret Platformu */}
                  
                </div>

                {/* İletişim Bölümü */}
                <div className="mt-12 bg-gray-800 bg-opacity-30 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-indigo-300 mb-4">İşbirliği ve Fikirler</h2>
                  <p className="text-gray-300 mb-6">
                    Startup projelerim hakkında daha fazla bilgi almak, işbirliği yapmak veya fikir paylaşmak isterseniz benimle iletişime geçebilirsiniz.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a 
                      href="mailto:yunusemreonec81@icloud.com" 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      E-posta ile İletişim
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      ) : (
        <article className="scrollbar text-left pb-20">
          <section className="p-4">
            <div className="flex flex-col items-center h-full">
              <div className="w-full">
                <div className="text-lg text-white mb-6">
                  <h1 className="text-3xl text-indigo-400 font-bold mb-3">
                    Startup Projeleri
                  </h1>
                  <p className="text-gray-300 text-sm mb-6">
                    Aşağıda geliştirme aşamasında olan startup projelerim bulunmaktadır. Bu projeler henüz tamamlanmamış olup, yakında daha fazla detay paylaşılacaktır.
                  </p>
                </div>

                {/* Projeler */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Sosyal Medya Platformu */}
                  <div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden">
                    <div className="relative">
                      <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-lg font-medium text-xs">
                        Yakında
                      </div>
                      <div className="h-36 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-white mb-2">Sosyal Medya Paylaşım Platformu</h2>
                      <p className="text-gray-300 text-sm mb-3">
                        Kullanıcıların tüm sosyal medya hesaplarını tek bir platformda paylaşabilecekleri, 
                        kişiselleştirilmiş profil sayfaları oluşturabilecekleri bir web uygulaması.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="bg-indigo-900 bg-opacity-50 text-indigo-200 text-xs px-2 py-0.5 rounded-full">Web Uygulaması</span>
                        <span className="bg-indigo-900 bg-opacity-50 text-indigo-200 text-xs px-2 py-0.5 rounded-full">ASP.NET Core</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                        <span className="text-indigo-300 text-xs ml-2">30%</span>
                      </div>
                    </div>
                  </div>

                  {/* E-Ticaret Platformu */}
                  <div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden">
                    <div className="relative">
                      <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-lg font-medium text-xs">
                        Yakında
                      </div>
                      <div className="h-36 bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-white mb-2">Özel E-Ticaret Çözümü</h2>
                      <p className="text-gray-300 text-sm mb-3">
                        Küçük ve orta ölçekli işletmeler için özelleştirilebilir, kolay kullanımlı 
                        ve entegre ödeme sistemleri içeren e-ticaret platformu.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="bg-blue-900 bg-opacity-50 text-blue-200 text-xs px-2 py-0.5 rounded-full">E-Ticaret</span>
                        <span className="bg-blue-900 bg-opacity-50 text-blue-200 text-xs px-2 py-0.5 rounded-full">.NET Core</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                        <span className="text-blue-300 text-xs ml-2">15%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* İletişim Bölümü */}
                <div className="mt-8 bg-gray-800 bg-opacity-30 rounded-xl p-4">
                  <h2 className="text-xl font-bold text-indigo-300 mb-3">İşbirliği ve Fikirler</h2>
                  <p className="text-gray-300 text-sm mb-4">
                    Startup projelerim hakkında daha fazla bilgi almak isterseniz benimle iletişime geçebilirsiniz.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="mailto:yunusemreonec81@icloud.com" 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      E-posta ile İletişim
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      )}
    </Scrollbars>
  );
};

export default Startup;

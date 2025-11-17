"use client"
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import FullPageLoader from '@/components/full-loader'

export default function HomePage() {
  const [linkUrl, setLinkUrl] = useState('')
  const [loading, setLoading] = useState(true)

  const linkList = [
    {
      id: 1,
      name: 'التأمين الإلزامي للمركبات',
      desc: 'احصل على تأمين إلزامي سريع وبأفضل الأسعار',
      url: linkUrl,
    },
    {
      id: 2,
      name: 'التأمين الشامل',
      desc: 'تغطية كاملة لسيارتك ضد الحوادث والسرقة والأضرار',
      url: linkUrl,
    },
    {
      id: 3,
      name: 'عروض التأمين',
      desc: 'اطّلع على أحدث العروض والخصومات على وثائق التأمين',
      url: linkUrl,
    },
    {
      id: 4,
      name: 'تجديد وثيقة التأمين',
      desc: 'قم بتجديد وثيقتك بسهولة وفي دقائق',
      url: linkUrl,
    },
  ];

  const handleUrls = async () => {
    const link = "/"
    setLinkUrl(link)
  }

  useEffect(() => {
    handleUrls().then(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      {loading && <FullPageLoader />}

      <div className="min-h-screen bg-gradient-to-br from-[#0a1a3f] via-[#0f224a] to-[#0a1a3f] text-white">
        <div className="container max-w-2xl mx-auto px-4 py-12">

          {/* Logo Section */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-32 h-32 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-blue-300/20 shadow-[0_0_30px_rgba(0,140,255,0.3)] flex items-center justify-center">
              <img src="/Auto-Insurance-Hail-Damage-Featured-Image-803x420.webp" alt="logo" className="drop-shadow-xl  rounded-full " />
            </div>

            <h1 className=" flex text-4xl font-bold drop-shadow-lg tracking-wide">

              خدمات التأمين والعروض
            </h1>
            <p className="flex text-blue-200 mt-2 text-lg">
              منصة ذكية لخدمات التأمين
              <img src='/ver.png' alt='logo' width={30} /></p>


          </div>

          {/* Links Section */}
          <div className="space-y-4 mb-12">
            {linkList.map((i) => (
              <Card
                key={i.id}
                className="bg-white/10 backdrop-blur-xl border border-blue-300/20 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(0,140,255,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link
                  href={i.url}
                  className="flex items-center gap-4 p-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center border border-blue-400/20 shadow-inner">
                    <Globe className="w-6 h-6 text-blue-300 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <div className="flex-1 text-right">
                    <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {i.name}
                    </h3>
                    <p className="text-sm text-blue-200">
                      {i.desc}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <footer className="text-center space-y-4 mt-10">
            <div className="flex justify-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-blue-200 hover:text-cyan-300 transition-colors underline"
              >
                سياسة الخصوصية
              </Link>
              <span className="text-blue-300">|</span>
              <Link
                href="/terms"
                className="text-blue-200 hover:text-cyan-300 transition-colors underline"
              >
                الشروط والأحكام
              </Link>
            </div>
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} جميع الحقوق محفوظة
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

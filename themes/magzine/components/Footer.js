import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

export default function Footer({ title }) {
  const footerLinks = CONFIG.MAGZINE_FOOTER_LINKS

  return (
    <footer id='footer-bottom' className='z-10 bg-black text-white justify-center m-auto w-full p-6 relative'>
      <div className='max-w-screen-3xl w-full mx-auto'>
        <div className='w-full flex lg:flex-row flex-col justify-between py-16'>
          <div className='gap-x-2 py-6 flex items-center'>
            <div>
              <h1 className='text-lg'>{title}</h1>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-8'>
            {footerLinks?.map((group, index) => (
              <div key={index}>
                <div className='font-bold text-xl text-white lg:pb-8 pb-4'>{group.name}</div>
                <div className='flex flex-col gap-y-2'>
                  {group.menus?.map((menu, index) => (
                    <div key={index}>
                      <SmartLink href={menu.href} className='hover:underline'>{menu.title}</SmartLink>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

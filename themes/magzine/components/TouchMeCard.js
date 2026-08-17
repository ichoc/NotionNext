import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  // 个人站点：开关以主题本地配置为准，避免被 Notion_Config 默认值重新开启
  if (!CONFIG.MAGZINE_SOCIAL_CARD) {
    return <></>
  }

  return (
    <div className={'relative h-32 text-black flex flex-col'}>
      <FlipCard
        className='cursor-pointer lg:py-8 px-4 py-4 border bg-[var(--magzine-console-primary)] dark:border-gray-600'
        frontContent={
          <div className='h-full'>
            <h2 className='font-[1000] text-3xl'>
              {siteConfig('MAGZINE_SOCIAL_CARD_TITLE_1')}
            </h2>
            <h3 className='pt-2'>
              {siteConfig('MAGZINE_SOCIAL_CARD_TITLE_2')}
            </h3>
          </div>
        }
        backContent={
          <SmartLink href={siteConfig('MAGZINE_SOCIAL_CARD_URL', '#', CONFIG)}>
            <div className='font-[1000] text-xl h-full'>
              {siteConfig('MAGZINE_SOCIAL_CARD_TITLE_3')}
            </div>
          </SmartLink>
        }
      />
    </div>
  )
}

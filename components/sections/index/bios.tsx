import Heading from '../../heading'
import React from 'react'
import Bio from '../../description'

export default function Bios(): JSX.Element {
  return (
    <div className="mb-5">
      <Heading>略歴</Heading>
      <dl>
        <Bio title={<>1996</>} detail={<>栃木で生まれる</>} />
        <Bio title={<>2019</>} detail={<>金沢大学理工学域電子情報学類卒業</>} />
        <Bio
          title={<>2019</>}
          detail={
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<a href="https://www.colorfulcompany.co.jp" class="underline" target="_blank" rel="noopener">株式会社カラフルカンパニー</a>入社'
              }}
            />
          }
        />
        <Bio
          title={<>2023</>}
          detail={
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<a href="https://bitjourney.com" class="underline" target="_blank" rel="noopener">株式会社ビットジャーニー</a>入社'
              }}
            />
          }
        />
      </dl>
    </div>
  )
}

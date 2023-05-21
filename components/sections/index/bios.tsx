import Heading from '../../heading'
import Bio from '../../description'

export default function Bios(): JSX.Element {
  return (
    <div className="mb-5">
      <Heading>Bio</Heading>
      <dl>
        <Bio title={<>1996</>} detail={<>Born in 栃木県</>} />
        <Bio title={<>2019</>} detail={<>Graduated from 金沢大学理工学域電子情報学類</>} />
        <Bio
          title={<>2019</>}
          detail={
            <div
              dangerouslySetInnerHTML={{
                __html:
                  'Joined <a href="https://www.colorfulcompany.co.jp" class="underline">Colorful Company, Inc.</a>'
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
                  'Joined <a href="https://bitjourney.com" class="underline">Bit Journey, Inc.</a>'
              }}
            />
          }
        />
      </dl>
    </div>
  )
}

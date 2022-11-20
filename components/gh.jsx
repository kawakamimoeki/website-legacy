import Image from 'next/image'

export default function component({ repo }) {
  return (
    <a href={`https://github.com/${repo}`}>
      <Image
        src={`https://github-link-card.s3.ap-northeast-1.amazonaws.com/${repo}.png`}
        alt={repo}
        width="460"
        height="100"
      />
    </a>
  )
}

import Gh from './gh'

export default function Component({ repos }) {
  return (
    <ul>
      {repos.map((c) => {
        return (
          <li key={c} className="py-1">
            <Gh repo={c} />
          </li>
        )
      })}
    </ul>
  )
}

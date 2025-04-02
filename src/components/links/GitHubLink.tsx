import { PROFILE } from '@/constants/profile'
import GitHub from '../icons/GitHub'

export default function GitHubLink() {
  return (
    <a href={PROFILE.GITHUB_LINK} target="_blank" rel="noopener noreferrer">
      <GitHub />
    </a>
  )
}

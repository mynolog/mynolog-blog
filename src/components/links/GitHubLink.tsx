import { CONTACT } from '@/constants/contact'
import GitHubIcon from '../icons/GitHubIcon'

interface GitHubLinkProps {
  className?: string
}

export default function GitHubLink({ className = '' }: GitHubLinkProps) {
  return (
    <a href={CONTACT.GITHUB_LINK} target="_blank" rel="noopener noreferrer">
      <GitHubIcon className={className} />
    </a>
  )
}

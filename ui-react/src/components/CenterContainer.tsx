import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

const CenterContainer: FC<Props> = ({ children }) => <div className="block">{children}</div>

export default CenterContainer
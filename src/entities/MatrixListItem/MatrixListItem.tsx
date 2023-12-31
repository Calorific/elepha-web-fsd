import { FC } from 'react'
import { MatrixItemProps } from '@/entities/MatrixListItem/types.js'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'

export const MatrixListItem: FC<MatrixItemProps> = ({ name, title, description, isLoading }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`matrix/${name}`)
  }

  return <>
    <Card style={{ width: 300, height: '100%' }} loading={isLoading} hoverable onClick={handleClick}>
      <Card.Meta {...{ title, description }} />
    </Card>
  </>
}
import React from 'react'
import { Card } from '@nextui-org/react'
import LineGraph from './Graphs/LineGraph'

const TeamSettings = () => {
  return (
    <>
    <div className="container m-auto my-3">
        <Card>
            <LineGraph />
        </Card>
    </div>
    </>
  )
}

export default TeamSettings
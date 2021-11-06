import { Card } from 'sula';

export default () => {
  return(
    <Card
    className="w-1/6 h-48 ml-4 shadow-md"
    >
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
        <div>
          1
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          2
        </div>
      </div>
    </Card>
  )
}

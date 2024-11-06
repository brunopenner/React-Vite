import Box from "./Box"
import "./BoxList.css"

export default function BoxList ({colors}) {
    const generateBoxList = () => {
        return Array.from({length:25}, (_,i) => {
            return <Box key={i} colors={colors} />
        })
    }

    return (
        <div className="boxList">
            {generateBoxList()}
        </div>
    )
}
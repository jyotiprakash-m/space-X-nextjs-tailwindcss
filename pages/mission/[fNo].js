import MissionDetails from '../../components/MissionDetails'
import { useRouter } from 'next/router'
function Mission() {
    const router = useRouter()
    const fNo = router.query.fNo;


    return (
        <MissionDetails fNo={fNo} />
    )
}

export default Mission
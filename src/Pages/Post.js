import { Fragment } from "react"
import { useLocation, useParams } from "react-router-dom"

const Post = () => {

    const {id} = useParams();

    const query = new URLSearchParams(useLocation().search)


    return (
        <Fragment>
            <h2> id = {id} </h2>
            <h2> {query.get("name")} </h2>
            <h2> {query.get("test")} </h2>
        </Fragment>
    )
}

export default Post



// const Post = ({match}) => {
//     return (
//         <h2>
//             id = {match.params.id}
//         </h2>
//     )
// }

// export default Post
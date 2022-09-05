import { useEffect } from "react"
import { Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min"
import EditProfile from "../components/EditProfile"
import ViewProfile from "../components/ViewProfile"

const Profile =({login}) => {

    const history = useHistory()

    const {path, url} = useRouteMatch()


    useEffect(()=>{
        if(!login){
            history.push('/')
        }
    }, [login, history])



    return (
        <Fragment>
            <h1>Profile page</h1>

            <ul>
                <li>
                    <Link to={`${url}/viewprofile`}>View Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </li>
            </ul>


            <Switch>
                <Route path={`${path}/viewprofile`} component={ViewProfile}></Route>
                <Route path={`${path}/editprofile`} component={EditProfile}></Route>
            </Switch>


        </Fragment>
    )
}

export default Profile
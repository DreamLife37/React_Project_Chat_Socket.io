import {FC} from "react";

type ItemPropsType = {
    user: {
        id: string, message: string, user: {
            name: string, id: string
        }
    },
    index: number
}

export const Item: FC<ItemPropsType> = ({user, index}) => {

    return <div style={{display: 'flex', color: 'white', alignItems: 'center', padding: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px'}}>
            <div><img style={{width:'50px'}} src={'https://via.placeholder.com/150'}/></div>
            <b>{user.user.name}</b>
            <div>{user.message}
                <hr/>
            </div>

        </div>
    </div>
}
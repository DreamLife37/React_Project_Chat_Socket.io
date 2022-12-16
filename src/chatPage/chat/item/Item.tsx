import {FC} from "react";
import {MessageItemType} from "../../../store/slices/chatSlice";

type ItemPropsType = {
    user: MessageItemType

}

export const Item: FC<ItemPropsType> = ({user}) => {

    return <div style={{display: 'flex', color: 'white', alignItems: 'center', padding: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px'}}>
            <div><img style={{width: '50px'}} src={'https://via.placeholder.com/150'}/></div>
            <b>{user.user?.name}</b>
            <div>{user.message}
                <hr/>
            </div>
        </div>
    </div>
}
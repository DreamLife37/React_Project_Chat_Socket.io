import {Avatar, AvatarBadge, Button} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks";
import {logout} from "../store/slices/chatSlice";

export const Logout = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handlerButton = () => {
        dispatch(logout())
        navigate('/inputName')
    }
    return <div style={{padding: '20px', display: "flex", justifyContent: "center"}}>
        <Avatar>
            <AvatarBadge boxSize='1.25em' bg='green.500'/>
        </Avatar>
        <div style={{paddingLeft: '16px'}}>
            <Button onClick={handlerButton}
                    colorScheme='blue'>Выйти</Button></div>
    </div>
}

import {Avatar, AvatarBadge, Button} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {logout} from "../store/slices/chatSlice";

export const Logout = () => {
    const name = useAppSelector(state => state.name)
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

        <span style={{paddingLeft:'10px'}}>{name}</span>

        <div style={{paddingLeft: '16px'}}>
            <Button onClick={handlerButton}
                    colorScheme='blue'>Выйти</Button></div>
    </div>
}

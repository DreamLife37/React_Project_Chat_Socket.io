import {Avatar, Card, Heading, Text, CardHeader, CardBody, WrapItem} from "@chakra-ui/react";
import {FC} from "react";
import {MessageItemType} from "../../../store/slices/chatSlice";

type ItemPropsType = {
    user: MessageItemType
}

export const Item: FC<ItemPropsType> = ({user}) => {
    return <Card maxW='md' color={'white'} boxShadow={"dark-lg"} marginY={'10px'}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px'}}>
            <CardHeader style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '16px'}}>
                <WrapItem>
                    <Avatar name={user.user?.name}/>
                </WrapItem>
                <Heading size='md' padding={'16px'}>{user.user?.name}</Heading>
            </CardHeader>
            <CardBody><Text fontSize='md'>{user.message}
            </Text></CardBody>
        </div>
    </Card>
}
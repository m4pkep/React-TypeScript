import React, {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div>
            <div style={{padding: 15, border: '2px solid gray'}}>
                {user.id} {user.name}. Живет в {user.address.city} на улице {user.address.street}
            </div>
        </div>
    );
};

export default UserItem;
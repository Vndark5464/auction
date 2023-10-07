import React, { useState } from 'react';

function UserManagementTable() {
    const [users, setUsers] = useState([
        {id: 1, image: '/path/to/img.jpg', name: 'Người dùng 1', dob: '01-01-1990', email: 'user1@example.com', address: '123 Street, City, State, Country', phone: '123-456-7890', idPhoto: '/path/to/idPhoto.jpg', activeBids: '5'},
        {id: 2, image: '/path/to/img.jpg', name: 'Người dùng 2', dob: '02-02-1990', email: 'user2@example.com', address: '456 Road, City, State, Country', phone: '098-765-4321', idPhoto: '/path/to/idPhoto.jpg', activeBids: '2'}
    ]);

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <table role="table" aria-label="Bảng quản lý người dùng">
            <thead>
            <tr>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Email</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Ảnh căn cước công dân</th>
                <th scope="col">Xóa</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <td><img src={user.image} alt={`Ảnh của ${user.name}`} /></td>
                    <td>{user.name}</td>
                    <td>{user.dob}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td><img src={user.idPhoto} alt={`Ảnh căn cước công dân của ${user.name}`} /></td>
                    <td>
                      <button aria-label={`Xóa người dùng ${user.name}`} onClick={() => deleteUser(user.id)}>
                        Xóa
                      </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default UserManagementTable;
import React from "react";

class UserProfile extends React.Component {
    logout() {
        // Logic for logging out user goes here...
    }

    render() {
        const {username, avatarUrl} = this.props; // Assuming these are passed as props

        return (
        <div role="main" aria-label="User Profile Page">

            <header>
                <img src={avatarUrl} alt={`${username}'s avatar`} />
                <h1>{username}</h1>
            </header>

            <nav aria-label="User navigation" role='navigation'>
                <a href="#profile" role="link" aria-label="Profile">Hồ sơ</a>
                <a href="#bank" role="link" aria-label="Bank">Ngân hàng</a>
                <a href="#settings" role="link" aria-label="Settings">Cài đặt</a>
                <button onClick={this.logout} aria-label="Logout">Đăng xuất</button>
            </nav>
            
        </div>
        );
    }
}

export default UserProfile;
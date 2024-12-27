

import { useParams } from 'react-router-dom';

function Profile() {
    const { nickname } = useParams(); // Access dynamic segment
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Nickname: {nickname}</p>
        </div>
    );
}

export default Profile;


// function Profile() {
//     return (
//         <h1>Profile Page</h1>
//     );
// }

// export default Profile;

const ProfilePage = () => {
    return (
        <div className="h-screen justify-center items-center">
            <div>
                <h1>Profile Page</h1>
                <div >
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input" placeholder="Type here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="text" className="input" placeholder="Type here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="text" className="input" placeholder="Type here" />
                    </fieldset>
                    <button className="btn btn-accent">Update profile</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
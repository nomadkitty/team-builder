import React from "react";

const TeamMember = props => {

    return (
        <div>
            {props.memberList.map(item => {
                return (
                    <div key={item.key}>
                        <h2>{item.name}</h2>
                        <ul>
                            <li>{item.role}</li>
                            <li>{item.email}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default TeamMember;
import React from "react";


const TeamCard = ({photo, name, role}) => {
    return(
        <div className="flex flex-col">
            <img src={photo} alt={`${name}`} className="w-40 h-40 rounded-t-2xl border-b-8 border-light-green"/>
            <div className="flex flex-col justify-between grow text-center max-w-[160px]  py-4 bg-light-blue rounded-b-2xl">
                <h4 className="text-lg mb-6 px-2">{name}</h4>
                <p className=" leading-7">{role}</p>

            </div>
        </div>
    )
}

export default TeamCard;